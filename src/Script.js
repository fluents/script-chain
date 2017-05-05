/**
 * @file script that contains multiple flags
 * @exports Script
 *
 * @requires flipchain/ChainedMapExtendable
 * @requires fliplog
 * @requires flipglob
 * @requires ./Flag
 * @requires ./deps
 */

const ChainedMap = require('flipchain/ChainedMapExtendable')
const Flag = require('./Flag')
const {flipglob, insertAt, real, toarr, prefixer} = require('./deps')
// const binner = require('./binner')

// https://www.youtube.com/watch?v=SwSle66O5sU
const OFF = `${~315 >>> 3}@@`

/* prettier-ignore */

/**
 *
 * @TODO:
 * - [ ] need to change the `_` values to just `.set`
 * - [ ] needs some added index stuff such as adding raw commands
 *       example `exec`
 * - [ ] might need to make `groups` return a new Script?
 * - [ ] values without `=`, spaced
 * - [ ] sync and async modes
 * - [ ] might also want to do other things here with node, py, etc
 *
 *
 * ---
 * prefix app names, for monorepos
 *
 * if this is set,
 * then when we are done,
 * we mutate names
 *
 * ---
 *
 * this.flags: Array<Flag>
 * this.current = number / index of current Flag
 *
 * ---
 *
 * https://github.com/Unitech/pm2
 * globs, aliases, adding flags, getting the flags!
 * set envs, just don't pass them in if they are empty
 *
 * @prop {Array<Array>} groups groups of flags, aka --
 * @prop {number} index current index
 * @prop {Object} current current flag group being built
 * @type {ChainedMAp}
 */
class Script extends ChainedMap {

  /**
   * @param {ScriptChain} parent
   */
  constructor(parent) {
    super(parent)

    // already bound by parent
    this.run = this.parent.run

    // default
    this
      .flagIndex(OFF)
      .set('env', {}) // process.env
      .set('binDir', '../../')
      .set('raw', [])

    this.index = 0
    this.groups = [[]]
  }

  // ---easy chain ---

  /**
   * @since 0.0.3
   * @description returns to Scripts to add a new Script
   * @param {string} name
   * @return {Scripts} chain back to parent for a new Script
   */
  add(name) {
    return this.parent.add(name)
  }

  // --- config ---

  /**
   * @since 0.0.3
   * @alias addToGroup
   * @see this.addToGroup, this.group
   * @param  {string} arg
   * @return {Script} @chainable
   */
  doubleDash(arg) {
    this.addToGroup(arg)
    return this.group(arg)
  }

  /**
   * @since 0.0.3
   * @see ./deps/prefix
   * @param  {string} prefix
   * @modifies store.prefix
   * @return {Script} @chainable
   */
  prefix(prefix) {
    return this.set('prefix', prefix)
  }

  /**
   * @since 0.0.3
   * @desc @modifies store.prefix
   * @param  {*} index
   * @return {Script} @chainable
   */
  flagIndex(index) {
    return this.set('flagIndex', index)
  }

  /**
   * @since 0.0.3
   * @desc   calls .addToGroup 'node'
   *         @modifies store.file
   *
   * @see    this.addToGroup
   * @param  {string} file path to file to exec
   * @return {Script} @chainable
   */
  file(file) {
    return this
      .addToGroup('node')
      .addToGroup(file)
      .set('file', file)
  }

  /**
   * @since 0.0.3
   * @desc adds npm to first group
   *       adds flags to a new group - which npm requires
   *       @modifies store.npm
   *
   * @example
   *  input: .npm('diggity').env('magic').flag('env.zoolala', 'aoao').arg('-e')
   *  output: run-script diggy -- --env.zoolala=aoao -e
   *
   * @see this.addToGroup, this.doubleDash
   * @param  {string} npm npm script to execute
   * @return {Script} @chainable
   */
  npm(npm) {
    return this
      .addToGroup('npm', 1)
      .addToGroup('run-script')
      .addToGroup(npm)
      .set('npm', npm)
      .doubleDash('--')
  }

  /**
   * @since 0.0.4
   * @see    this.addToGroup, this.flag
   * @desc   adds max_old_space_size so script does not run out of memory
   * @param  {boolean} [harmony=true] use harmony
   * @return {Script} @chainable
   */
  node(harmony = true) {
    this.addToGroup('node')
    if (harmony) {
      this.flag('harmony').flag('max_old_space_size', 120000)
    }
    return this
  }

  /**
   * @desc calls this.addToGroup(bin)
   *       @modifies store.bin
   * @since 0.0.3
   * @param  {string} bin
   * @return {Script} @chainable
   */
  bin(bin) {
    return this
      .addToGroup(bin)
      .set('bin', bin)
  }

  /**
   * @TODO use dargs here to do some nice from string,
   *       and gather all uses of raw to make them inline, or plugins
   * 0.0.5
   * @desc add a raw string to the script
   *       @modifies store.raw
   *
   * @param  {string} raw raw script to concat to the chain
   * @return {Script} @chainable
   */
  raw(raw) {
    const mergedRaw = this.get('raw').concat([raw])
    return this
      .addToGroup(raw)
      .set('raw', mergedRaw)
  }

  /**
   * @see execa
   * @since 0.0.7
   * @tutorial https://nodejs.org/api/child_process.html
   * @param {string} [stdout='stdout']
   * @desc set whether to inherit (default added to execa.results.stdout)
   *       @modifies store.stdout
   *
   * @return {Script} @chainable
   */
  stdout(stdout = 'inherit') {
    this.set('stdout', stdout)
    return this
  }

  // --- groups ---

  /**
   * @see this.groups
   * @since 0.0.3
   * @return {Array<?Flag>}
   */
  currentGroup() {
    return this.groups[this.index]
  }

  /**
   * @see this.groups
   * @since 0.0.3
   * @param {number} [index] if blank, goes to last
   * @return {Script} @chainable
   */
  goToGroup(index = null) {
    this.index = index
    if (this.index === null) this.index = this.groups.length - 1
    return this
  }

  /**
   * @see this.groups, this.index
   * @since 0.0.3
   * @desc adds a group
   * @return {Script} @chainable
   */
  group() {
    this.groups.push([])
    this.index = this.groups.length - 1
    return this
  }

  /**
   * @description adds a flag to a specific group, defaults to current
   *              @modifies this.groups
   *
   * @since 0.0.3
   * @see this.current
   * @see this.groups
   * @param {Flag} flag
   * @param {number} [index]
   * @param {number} [group]
   * @return {Script} @chainable
   */
  addToGroup(flag, index = OFF, group = OFF) {
    if (group === OFF) {
      group = this.index
    }

    // if we specified an index to insert into,
    // use it, then reset it
    if (this.get('flagIndex') !== OFF) {
      index = this.get('flagIndex')
      this.flagIndex(OFF)
    }

    // if empty
    this.groups[group] = this.groups[group] || []

    if (index === OFF) {
      this.groups[group].push(flag)
      return this
    }

    this.groups[group] = insertAt(this.groups[group], index, toarr(flag))
    // this.index = group + 2

    return this
  }

  // --- flags ---

  /**
   * @private
   * @extends this.addToGroup
   * @since 0.0.3
   * @see this.current, this.flag, this.arg
   *
   * @param {number} [index]
   * @param {number} [group]
   * @return {Flag}
   */
  _addFlag(index = OFF, group = OFF) {
    this.current = new Flag(this)
    this.addToGroup(this.current, index, group)
    return this.current
  }

  /**
   * @since 0.0.3
   * @description
   *  use `arg` for no `--`
   *  if value === OFF, it is an arg with no value
   *
   * @see this.arg
   * @param {string} name
   * @param {string} [value]
   * @return {Script} @chainable
   */
  flag(name, value = OFF) {
    this.arg(name, value)
    this.current.dash('--')
    return this
  }

  /**
   * @since 0.0.3
   * @description
   *   if value === OFF,
   *   it is an arg with no value
   *
   * @see this.arg
   * @param {string} name
   * @param {string} [value]
   * @param {number} [index]
   * @param {number} [group]
   * @return {Script} @chainable
   */
  arg(name, value = OFF, index = OFF, group = OFF) {
    this._addFlag(index, group)
    this.current.name(name)
    if (value !== OFF) this.current.value(value)
    return this
  }

  // --- globs ---

  /**
   * @since 0.0.3
   * @param {string} name flag name
   * @param {string | Array<string>} apps string names to use
   * @param {boolean | string} [dash=true] add `-` before it
   * @return {Script} @chainable (Flag as current)
   */
  globFlag(name, apps, dash = true) {
    // if (!real(apps)) return this
    const glob = flipglob.start().any(apps).toString()
    if (dash) return this.flag(name, glob)
    return this.arg(name, glob)
  }

  /**
   * @since 0.0.6
   * @param {string} name
   * @param {string | Array<string> | boolean} apps boolean when stringify
   * @param {boolean | string} [stringify]
   * @return {Script} @chainable (Flag as current)
   */
  globArg(name, apps, stringify = true) {
    // optional shorter args
    if ((typeof name === 'string' || Array.isArray(name)) && apps === false) {
      stringify = apps
      apps = name

      const glob = flipglob.start().any(apps).toString()
      const val = this.arg(glob)

      if (stringify === false) this.current.stringify(false)

      return val
    }

    const glob = flipglob.start().any(apps).toString()
    if (stringify === false) return this.arg(name, glob)
    return this.arg(name, glob)
  }

  /**
   * @since 0.0.3
   * @desc uses glob as an environment variable, rather than a flag
   * @param {string} env
   * @param {string | Array<string>} apps
   * @return {Script} @chainable (Flag as current)
   */
  globEnv(env, apps) {
    if (!real(apps)) return this
    const glob = flipglob.start().any(apps).toString()
    return this.envDefine(glob, env)
  }

  /**
   * @since 0.0.3
   * @see this.globEnv, this.globFlag
   * @desc uses glob as env AND as flag
   * @param {string} env
   * @param {string | Array<string>} apps
   * @param {Object} opts {dash: boolean, prefix: boolean}
   * @return {Script} @chainable (Flag as current)
   */
  globEnvAndFlag(env, apps, opts = {}) {
    const {dash, prefix} = Object.assign({dash: true, prefix: false}, opts)

    if (prefix) apps = prefixer(this.get('prefix') || prefix, apps)

    return this.globEnv(env, apps).globFlag(env, apps, dash)
  }

  // --- env ---

  /**
   * @since 0.0.3
   * @see this.arg
   * @desc makes an arg with `NODE_ENV` as the name
   * @param {string<production, development, any>} env
   * @return {Script} @chainable
   */
  envArg(env) {
    this.arg('NODE_ENV', env) // , 0, 0
    return this
  }

  /**
   * @NOTE: does not mutate process.env,
   *        creates a copy of it for child_processes
   * @description to pass along to child_processes
   *              @modifies store.env
   * @since 0.0.3
   * @see this._env, process.env, execa, child_process
   *
   * @see http://stackoverflow.com/questions/27688804/how-do-i-debug-error-spawn-enoent-on-node-js
   *
   * @param {string<production, development, any>} env
   * @param {string} prop
   * @return {Script} @chainable (Flag as current)
   */
  envDefine(env, prop = 'NODE_ENV') {
    const _env = Object.create(process.env)
    _env[prop] = env
    _env.PATH = process.env.PATH

    const existing = this.get('env')
    if (existing) return this.set('env', Object.assign(existing, _env))

    return this.set('env', _env)
  }

  /**
   * @see this.envDefine, this.envArg
   * @since 0.0.3
   * @param {string<production, development, any>} env
   * @return {Script} @chainable (Flag as current)
   */
  env(env) {
    return this.envDefine(env)
    // .envArg(env)
  }

  /**
   * @desc does both env.define and env.arg
   * @see this.env, this.envDefine
   * @param {string} env
   * @return {Script} @chainable (Flag as current)
   */
  envs(env) {
    return this.envDefine(env).envArg(env)
  }


  // --- presets ---

  /**
   * @TODO: add real presets eh
   * @TODO: !!!!!!!!!!
   * need to make the .binPath and such get used with node with lerna
   * !!!!!!!!!!
   *
   * @since 0.0.5
   * @desc adds lerna as the first bin to use
   * @tutorial https://github.com/lerna/lerna
   * @return {Script} @chainable
   */
  lerna() {

    /**
     * @desc adds .loglevel for lerna
     * @param  {string} [level='info']
     * @return {Script} @chainable
     */
    this.log = (level = 'info') => {
      this.flag('loglevel', level)
      return this
    }

    /**
     * @desc   adds the env to use
     * @see    this.goToGroup, this.flagIndex, this.env
     * @param  {string} env
     * @return {Script} @chainable
     */
    this.lernaEnv = env => {
      return this.goToGroup(0).flagIndex(0).env(env)
    }

    /**
     * @desc prefixes the commands,
     *       turns them into a glob flag
     *       for use with lerna exec
     *
     * @see ./deps#prefix
     * @param  {string} scope
     * @return {Script} @chainable
     */
    this.scope = scope => {
      if (!scope) return this

      const prefix = this.get('prefix')
      if (prefix) scope = prefixer(prefix, scope)

      return this.globFlag('scope', scope, '--')
    }

    return this.bin('lerna').extend(['concurrency']) // num
  }

  /**
   * @protected
   * @since 0.0.4
   * @desc for use in execa and tostring
   * @param {boolean} [reduce] return as joined (should move to toStr)
   * @return {Array<string>}
   */
  toArray(reduce = false) {
    const {
      bin,
      binDir,
      file,
      npm,
      env,
      prefix,
      // sync, exec, fork
    } = this.entries()

    let flags = this.groups.map((group, i) => {
      let mapped = toarr(group)
        .filter(g => g)
        .map(flag => flag.toString(prefix) + ' ')
      if (reduce) mapped = mapped.join(' ')
      return mapped
    })

    return flags
  }

  /**
   * @since 0.0.3
   * @see this.toArr
   * @desc calls this.toArr, joins with --, replaces empty spaces
   * @return {string}
   */
  toString() {
    return this.toArray(true).join(' -- ').replace(/\s{2}/gim, ' ').trim()
  }

  /**
   * @since 0.0.3
   * @desc
   *  gets
   *    - store.stdout
   *    - store.env
   *    - this.toArray()
   *  shifts around & trims the string groups to make them runnable
   *  extracts the bin
   *
   * @return {Object}
   */
  toCmd() {
    const arr = this.toArray()
    const stdout = this.get('stdout')
    const env = this.get('env')

    // take group out,
    const group1 = arr.shift()
    // take first of group 1 out,
    const bin = group1.shift().trim()
    // then put group 1 back in
    arr.unshift(group1)

    // flatten
    const args = []
    arr.forEach(arg => {
      if (Array.isArray(arg)) return arg.forEach(a => args.push(a.trim()))
      return args.push(arg.trim())
    })

    // {isBin: bin} = this.entries()
    const cmds = {bin, args, env}
    if (stdout) cmds.stdout = stdout
    return cmds
  }

  // ---
  // clone and extend an existing script
  // to do things like extend a script but another env... simplicity
  // extend() {}, inherit() {}
}

module.exports = Script
