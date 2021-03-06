import * as _debug from 'debug'
import * as _fs from 'fs'
import * as koaWebpack from 'koa-webpack'
import * as MFS from 'memory-fs'
import * as webpack from 'webpack'

import { getDllFile, resolve } from '../build/config'

import clientConfig from '../build/vue-client'
import serverConfig from '../build/vue-server'

const debug = _debug('rubick:server:dev')

const dllFile = getDllFile()
const dllFilePath = resolve('dist/static', dllFile)

const dllFileContent = _fs.readFileSync(dllFilePath, 'utf-8')

export default (cb: any) => {
  // tslint:disable-next-line:variable-name
  let _resolve: any
  let clientManifest: any
  let bundle: any
  let fs: any

  const readyPromise = new Promise(r => {
    _resolve = r
  })

  const ready = (...args: any[]) => {
    _resolve()
    cb(...args)
  }

  const clientCompiler = webpack(clientConfig)

  const webpackMiddleware = koaWebpack({
    compiler: clientCompiler,
  })

  clientCompiler.plugin('done', stats => {
    stats = stats.toJson()
    stats.errors.forEach(debug)
    stats.warnings.forEach(debug)

    if (stats.errors.length) {
      return
    }

    fs = webpackMiddleware.dev.fileSystem
    fs.writeFileSync(dllFilePath, dllFileContent, 'utf-8')
    clientManifest = JSON.parse(
      fs.readFileSync(resolve('dist/vue-ssr-client-manifest.json')),
    )

    if (bundle) {
      ready({ bundle, clientManifest, fs })
    }
  })

  const mfs = new MFS()
  const serverCompiler = webpack(serverConfig)
  serverCompiler.outputFileSystem = mfs

  serverCompiler.watch({}, (err, stats) => {
    if (err) {
      throw err
    }

    stats = stats.toJson()

    if ((stats as any).errors.length) {
      return
    }

    bundle = JSON.parse(
      mfs.readFileSync(resolve('dist/vue-ssr-server-bundle.json')),
    )

    if (clientManifest) {
      ready({ bundle, clientManifest, fs })
    }
  })

  return { readyPromise, webpackMiddleware }
}
