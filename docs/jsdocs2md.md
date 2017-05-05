## Modules

<dl>
<dt><a href="#Flag.module_js">Flag.js</a></dt>
<dd><p>chainable cli flag</p>
</dd>
<dt><a href="#Remember.module_js">Remember.js</a></dt>
<dd><p>estimate duration, save duration, save on escape too</p>
</dd>
<dt><a href="#Script.module_js">Script.js</a></dt>
<dd><p>script that contains multiple flags</p>
</dd>
<dt><a href="#ScriptChain.module_js">ScriptChain.js</a></dt>
<dd><p>core of script-chain</p>
</dd>
<dt><a href="#ScriptPermutator.module_js">ScriptPermutator.js</a></dt>
<dd><p>script that contains multiple flags</p>
</dd>
<dt><a href="#Scripts.module_js">Scripts.js</a></dt>
<dd><p>Scripts - multiple scripts, used by ./ScriptChain</p>
</dd>
<dt><a href="#module_script-chain">script-chain</a></dt>
<dd><p>entry point</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Core">Core</a> : <code>ChainedMap</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#addToGroup">addToGroup(arg)</a> ⇒ <code>Script</code></dt>
<dd></dd>
<dt><a href="#prefixer">prefixer(prefix, names)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd></dd>
<dt><a href="#real">real(input)</a> ⇒ <code>boolean</code></dt>
<dd><p>check if value is not null, not undefined, not empty string, not NaN</p>
</dd>
</dl>

<a name="Flag.module_js"></a>

## Flag.js
chainable cli flag

**Requires**: <code>module:fliphub-core/Context</code>, <code>module:./deps#real</code>  

* [Flag.js](#Flag.module_js)
    * [~Flag](#Flag.module_js..Flag) : <code>Context</code>
        * [new Flag(parent)](#new_Flag.module_js..Flag_new)
        * _instance_
            * [.shouldStringify()](#Flag.module_js..Flag+shouldStringify) ⇒ <code>boolean</code>
            * [.toString()](#Flag.module_js..Flag+toString) ⇒ <code>string</code>
        * _static_
            * [.init(parent)](#Flag.module_js..Flag.init) ⇒ <code>Flag</code>

<a name="Flag.module_js..Flag"></a>

### Flag.js~Flag : <code>Context</code>
**Kind**: inner class of [<code>Flag.js</code>](#Flag.module_js)  

* [~Flag](#Flag.module_js..Flag) : <code>Context</code>
    * [new Flag(parent)](#new_Flag.module_js..Flag_new)
    * _instance_
        * [.shouldStringify()](#Flag.module_js..Flag+shouldStringify) ⇒ <code>boolean</code>
        * [.toString()](#Flag.module_js..Flag+toString) ⇒ <code>string</code>
    * _static_
        * [.init(parent)](#Flag.module_js..Flag.init) ⇒ <code>Flag</code>

<a name="new_Flag.module_js..Flag_new"></a>

#### new Flag(parent)
fluent Script


| Param | Type |
| --- | --- |
| parent | <code>any</code> | 

<a name="Flag.module_js..Flag+shouldStringify"></a>

#### flag.shouldStringify() ⇒ <code>boolean</code>
whether the flag value should be stringified

**Kind**: instance method of [<code>Flag</code>](#Flag.module_js..Flag)  
**Since**: 0.0.3  
<a name="Flag.module_js..Flag+toString"></a>

#### flag.toString() ⇒ <code>string</code>
**Kind**: instance method of [<code>Flag</code>](#Flag.module_js..Flag)  
**Since**: 0.0.3  
**Example**  
```js
if value & stringify: --name='val', name='val'
  else if value:        name=val,
  else:                 --name, name
```
<a name="Flag.module_js..Flag.init"></a>

#### Flag.init(parent) ⇒ <code>Flag</code>
**Kind**: static method of [<code>Flag</code>](#Flag.module_js..Flag)  
**See**: ScriptChain  
**Since**: 0.0.6  

| Param | Type |
| --- | --- |
| parent | <code>any</code> | 

<a name="Remember.module_js"></a>

## Remember.js
estimate duration, save duration, save on escape too

**Requires**: <code>module:configstore</code>, <code>module:fliptime</code>, <code>module:fliplog</code>, <code>module:obj-chain-core</code>, <code>module:obj-chain-plugin-config</code>  

* [Remember.js](#Remember.module_js)
    * [~Remember](#Remember.module_js..Remember) : <code>ChainedMap</code>
        * [new Remember()](#new_Remember.module_js..Remember_new)
        * [.progressBar(str)](#Remember.module_js..Remember+progressBar) ⇒ <code>Remember</code>
        * [.start(args, progress)](#Remember.module_js..Remember+start) ⇒ <code>Remember</code>
        * [.finish(args, [result])](#Remember.module_js..Remember+finish) ⇒ <code>Remember</code>

<a name="Remember.module_js..Remember"></a>

### Remember.js~Remember : <code>ChainedMap</code>
**Kind**: inner class of [<code>Remember.js</code>](#Remember.module_js)  
**Since**: 0.0.6  

* [~Remember](#Remember.module_js..Remember) : <code>ChainedMap</code>
    * [new Remember()](#new_Remember.module_js..Remember_new)
    * [.progressBar(str)](#Remember.module_js..Remember+progressBar) ⇒ <code>Remember</code>
    * [.start(args, progress)](#Remember.module_js..Remember+start) ⇒ <code>Remember</code>
    * [.finish(args, [result])](#Remember.module_js..Remember+finish) ⇒ <code>Remember</code>

<a name="new_Remember.module_js..Remember_new"></a>

#### new Remember()
remember script times and show an accurate progress bar

<a name="Remember.module_js..Remember+progressBar"></a>

#### remember.progressBar(str) ⇒ <code>Remember</code>
update a progress bar with averages

**Kind**: instance method of [<code>Remember</code>](#Remember.module_js..Remember)  
**See**: fliplog.progress  
**Since**: 0.0.6  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | JSON.stringify(args) |

<a name="Remember.module_js..Remember+start"></a>

#### remember.start(args, progress) ⇒ <code>Remember</code>
hash the args, check if it exists, store result

**Kind**: instance method of [<code>Remember</code>](#Remember.module_js..Remember)  
**Since**: 0.0.6  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> \| <code>string</code> | unique hash / name |
| progress | <code>boolean</code> |  |

<a name="Remember.module_js..Remember+finish"></a>

#### remember.finish(args, [result]) ⇒ <code>Remember</code>
hash the args, check if it exists, store result

**Kind**: instance method of [<code>Remember</code>](#Remember.module_js..Remember)  
**Returns**: <code>Remember</code> - @chainable  
**See**: FlipTime  
**Since**: 0.0.6  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> | stringifiable hash to use as key for remembering |
| [result] | <code>Object</code> | data, currently unused |

<a name="Script.module_js"></a>

## Script.js
script that contains multiple flags

**Requires**: <code>module:flipchain/ChainedMapExtendable</code>, <code>module:fliplog</code>, <code>module:flipglob</code>, <code>module:./Flag</code>, <code>module:./deps</code>  

* [Script.js](#Script.module_js)
    * [~Script](#Script.module_js..Script) : <code>ChainedMAp</code>
        * [new Script(parent)](#new_Script.module_js..Script_new)
        * [.add(name)](#Script.module_js..Script+add) ⇒ <code>Scripts</code>
        * [.prefix(prefix)](#Script.module_js..Script+prefix) ⇒ <code>Script</code>
        * [.flagIndex(index)](#Script.module_js..Script+flagIndex) ⇒ <code>Script</code>
        * [.file(file)](#Script.module_js..Script+file) ⇒ <code>Script</code>
        * [.npm(npm)](#Script.module_js..Script+npm) ⇒ <code>Script</code>
        * [.node([harmony])](#Script.module_js..Script+node) ⇒ <code>Script</code>
        * [.bin(bin)](#Script.module_js..Script+bin) ⇒ <code>Script</code>
        * [.raw(raw)](#Script.module_js..Script+raw) ⇒ <code>Script</code>
        * [.stdout([stdout])](#Script.module_js..Script+stdout) ⇒ <code>Script</code>
        * [.currentGroup()](#Script.module_js..Script+currentGroup) ⇒ <code>Array.&lt;?Flag&gt;</code>
        * [.goToGroup([index])](#Script.module_js..Script+goToGroup) ⇒ <code>Script</code>
        * [.group()](#Script.module_js..Script+group) ⇒ <code>Script</code>
        * [.addToGroup(flag, [index], [group])](#Script.module_js..Script+addToGroup) ⇒ <code>Script</code>
        * [.flag(name, [value])](#Script.module_js..Script+flag) ⇒ <code>Script</code>
        * [.arg(name, [value], [index], [group])](#Script.module_js..Script+arg) ⇒ <code>Script</code>
        * [.globFlag(name, apps, [dash])](#Script.module_js..Script+globFlag) ⇒ <code>Script</code>
        * [.globArg(name, apps, [stringify])](#Script.module_js..Script+globArg) ⇒ <code>Script</code>
        * [.globEnv(env, apps)](#Script.module_js..Script+globEnv) ⇒ <code>Script</code>
        * [.globEnvAndFlag(env, apps, opts)](#Script.module_js..Script+globEnvAndFlag) ⇒ <code>Script</code>
        * [.envArg(env)](#Script.module_js..Script+envArg) ⇒ <code>Script</code>
        * [.envDefine(env, prop)](#Script.module_js..Script+envDefine) ⇒ <code>Script</code>
        * [.env(env)](#Script.module_js..Script+env) ⇒ <code>Script</code>
        * [.envs(env)](#Script.module_js..Script+envs) ⇒ <code>Script</code>
        * [.lerna()](#Script.module_js..Script+lerna) ⇒ <code>Script</code>
        * [.log([level])](#Script.module_js..Script+log) ⇒ <code>Script</code>
        * [.lernaEnv(env)](#Script.module_js..Script+lernaEnv) ⇒ <code>Script</code>
        * [.scope(scope)](#Script.module_js..Script+scope) ⇒ <code>Script</code>
        * [.toArray([reduce])](#Script.module_js..Script+toArray) ⇒ <code>Array.&lt;string&gt;</code>
        * [.toString()](#Script.module_js..Script+toString) ⇒ <code>string</code>
        * [.toCmd()](#Script.module_js..Script+toCmd) ⇒ <code>Object</code>

<a name="Script.module_js..Script"></a>

### Script.js~Script : <code>ChainedMAp</code>
**Kind**: inner class of [<code>Script.js</code>](#Script.module_js)  
**Todo:**: - [ ] need to change the `_` values to just `.set`
- [ ] needs some added index stuff such as adding raw commands
      example `exec`
- [ ] might need to make `groups` return a new Script?
- [ ] values without `=`, spaced
- [ ] sync and async modes
- [ ] might also want to do other things here with node, py, etc


---
prefix app names, for monorepos

if this is set,
then when we are done,
we mutate names

---

this.flags: Array<Flag>
this.current = number / index of current Flag

---

https://github.com/Unitech/pm2
globs, aliases, adding flags, getting the flags!
set envs, just don't pass them in if they are empty  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| groups | <code>Array.&lt;Array&gt;</code> | groups of flags, aka -- |
| index | <code>number</code> | current index |
| current | <code>Object</code> | current flag group being built |


* [~Script](#Script.module_js..Script) : <code>ChainedMAp</code>
    * [new Script(parent)](#new_Script.module_js..Script_new)
    * [.add(name)](#Script.module_js..Script+add) ⇒ <code>Scripts</code>
    * [.prefix(prefix)](#Script.module_js..Script+prefix) ⇒ <code>Script</code>
    * [.flagIndex(index)](#Script.module_js..Script+flagIndex) ⇒ <code>Script</code>
    * [.file(file)](#Script.module_js..Script+file) ⇒ <code>Script</code>
    * [.npm(npm)](#Script.module_js..Script+npm) ⇒ <code>Script</code>
    * [.node([harmony])](#Script.module_js..Script+node) ⇒ <code>Script</code>
    * [.bin(bin)](#Script.module_js..Script+bin) ⇒ <code>Script</code>
    * [.raw(raw)](#Script.module_js..Script+raw) ⇒ <code>Script</code>
    * [.stdout([stdout])](#Script.module_js..Script+stdout) ⇒ <code>Script</code>
    * [.currentGroup()](#Script.module_js..Script+currentGroup) ⇒ <code>Array.&lt;?Flag&gt;</code>
    * [.goToGroup([index])](#Script.module_js..Script+goToGroup) ⇒ <code>Script</code>
    * [.group()](#Script.module_js..Script+group) ⇒ <code>Script</code>
    * [.addToGroup(flag, [index], [group])](#Script.module_js..Script+addToGroup) ⇒ <code>Script</code>
    * [.flag(name, [value])](#Script.module_js..Script+flag) ⇒ <code>Script</code>
    * [.arg(name, [value], [index], [group])](#Script.module_js..Script+arg) ⇒ <code>Script</code>
    * [.globFlag(name, apps, [dash])](#Script.module_js..Script+globFlag) ⇒ <code>Script</code>
    * [.globArg(name, apps, [stringify])](#Script.module_js..Script+globArg) ⇒ <code>Script</code>
    * [.globEnv(env, apps)](#Script.module_js..Script+globEnv) ⇒ <code>Script</code>
    * [.globEnvAndFlag(env, apps, opts)](#Script.module_js..Script+globEnvAndFlag) ⇒ <code>Script</code>
    * [.envArg(env)](#Script.module_js..Script+envArg) ⇒ <code>Script</code>
    * [.envDefine(env, prop)](#Script.module_js..Script+envDefine) ⇒ <code>Script</code>
    * [.env(env)](#Script.module_js..Script+env) ⇒ <code>Script</code>
    * [.envs(env)](#Script.module_js..Script+envs) ⇒ <code>Script</code>
    * [.lerna()](#Script.module_js..Script+lerna) ⇒ <code>Script</code>
    * [.log([level])](#Script.module_js..Script+log) ⇒ <code>Script</code>
    * [.lernaEnv(env)](#Script.module_js..Script+lernaEnv) ⇒ <code>Script</code>
    * [.scope(scope)](#Script.module_js..Script+scope) ⇒ <code>Script</code>
    * [.toArray([reduce])](#Script.module_js..Script+toArray) ⇒ <code>Array.&lt;string&gt;</code>
    * [.toString()](#Script.module_js..Script+toString) ⇒ <code>string</code>
    * [.toCmd()](#Script.module_js..Script+toCmd) ⇒ <code>Object</code>

<a name="new_Script.module_js..Script_new"></a>

#### new Script(parent)

| Param | Type |
| --- | --- |
| parent | <code>ScriptChain</code> | 

<a name="Script.module_js..Script+add"></a>

#### script.add(name) ⇒ <code>Scripts</code>
returns to Scripts to add a new Script

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Scripts</code> - chain back to parent for a new Script  
**Since**: 0.0.3  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="Script.module_js..Script+prefix"></a>

#### script.prefix(prefix) ⇒ <code>Script</code>
**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable  
**Modifies**: store.prefix  
**See**: ./deps/prefix  
**Since**: 0.0.3  

| Param | Type |
| --- | --- |
| prefix | <code>string</code> | 

<a name="Script.module_js..Script+flagIndex"></a>

#### script.flagIndex(index) ⇒ <code>Script</code>
@modifies store.prefix

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable  
**Since**: 0.0.3  

| Param | Type |
| --- | --- |
| index | <code>\*</code> | 

<a name="Script.module_js..Script+file"></a>

#### script.file(file) ⇒ <code>Script</code>
calls .addToGroup 'node'

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable  
**Modifies**: store.file  
**See**: this.addToGroup  
**Since**: 0.0.3  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | path to file to exec |

<a name="Script.module_js..Script+npm"></a>

#### script.npm(npm) ⇒ <code>Script</code>
adds npm to first group
      adds flags to a new group - which npm requires

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable  
**Modifies**: store.npm  
**See**: this.addToGroup, this.doubleDash  
**Since**: 0.0.3  

| Param | Type | Description |
| --- | --- | --- |
| npm | <code>string</code> | npm script to execute |

**Example**  
```js
input: .npm('diggity').env('magic').flag('env.zoolala', 'aoao').arg('-e')
 output: run-script diggy -- --env.zoolala=aoao -e
```
<a name="Script.module_js..Script+node"></a>

#### script.node([harmony]) ⇒ <code>Script</code>
adds max_old_space_size so script does not run out of memory

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable  
**See**: this.addToGroup, this.flag  
**Since**: 0.0.4  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [harmony] | <code>boolean</code> | <code>true</code> | use harmony |

<a name="Script.module_js..Script+bin"></a>

#### script.bin(bin) ⇒ <code>Script</code>
calls this.addToGroup(bin)

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable  
**Modifies**: store.bin  
**Since**: 0.0.3  

| Param | Type |
| --- | --- |
| bin | <code>string</code> | 

<a name="Script.module_js..Script+raw"></a>

#### script.raw(raw) ⇒ <code>Script</code>
add a raw string to the script

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable  
**Modifies**: store.raw  
**Todo**

- [ ] use dargs here to do some nice from string,
      and gather all uses of raw to make them inline, or plugins
0.0.5


| Param | Type | Description |
| --- | --- | --- |
| raw | <code>string</code> | raw script to concat to the chain |

<a name="Script.module_js..Script+stdout"></a>

#### script.stdout([stdout]) ⇒ <code>Script</code>
set whether to inherit (default added to execa.results.stdout)

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable  
**Modifies**: store.stdout  
**See**: execa  
**Since**: 0.0.7  

| Param | Type | Default |
| --- | --- | --- |
| [stdout] | <code>string</code> | <code>&quot;&#x27;stdout&#x27;&quot;</code> | 

<a name="Script.module_js..Script+currentGroup"></a>

#### script.currentGroup() ⇒ <code>Array.&lt;?Flag&gt;</code>
**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**See**: this.groups  
**Since**: 0.0.3  
<a name="Script.module_js..Script+goToGroup"></a>

#### script.goToGroup([index]) ⇒ <code>Script</code>
**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable  
**See**: this.groups  
**Since**: 0.0.3  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [index] | <code>number</code> | <code></code> | if blank, goes to last |

<a name="Script.module_js..Script+group"></a>

#### script.group() ⇒ <code>Script</code>
adds a group

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable  
**See**: this.groups, this.index  
**Since**: 0.0.3  
<a name="Script.module_js..Script+addToGroup"></a>

#### script.addToGroup(flag, [index], [group]) ⇒ <code>Script</code>
adds a flag to a specific group, defaults to current

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable  
**Modifies**: this.groups  
**See**

- this.current
- this.groups

**Since**: 0.0.3  

| Param | Type |
| --- | --- |
| flag | <code>Flag</code> | 
| [index] | <code>number</code> | 
| [group] | <code>number</code> | 

<a name="Script.module_js..Script+flag"></a>

#### script.flag(name, [value]) ⇒ <code>Script</code>
use `arg` for no `--`
 if value === OFF, it is an arg with no value

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable  
**See**: this.arg  
**Since**: 0.0.3  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| [value] | <code>string</code> | 

<a name="Script.module_js..Script+arg"></a>

#### script.arg(name, [value], [index], [group]) ⇒ <code>Script</code>
if value === OFF,
  it is an arg with no value

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable  
**See**: this.arg  
**Since**: 0.0.3  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| [value] | <code>string</code> | 
| [index] | <code>number</code> | 
| [group] | <code>number</code> | 

<a name="Script.module_js..Script+globFlag"></a>

#### script.globFlag(name, apps, [dash]) ⇒ <code>Script</code>
**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable (Flag as current)  
**Since**: 0.0.3  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | flag name |
| apps | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  | string names to use |
| [dash] | <code>boolean</code> \| <code>string</code> | <code>true</code> | add `-` before it |

<a name="Script.module_js..Script+globArg"></a>

#### script.globArg(name, apps, [stringify]) ⇒ <code>Script</code>
**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable (Flag as current)  
**Since**: 0.0.6  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  |  |
| apps | <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>boolean</code> |  | boolean when stringify |
| [stringify] | <code>boolean</code> \| <code>string</code> | <code>true</code> |  |

<a name="Script.module_js..Script+globEnv"></a>

#### script.globEnv(env, apps) ⇒ <code>Script</code>
uses glob as an environment variable, rather than a flag

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable (Flag as current)  
**Since**: 0.0.3  

| Param | Type |
| --- | --- |
| env | <code>string</code> | 
| apps | <code>string</code> \| <code>Array.&lt;string&gt;</code> | 

<a name="Script.module_js..Script+globEnvAndFlag"></a>

#### script.globEnvAndFlag(env, apps, opts) ⇒ <code>Script</code>
uses glob as env AND as flag

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable (Flag as current)  
**See**: this.globEnv, this.globFlag  
**Since**: 0.0.3  

| Param | Type | Description |
| --- | --- | --- |
| env | <code>string</code> |  |
| apps | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  |
| opts | <code>Object</code> | {dash: boolean, prefix: boolean} |

<a name="Script.module_js..Script+envArg"></a>

#### script.envArg(env) ⇒ <code>Script</code>
makes an arg with `NODE_ENV` as the name

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable  
**See**: this.arg  
**Since**: 0.0.3  

| Param | Type |
| --- | --- |
| env | <code>string.&lt;production, development, any&gt;</code> | 

<a name="Script.module_js..Script+envDefine"></a>

#### script.envDefine(env, prop) ⇒ <code>Script</code>
to pass along to child_processes

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable (Flag as current)  
**Note:**: does not mutate process.env,
       creates a copy of it for child_processes  
**Modifies**: store.env  
**See**

- this._env, process.env, execa, child_process
- http://stackoverflow.com/questions/27688804/how-do-i-debug-error-spawn-enoent-on-node-js

**Since**: 0.0.3  

| Param | Type | Default |
| --- | --- | --- |
| env | <code>string.&lt;production, development, any&gt;</code> |  | 
| prop | <code>string</code> | <code>&quot;NODE_ENV&quot;</code> | 

<a name="Script.module_js..Script+env"></a>

#### script.env(env) ⇒ <code>Script</code>
**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable (Flag as current)  
**See**: this.envDefine, this.envArg  
**Since**: 0.0.3  

| Param | Type |
| --- | --- |
| env | <code>string.&lt;production, development, any&gt;</code> | 

<a name="Script.module_js..Script+envs"></a>

#### script.envs(env) ⇒ <code>Script</code>
does both env.define and env.arg

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable (Flag as current)  
**See**: this.env, this.envDefine  

| Param | Type |
| --- | --- |
| env | <code>string</code> | 

<a name="Script.module_js..Script+lerna"></a>

#### script.lerna() ⇒ <code>Script</code>
adds lerna as the first bin to use

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable  
**Todo:**: add real presets eh  
**Todo:**: !!!!!!!!!!
need to make the .binPath and such get used with node with lerna
!!!!!!!!!!  
**Since**: 0.0.5  
<a name="Script.module_js..Script+log"></a>

#### script.log([level]) ⇒ <code>Script</code>
adds .loglevel for lerna

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable  

| Param | Type | Default |
| --- | --- | --- |
| [level] | <code>string</code> | <code>&quot;&#x27;info&#x27;&quot;</code> | 

<a name="Script.module_js..Script+lernaEnv"></a>

#### script.lernaEnv(env) ⇒ <code>Script</code>
adds the env to use

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable  
**See**: this.goToGroup, this.flagIndex, this.env  

| Param | Type |
| --- | --- |
| env | <code>string</code> | 

<a name="Script.module_js..Script+scope"></a>

#### script.scope(scope) ⇒ <code>Script</code>
prefixes the commands,
      turns them into a glob flag
      for use with lerna exec

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Returns**: <code>Script</code> - @chainable  
**See**: ./deps#prefix  

| Param | Type |
| --- | --- |
| scope | <code>string</code> | 

<a name="Script.module_js..Script+toArray"></a>

#### script.toArray([reduce]) ⇒ <code>Array.&lt;string&gt;</code>
for use in execa and tostring

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Access**: protected  
**Since**: 0.0.4  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [reduce] | <code>boolean</code> | <code>false</code> | return as joined (should move to toStr) |

<a name="Script.module_js..Script+toString"></a>

#### script.toString() ⇒ <code>string</code>
calls this.toArr, joins with --, replaces empty spaces

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**See**: this.toArr  
**Since**: 0.0.3  
<a name="Script.module_js..Script+toCmd"></a>

#### script.toCmd() ⇒ <code>Object</code>
gets
   - store.stdout
   - store.env
   - this.toArray()
 shifts around & trims the string groups to make them runnable
 extracts the bin

**Kind**: instance method of [<code>Script</code>](#Script.module_js..Script)  
**Since**: 0.0.3  
<a name="ScriptChain.module_js"></a>

## ScriptChain.js
core of script-chain

**Requires**: <code>module:flipchain/ChainedMapExtendable</code>, <code>module:fliplog</code>, <code>module:execa</code>, <code>module:./binner</code>, <code>module:./Remember</code>  
<a name="ScriptPermutator.module_js"></a>

## ScriptPermutator.js
script that contains multiple flags

**Requires**: <code>module:to-arr</code>  
**Author**: [challenger532](https://github.com/challenger532)  
<a name="ScriptPermutator.module_js..ScriptPermutator"></a>

### ScriptPermutator.js~ScriptPermutator
**Kind**: inner class of [<code>ScriptPermutator.js</code>](#ScriptPermutator.module_js)  
**Since**: 0.0.1  
**Todo**

- [ ] document

<a name="Scripts.module_js"></a>

## Scripts.js
Scripts - multiple scripts, used by ./ScriptChain

**Requires**: <code>module:flipchain/ChainedMapExtendable</code>, <code>module:./Script</code>  

* [Scripts.js](#Scripts.module_js)
    * [~Scripts](#Scripts.module_js..Scripts) : <code>ChainedMap</code>
        * [new Scripts(parent)](#new_Scripts.module_js..Scripts_new)
        * [.add([name])](#Scripts.module_js..Scripts+add) ⇒ <code>Script</code>
        * [.toCmd()](#Scripts.module_js..Scripts+toCmd) ⇒ <code>Array</code>
        * [.toString()](#Scripts.module_js..Scripts+toString) ⇒ <code>Array</code>

<a name="Scripts.module_js..Scripts"></a>

### Scripts.js~Scripts : <code>ChainedMap</code>
**Kind**: inner class of [<code>Scripts.js</code>](#Scripts.module_js)  
**Workflow**:   
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| run | <code>function</code> | parent.run |
| index | <code>number</code> | current index |
| scripts | <code>Object.&lt;string, Script&gt;</code> | scripts |


* [~Scripts](#Scripts.module_js..Scripts) : <code>ChainedMap</code>
    * [new Scripts(parent)](#new_Scripts.module_js..Scripts_new)
    * [.add([name])](#Scripts.module_js..Scripts+add) ⇒ <code>Script</code>
    * [.toCmd()](#Scripts.module_js..Scripts+toCmd) ⇒ <code>Array</code>
    * [.toString()](#Scripts.module_js..Scripts+toString) ⇒ <code>Array</code>

<a name="new_Scripts.module_js..Scripts_new"></a>

#### new Scripts(parent)

| Param | Type |
| --- | --- |
| parent | <code>Chainable</code> \| <code>\*</code> | 

<a name="Scripts.module_js..Scripts+add"></a>

#### scripts.add([name]) ⇒ <code>Script</code>
start/add/name a script

**Kind**: instance method of [<code>Scripts</code>](#Scripts.module_js..Scripts)  
**See**: this.scripts, Script  

| Param | Type | Default |
| --- | --- | --- |
| [name] | <code>string</code> | <code>null</code> | 

<a name="Scripts.module_js..Scripts+toCmd"></a>

#### scripts.toCmd() ⇒ <code>Array</code>
**Kind**: instance method of [<code>Scripts</code>](#Scripts.module_js..Scripts)  
<a name="Scripts.module_js..Scripts+toString"></a>

#### scripts.toString() ⇒ <code>Array</code>
**Kind**: instance method of [<code>Scripts</code>](#Scripts.module_js..Scripts)  
**Returns**: <code>Array</code> - !!!  
**Todo**

- [ ] return a string...

<a name="module_script-chain"></a>

## script-chain
entry point

**Requires**: <code>module:likeaboss</code>, <code>module:flipglob</code>, <code>module:fliplog</code>, <code>module:execa</code>, <code>module:to-arr</code>, <code>module:insert-at-index</code>, <code>module:./deps</code>, <code>module:./ScriptChain</code>  
**Todo**

- [ ] have likeaboss generate these dynamic required docs out

<a name="Core"></a>

## Core : <code>ChainedMap</code>
**Kind**: global class  
**Todo:**: - [ ] these require better `grouping` because groups are not just `--`
- [ ] pipe (|),
- [ ] then (&&)  
**Core**:   
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| scripts | <code>Scripts</code> | scripts to use when running |
| remember | <code>Remember</code> | remember script times and show an accurate progress bar |


* [Core](#Core) : <code>ChainedMap</code>
    * [new ScriptChain([parent])](#new_Core_new)
    * _instance_
        * [.env(name, value)](#Core+env) ⇒ <code>ScriptChain</code>
        * [.stdout([stdout])](#Core+stdout) ⇒ <code>ScriptChain</code>
        * [.add()](#Core+add)
        * [.toString()](#Core+toString)
        * [.toCmd()](#Core+toCmd)
        * [.run()](#Core+run) ⇒ <code>Promise.all</code>
    * _static_
        * [.init([parent])](#Core.init) ⇒ <code>ScriptChain</code>

<a name="new_Core_new"></a>

### new ScriptChain([parent])

| Param | Type |
| --- | --- |
| [parent] | <code>ScriptChain</code> \| <code>Chainable</code> \| <code>any</code> | 

**Example**  
```js
input
 scripts
  .add()
  .npm('diggy')
  .env('magic')
  .flag('env.zoolala', 'aoao')
  .arg('-e')
```
**Example**  
```js
output
`${env} ${lerna} exec ${lernaLog} ${scoped} -- node ${binPath}`
```
<a name="Core+env"></a>

### core.env(name, value) ⇒ <code>ScriptChain</code>
**Kind**: instance method of [<code>Core</code>](#Core)  
**Returns**: <code>ScriptChain</code> - @chainable  
**See**: FlipScript.Program.parseEnv  
**Since**: 0.0.4  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| value | <code>string</code> | 

<a name="Core+stdout"></a>

### core.stdout([stdout]) ⇒ <code>ScriptChain</code>
**Kind**: instance method of [<code>Core</code>](#Core)  
**Returns**: <code>ScriptChain</code> - @chainable  
**See**: Script.stdout  
**Since**: 0.0.7  

| Param | Type | Default |
| --- | --- | --- |
| [stdout] | <code>string</code> | <code>&quot;inherit&quot;</code> | 

<a name="Core+add"></a>

### core.add()
**Kind**: instance method of [<code>Core</code>](#Core)  
<a name="Core+toString"></a>

### core.toString()
**Kind**: instance method of [<code>Core</code>](#Core)  
<a name="Core+toCmd"></a>

### core.toCmd()
**Kind**: instance method of [<code>Core</code>](#Core)  
<a name="Core+run"></a>

### core.run() ⇒ <code>Promise.all</code>
get commands to strings, get env & cwd, run Remember, run the scripts

**Kind**: instance method of [<code>Core</code>](#Core)  
**Returns**: <code>Promise.all</code> - execa promise of all commands  
**See**: this.toCmd, execa, Remember  
**Since**: 0.0.3  
<a name="Core.init"></a>

### Core.init([parent]) ⇒ <code>ScriptChain</code>
**Kind**: static method of [<code>Core</code>](#Core)  
**Since**: 0.0.6  

| Param | Type |
| --- | --- |
| [parent] | <code>ScriptChain</code> \| <code>Chainable</code> \| <code>any</code> | 

<a name="addToGroup"></a>

## addToGroup(arg) ⇒ <code>Script</code>
**Kind**: global function  
**Returns**: <code>Script</code> - @chainable  
**See**: this.addToGroup, this.group  
**Since**: 0.0.3  

| Param | Type |
| --- | --- |
| arg | <code>string</code> | 

<a name="prefixer"></a>

## prefixer(prefix, names) ⇒ <code>Array.&lt;string&gt;</code>
**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - prefixed strings  

| Param | Type | Description |
| --- | --- | --- |
| prefix | <code>string</code> | prefix names if they don't already contain this,                         usually bound so it will be curried |
| names | <code>string</code> \| <code>Array.&lt;string&gt;</code> | names to prefix |

<a name="real"></a>

## real(input) ⇒ <code>boolean</code>
check if value is not null, not undefined, not empty string, not NaN

**Kind**: global function  
**Returns**: <code>boolean</code> - is real  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | any value |

