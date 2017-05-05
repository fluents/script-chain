const flipglob = require('flipglob')
const insertAt = require('insert-at-index')
const toarr = require('to-arr')

/**
 * @param  {string} prefix prefix names if they don't already contain this,
 *                         usually bound so it will be curried
 * @param  {string | Array<string>} names names to prefix
 * @return {Array<string>} prefixed strings
 */
function prefixer(prefix, names) {
  return toarr(names).map(name => {
    if (!name.includes(prefix)) name = prefix + '-' + name
    return name
  })
}

/**
 * @desc check if value is not null, not undefined, not empty string, not NaN
 * @param  {any} input any value
 * @return {boolean} is real
 */
function real(input) {
  return input !== undefined && input !== null && input !== '' && input !== NaN
}

module.exports = {
  flipglob,
  insertAt,
  toarr,
  prefixer,
  real,
}
