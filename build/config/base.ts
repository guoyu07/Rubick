import * as path from 'path'
import { Options } from 'webpack'

import * as pkg from '../../package.json'

export { pkg }

enum ENV {
  DEV = 'development',
  PROD = 'production',
}

const NODE_ENV: ENV = (process.env.NODE_ENV as ENV) || ENV.DEV

export const globals = {
  NODE_ENV,
  'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
  __DEV__: NODE_ENV === ENV.DEV,
  __PROD__: NODE_ENV === ENV.PROD,
}

export const paths = (() => {
  const base = (...args: string[]) => path.resolve(__dirname, '../../', ...args)

  return {
    base,
    src: base.bind(null, 'src'),
    dist: base.bind(null, 'dist'),
    server: base.bind(null, 'server'),
    test: base.bind(null, 'test'),
  }
})()

export const alias = {}

export const vendors = [
  'axios',
  'regenerator-runtime/runtime',
  'vue',
  'vue-router',
  'vuex',
]

const serverHost: string = process.env.HOST || 'localhost'
const serverPort: number = +process.env.PORT || 4000

export interface Config {
  serverHost: string
  serverPort: number
  innerServer: string
  quiet: boolean
  stats: Options.Stats
  devTool: Options.Devtool
  publicPath: string
  hashType: 'hash' | 'chunkhash'
  minimize: boolean
}

const config = {
  serverHost,
  serverPort,
  innerServer: `http://localhost:${serverPort}/`,
  quiet: false,
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  },
} as Config

export default config
