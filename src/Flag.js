/**
 * @file chainable cli flag
 * @exports Flag
 *
 * @requires fliphub-core/Context
 * @requires ./deps#real
 */

const {Context} = require('fliphub-core')
const {real} = require('./deps')

/**
 * @desc fluent Script
 * @type {Context}
 */
class Flag extends Context {

  /**
   * @since 0.0.6
   * @see ScriptChain
   * @param {any} parent
   * @return {Flag}
   */
  static init(parent) {
    return new Flag(parent)
  }

  /**
   * @since 0.0.6
   * @param {any} parent
   */
  constructor(parent) {
    super(parent)

    this.extend(['dash', 'stringify', 'name', 'value'])
      .dash(false)
      .stringify(false)
      .name(String)
      .value(undefined)

    // so we can have groups by `--`
    // and index of flags
    // this.index = 0
    // this.group = 0
  }

  /**
   * @since 0.0.3
   * @desc whether the flag value should be stringified
   * @return {boolean}
   */
  shouldStringify() {
    const {value, stringify} = this.entries()
    if (stringify) return true
    if (typeof value !== 'string') return false

    // any letter or number, or -_, but not double dash
    // or has any special character
    return (
      (!(/[a-zA-Z0-9-_]/).test(value) && !value.includes('--')) ||
      /[+=~`@#$%^&*().,\/\\:;'"{}|]/.test(value) // eslint-disable-line
    )
  }

  /**
   * @since 0.0.3
   *
   * @example
   *   if value & stringify: --name='val', name='val'
   *   else if value:        name=val,
   *   else:                 --name, name
   *
   *
   * @return {string}
   */
  toString() {
    let string = ''
    let {dash, name, value} = this.entries()

    // if dash: --
    // if prefix: (monorepo) e.g. (inferno-compat, lodash.forown)
    if (dash) string = '--'
    string += name

    if (real(value)) {
      if (this.shouldStringify()) string += `="${value}"`
      else string += `=${value}`
    }

    return string
  }
}

module.exports = Flag
