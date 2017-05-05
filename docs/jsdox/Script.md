# Script.js

script that contains multiple flags

**Requires:**

+ module:flipchain/ChainedMapExtendable
+ module:fliplog
+ module:flipglob
+ module:./Flag
+ module:./deps


* * *

## Class: Script
script that contains multiple flags

**groups**: `Array.&lt;Array&gt;` , groups of flags, aka --
**index**: `number` , current index
**current**: `Object` , current flag group being built

## Class: Script
script that contains multiple flags

### Script.js.Script.add(name) 

returns to Scripts to add a new Script

**Parameters**

**name**: `string`, returns to Scripts to add a new Script

**Returns**: `Scripts`, chain back to parent for a new Script

### Script.js.Script.addToGroup(arg) 

script that contains multiple flags

**Parameters**

**arg**: `string`, script that contains multiple flags

**Returns**: `Script`, @chainable

### Script.js.Script.prefix(prefix) 

script that contains multiple flags

**Parameters**

**prefix**: `string`, script that contains multiple flags

**Returns**: `Script`, @chainable

### Script.js.Script.flagIndex(index) 

@modifies store.prefix

**Parameters**

**index**: `*`, @modifies store.prefix

**Returns**: `Script`, @chainable

### Script.js.Script.file(file) 

calls .addToGroup 'node'

**Parameters**

**file**: `string`, path to file to exec

**Returns**: `Script`, @chainable

### Script.js.Script.npm(npm) 

adds npm to first group
      adds flags to a new group - which npm requires

**Parameters**

**npm**: `string`, npm script to execute

**Returns**: `Script`, @chainable

**Example**:
```js
input: .npm('diggity').env('magic').flag('env.zoolala', 'aoao').arg('-e')
 output: run-script diggy -- --env.zoolala=aoao -e
```

### Script.js.Script.node(harmony) 

adds max_old_space_size so script does not run out of memory

**Parameters**

**harmony**: `boolean`, use harmony

**Returns**: `Script`, @chainable

### Script.js.Script.bin(bin) 

calls this.addToGroup(bin)

**Parameters**

**bin**: `string`, calls this.addToGroup(bin)

**Returns**: `Script`, @chainable

### Script.js.Script.raw(raw) 

add a raw string to the script

**Parameters**

**raw**: `string`, raw script to concat to the chain

**Returns**: `Script`, @chainable

### Script.js.Script.stdout(stdout) 

set whether to inherit (default added to execa.results.stdout)

**Parameters**

**stdout**: `string`, set whether to inherit (default added to execa.results.stdout)

**Returns**: `Script`, @chainable

### Script.js.Script.currentGroup() 

script that contains multiple flags

**Returns**: `Array.&lt;?Flag&gt;`

### Script.js.Script.goToGroup(index) 

script that contains multiple flags

**Parameters**

**index**: `number`, if blank, goes to last

**Returns**: `Script`, @chainable

### Script.js.Script.group() 

adds a group

**Returns**: `Script`, @chainable

### Script.js.Script.addToGroup(flag, index, group) 

adds a flag to a specific group, defaults to current

**Parameters**

**flag**: `Flag`, adds a flag to a specific group, defaults to current

**index**: `number`, adds a flag to a specific group, defaults to current

**group**: `number`, adds a flag to a specific group, defaults to current

**Returns**: `Script`, @chainable

### Script.js.Script.flag(name, value) 

use `arg` for no `--`
 if value === OFF, it is an arg with no value

**Parameters**

**name**: `string`, use `arg` for no `--`
 if value === OFF, it is an arg with no value

**value**: `string`, use `arg` for no `--`
 if value === OFF, it is an arg with no value

**Returns**: `Script`, @chainable

### Script.js.Script.arg(name, value, index, group) 

if value === OFF,
  it is an arg with no value

**Parameters**

**name**: `string`, if value === OFF,
  it is an arg with no value

**value**: `string`, if value === OFF,
  it is an arg with no value

**index**: `number`, if value === OFF,
  it is an arg with no value

**group**: `number`, if value === OFF,
  it is an arg with no value

**Returns**: `Script`, @chainable

### Script.js.Script.globFlag(name, apps, dash) 

script that contains multiple flags

**Parameters**

**name**: `string`, flag name

**apps**: `string | Array.&lt;string&gt;`, string names to use

**dash**: `boolean | string`, add `-` before it

**Returns**: `Script`, @chainable (Flag as current)

### Script.js.Script.globArg(name, apps, stringify) 

script that contains multiple flags

**Parameters**

**name**: `string`, script that contains multiple flags

**apps**: `string | Array.&lt;string&gt; | boolean`, boolean when stringify

**stringify**: `boolean | string`, script that contains multiple flags

**Returns**: `Script`, @chainable (Flag as current)

### Script.js.Script.globEnv(env, apps) 

uses glob as an environment variable, rather than a flag

**Parameters**

**env**: `string`, uses glob as an environment variable, rather than a flag

**apps**: `string | Array.&lt;string&gt;`, uses glob as an environment variable, rather than a flag

**Returns**: `Script`, @chainable (Flag as current)

### Script.js.Script.globEnvAndFlag(env, apps, opts) 

uses glob as env AND as flag

**Parameters**

**env**: `string`, uses glob as env AND as flag

**apps**: `string | Array.&lt;string&gt;`, uses glob as env AND as flag

**opts**: `Object`, {dash: boolean, prefix: boolean}

**Returns**: `Script`, @chainable (Flag as current)

### Script.js.Script.envArg(env) 

makes an arg with `NODE_ENV` as the name

**Parameters**

**env**: `string.&lt;production, development, any&gt;`, makes an arg with `NODE_ENV` as the name

**Returns**: `Script`, @chainable

### Script.js.Script.envDefine(env, prop) 

to pass along to child_processes

**Parameters**

**env**: `string.&lt;production, development, any&gt;`, to pass along to child_processes

**prop**: `string`, to pass along to child_processes

**Returns**: `Script`, @chainable (Flag as current)

### Script.js.Script.env(env) 

script that contains multiple flags

**Parameters**

**env**: `string.&lt;production, development, any&gt;`, script that contains multiple flags

**Returns**: `Script`, @chainable (Flag as current)

### Script.js.Script.envs(env) 

does both env.define and env.arg

**Parameters**

**env**: `string`, does both env.define and env.arg

**Returns**: `Script`, @chainable (Flag as current)

### Script.js.Script.lerna() 

adds lerna as the first bin to use

**Returns**: `Script`, @chainable

### Script.js.Script.log(level) 

adds .loglevel for lerna

**Parameters**

**level**: `string`, adds .loglevel for lerna

**Returns**: `Script`, @chainable

### Script.js.Script.lernaEnv(env) 

adds the env to use

**Parameters**

**env**: `string`, adds the env to use

**Returns**: `Script`, @chainable

### Script.js.Script.scope(scope) 

prefixes the commands,
      turns them into a glob flag
      for use with lerna exec

**Parameters**

**scope**: `string`, prefixes the commands,
      turns them into a glob flag
      for use with lerna exec

**Returns**: `Script`, @chainable

### Script.js.Script.toArray(reduce) 

for use in execa and tostring

**Parameters**

**reduce**: `boolean`, return as joined (should move to toStr)

**Returns**: `Array.&lt;string&gt;`

### Script.js.Script.toString() 

calls this.toArr, joins with --, replaces empty spaces

**Returns**: `string`

### Script.js.Script.toCmd() 

gets
   - store.stdout
   - store.env
   - this.toArray()
 shifts around & trims the string groups to make them runnable
 extracts the bin

**Returns**: `Object`



* * *










