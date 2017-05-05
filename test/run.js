const test = require('ava')
const fosho = require('fosho')
const {ScriptChain} = require('../src')

test(`running a built script
  will log the correct stdout
  and will find the correct flag values`, async t => {
  t.plan(4)
  const scripts = new ScriptChain().debug(false)
  scripts.add().npm('diggy').env('magic').flag('env.zoolala', 'aoao').arg('-e')

  const results = await scripts.run()
  fosho(results.pop().stdout, t)
    .findStr('bumbididodidangadangdiggigiggi')
    .findStr('--env.zoolala=aoao')
    .findStr('-e')
  return t.pass()
})

test(`can run scripts with : nested, with no flags or env`, async t => {
  const scripts = new ScriptChain().debug(false)
  scripts.add().npm('diggy:nested')

  const results = await scripts.run()
  return t.pass()
})

// const globScoped = scriptchain.globScope(packages) || '*'
// const envScope = scriptchain.envScope('PKG_FILTER', packages)
// let flagged = flaggedWithEnv + globScoped
// if (browsers) {
//   browsers.split(',').forEach(browser => {
//     // also could do scriptchain.execSync(flagged + 'npm run karma:' + browser.toLowerCase())
//     scriptchain.runScriptForBin('karma', 'start test/karma/karma.unit.conf.js --browsers=' + browsers + ' ' + flagged)
//   })
// }
//
// scriptchain.execSync(' npm run karma:chrome ' + flagged)
//
// scriptchain.lerna.execFrom({
//   bin: 'rollup',
//   envs: ['production', 'browser', 'development'],
//   log: log || 'info',
//   options,
// })
