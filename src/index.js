/**
 * @file entry point
 * @module script-chain
 * @exports ScriptChain as a fn
 * @exports ScriptChain
 * @exports flipglob
 * @exports insertAt
 * @exports toarr
 * @exports prefixer
 *
 * @TODO have likeaboss generate these dynamic required docs out
 * @exports Scripts Object.define dynamically required when used
 * @exports Script Object.define dynamically required when used
 * @exports Permutator Object.define dynamically required when used
 * @exports Remember Object.define dynamically required when used
 * @exports log Object.define dynamically required when used
 * @exports execa Object.define dynamically required when used
 * @exports binner Object.define dynamically required when used
 *
 * @requires likeaboss
 * @requires flipglob
 * @requires fliplog
 * @requires execa
 * @requires to-arr
 * @requires insert-at-index
 * @requires ./deps
 * @requires ./ScriptChain ScriptChain
 */

const Boss = require('likeaboss')
const ScriptChain = require('./ScriptChain')
const {flipglob, insertAt, toarr, prefixer} = require('./deps')

module.exports = Boss.module(module)
  .fn(ScriptChain)
  .dir(__dirname)
  .props({
    ScriptChain,
    flipglob,
    insertAt,
    toarr,
    prefixer,
  })
  .dynamics('', 'binner')
  .dynamics([
    {name: 'Script', path: './Script'},
    {name: 'Scripts', path: './Scripts'},
    {name: 'Flag', path: './Flag'},
    {name: 'Permutator', path: './ScriptPermutator'},
    {name: 'Remember', path: './Remember'},
    {name: 'log', path: require.resolve('fliplog')},
    {name: 'execa', path: require.resolve('execa')},
  ])
  .end()
