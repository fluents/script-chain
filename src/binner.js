// @TODO needs improvements, cleanup, refactor
// const execa = require('execa')
const execa = require('child_process')
const exists = require('flipfile/exists')
const ObjectChain = require('obj-chain-core')

const objc = new ObjectChain(['config']).setup()
const prefix = process.cwd()

// needs doing
// objc.configName('')

const npmBinKey = prefix + '.npmBin'
const binKey = prefix + '.bin.'

function binRoot() {
  if (objc.has(npmBinKey)) return objc.val(npmBinKey)
  // exec in child_process, capture the buffer output, assign to var
  const npmBin = execa.execSync('npm bin').toString().replace(/\n/gim, '')
  objc.set(npmBinKey, npmBin).write().val()
  return npmBin
}

function binFor(node_module) {
  const bin = binRoot(node_module) + '/' + node_module
  if (exists(bin)) return bin
  return false
}

function nodeModuleFor(node_module) {
  try {
    let resolved = require.resolve(node_module)
    if (exists(resolved)) return resolved
  }
  catch (e) {
    return false
  }
  return false
}

function binOrModule(node_module, noFallback) {
  const key = binKey + objc.escape(node_module)
  if (objc.has(key)) return objc.val(key)
  const bin = binFor(node_module) || nodeModuleFor(node_module)
  return objc.set(key, bin || node_module).write().val()
}

function isBinnable(node_module) {
  const key = binKey + objc.escape(node_module)
  if (objc.has(key)) return objc.val(key)
  const bin = binFor(node_module) || nodeModuleFor(node_module)
  return objc.set(key, bin).write().val()
}

function find(node_module) {
  // objc.load()
  return binOrModule(node_module)
}
find.isBinnable = isBinnable

module.exports = find
