const test = require('ava')
const {fosho, log} = require('fosho')
const {ScriptChain, prefixer} = require('../src')

test('can use only a flag', t => {
  const flag = new ScriptChain()
    .add()
    .flag('eh', prefixer('inferno', 'app1,inferno-cli,inferno'))

  fosho(flag.toString(), t).eq('--eh=inferno-app1,inferno-cli,inferno')
})

test('can use only a glob flag', t => {
  const globFlag = new ScriptChain()
    .add()
    .globFlag('eh', prefixer('inferno', 'app1,inferno-cli,inferno'))

  fosho(globFlag.toString(), t).eq('--eh="+(inferno-app1|inferno-cli|inferno)"')
})

test('can use only a glob arg', t => {
  const globFlag = new ScriptChain()
    .add()
    .globArg(prefixer('inferno', 'app1,inferno-cli,inferno'), false)

  fosho(globFlag.current.stringify(false).end().toString(), t).eq(
    '+(inferno-app1|inferno-cli|inferno)'
  )
})

// ---

test.failing(
  `
  can use only a glob arg
  and default to the name
  if there is only one filter`,
  t => {
    const globFlag = new ScriptChain()
      .add()
      .globArg(prefixer('inferno', 'devtools'), false)

    fosho(globFlag.current.stringify(false).end().toString(), t).eq(
      'inferno-devtools'
    )
  }
)
