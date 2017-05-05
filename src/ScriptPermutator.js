/**
 * @author [challenger532](https://github.com/challenger532)
 * @file script that contains multiple flags
 * @exports ScriptPermutator
 *
 * @requires to-arr
 */

const toarr = require('to-arr')

function defaultMapFn(script) {
  return script
}

/**
 * @since 0.0.1
 * @TODO document
 */
class ScriptPermutator {
  constructor(ops) {
    const options = Object.assign(
      {
        mapFn: defaultMapFn,
        env: ['dev', 'prod'],
        operations: [],
        apps: [],
        empty: [],
        separator: ':',
        delimiter: ' ',
      },
      ops
    )

    this.mapper = options.mapFn
    delete options.mapFn

    this.ops = options
    this.keys = Object.keys(this.ops)
    this.handleOptions()
  }

  // take the keys
  // prefix add___
  handleOptions() {
    this.keys.forEach(key => {
      const add = 'add' + key.charAt(0).toUpperCase() + key.slice(1)

      this[add] = function(params) {
        if (typeof params === 'object') {
          this.ops[key] = this.ops[key].concat(params)
          return this
        }
        if (typeof params === 'string') {
          // for compatibility
          params = params.replace(/\s\S/, ',')

          this.ops[key] = toarr(params)
          return this
        }
      }
      this[key] = function(params) {
        this.ops[key] = []
        this[add](params)
        return this
      }
    })
  }

  combination(script, arrays, result) {
    if (arrays.length === 0) {
      // l(script)
      return null
    }
    const copy = arrays.slice()
    const first = copy.shift()
    if (first.length > 0) {
      first.forEach(name => {
        this.combination(
          script + (script ? this.ops.separator : '') + name,
          copy,
          result
        )
      })
    }
    else {
      result[script] = this.mapper(script)
    }
    return result
  }

  run() {
    const result = {}
    const arrays = []
    this.keys.forEach(key => arrays.push(this.ops[key]))

    const scripts = this.combination('', arrays, {})
    result.scripts = scripts

    return result
  }
}

module.exports = ScriptPermutator
