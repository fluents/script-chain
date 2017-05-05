const test = require('ava')
const fosho = require('fosho')
const {ScriptChain} = require('../src')

test.todo('stringify')

test('can use toString', t => {
  const scripts = new ScriptChain()
    .add()
    .npm('diggy')
    .env('magic')
    .flag('env.zoolala', 'aoao')
    .arg('-e')
  fosho(scripts.toString(), t).str()
})
test('can use toCmd on all scripts for an array', t => {
  const scripts = new ScriptChain()
  scripts.add().npm('diggy').env('magic').flag('env.zoolala', 'aoao').arg('-e')
  fosho(scripts.toCmd(), t).arr()
})
test('can use toCmd on one script for an obj', t => {
  const scripts = new ScriptChain()
    .add()
    .npm('diggy')
    .env('magic')
    .flag('env.zoolala', 'aoao')
    .arg('-e')
  fosho(scripts.toCmd(), t).all(['obj'])
})
