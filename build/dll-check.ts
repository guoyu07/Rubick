import { execSync } from 'child_process'
import * as fs from 'fs'

import * as _debug from 'debug'
import { isEqual } from 'lodash'
import * as rimraf from 'rimraf'

import * as pkg from '../package.json'

import { NODE_ENV, resolve } from './config'

const debug = _debug('rubick:dll:check')

const versions: {
  [key: string]: string
} = {
  NODE_ENV,
}

Object.keys(pkg.dependencies).forEach(dep => {
  const { version } = require(dep + '/package.json')
  versions[dep] = version
})

const dllCacheDir = resolve('.cache')
const dllCacheFile = resolve(dllCacheDir, 'dll-cache.json')

void (() => {
  if (
    fs.existsSync(dllCacheFile) &&
    fs.existsSync(resolve('dist/vendors.dll.manifest.json'))
  ) {
    const cache = require(dllCacheFile)
    if (isEqual(cache, versions)) {
      debug('No changes detected, skip')
      return
    }
    debug('changes detected, regenerate dll')
  } else {
    debug('cache or manifest not found, generate dll')
  }

  rimraf.sync(resolve('.cache'))
  rimraf.sync(resolve('dist'))

  execSync('yarn build:dll', {
    stdio: 'inherit',
  })

  if (!fs.existsSync(dllCacheDir)) {
    fs.mkdirSync(dllCacheDir)
  }

  fs.writeFileSync(dllCacheFile, JSON.stringify(versions, null, 2))
})()