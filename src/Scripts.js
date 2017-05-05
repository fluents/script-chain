/**
 * @file Scripts - multiple scripts, used by ./ScriptChain
 * @exports Scripts
 * @requires flipchain/ChainedMapExtendable
 * @requires ./Script
 */

const ChainedMap = require('flipchain/ChainedMapExtendable')
const Script = require('./Script')

/**
 * @workflow
 * @prop {Function} run parent.run
 * @prop {number} index current index
 * @prop {Object<string, Script>} scripts scripts
 * @type {ChainedMap}
 */
class Scripts extends ChainedMap {

  /**
   * @param  {Chainable | *} parent
   */
  constructor(parent) {
    super(parent)

    this.run = this.parent.run.bind(this.parent)
    this.index = -1
    this.scripts = {}

    this.parent.npm = script => this.parent.add().npm(script)
    this.npm = script => this.add().npm(script)
  }

  /**
   * @see this.scripts, Script
   * @description start/add/name a script
   * @param {string} [name]
   * @return {Script}
   */
  add(name = null) {
    this.index = this.index + 1
    if (name === null) name = this.index

    this.scripts[name] = new Script(this)
    this.current = this.scripts[name]
    return this.current
  }

  /**
   * @return {Array}
   */
  toCmd() {
    return Object.values(this.scripts).map(script => script.toCmd())
  }

  /**
   * @TODO return a string...
   * @return {Array} !!!
   */
  toString() {
    return Object.values(this.scripts).map(script => script.toString())
    // .join('###')
  }

  // --- todo ---

  // also .addFlags for use outside of scripts?
  // add(name) {
  //   this.flags[name] = new Flag(this)
  //   this.index = this.index + 1
  //   return this.flags[name]
  // }
}

module.exports = Scripts
