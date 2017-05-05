# [script-chain](https://github.com/fliphub/fliphub#readme) *0.0.8*

> fluent script building


### src/deps.js


#### prefixer(prefix, names) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| prefix | `string`  | prefix names if they don't already contain this,                         usually bound so it will be curried | &nbsp; |
| names | `string` `Array.&lt;string&gt;`  | names to prefix | &nbsp; |




##### Returns


- `Array.&lt;string&gt;`  prefixed strings



#### real(input) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| input | `any`  | any value | &nbsp; |




##### Returns


- `boolean`  is real




### src/Flag.js


#### new Flag() 








##### Returns


- `Void`



#### Flag.init(parent) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| parent | `any`  |  | &nbsp; |




##### Returns


- `Flag`  



#### Flag.constructor(parent) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| parent | `any`  |  | &nbsp; |




##### Returns


- `Void`



#### Flag.shouldStringify() 








##### Returns


- `boolean`  




### src/index.js


#### Boss() 








##### Returns


- `Void`




### src/Remember.js


#### ObjChain() 








##### Returns


- `Void`



#### new Remember() 








##### Returns


- `Void`



#### Remember.progressBar(str) 

update a progress bar with averages




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `string`  | JSON.stringify(args) | &nbsp; |




##### Returns


- `Remember`  



#### Remember.start(args, progress) 

hash the args, check if it exists, store result




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| args | `Object` `string`  | unique hash / name | &nbsp; |
| progress | `boolean`  |  | &nbsp; |




##### Returns


- `Remember`  



#### Remember.finish(args[, result]) 

hash the args, check if it exists, store result




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| args | `Object`  | stringifiable hash to use as key for remembering | &nbsp; |
| result | `Object`  | data, currently unused | *Optional* |




##### Returns


- `Remember`  @chainable




### src/Script.js


#### ChainedMap() 








##### Returns


- `Void`



#### new Script() 








##### Returns


- `Void`



#### Script.constructor(parent) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| parent | `ScriptChain`  |  | &nbsp; |




##### Returns


- `Void`



#### Script.add(name) 

returns to Scripts to add a new Script




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `string`  |  | &nbsp; |




##### Returns


- `Scripts`  chain back to parent for a new Script



#### Script.doubleDash(arg) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| arg | `string`  |  | &nbsp; |




##### Returns


- `Script`  @chainable



#### Script.prefix(prefix) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| prefix | `string`  |  | &nbsp; |




##### Returns


- `Script`  @chainable



#### Script.flagIndex(index) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| index |  |  | &nbsp; |




##### Returns


- `Script`  @chainable



#### Script.file(file) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| file | `string`  | path to file to exec | &nbsp; |




##### Returns


- `Script`  @chainable



#### Script.npm(npm) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| npm | `string`  | npm script to execute | &nbsp; |




##### Examples

```javascript
 input: .npm('diggity').env('magic').flag('env.zoolala', 'aoao').arg('-e')
 output: run-script diggy -- --env.zoolala=aoao -e
```


##### Returns


- `Script`  @chainable



#### Script.node([harmony&#x3D;true]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| harmony&#x3D;true | `boolean`  | use harmony | *Optional* |




##### Returns


- `Script`  @chainable



#### Script.bin(bin) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| bin | `string`  |  | &nbsp; |




##### Returns


- `Script`  @chainable



#### Script.raw(raw) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| raw | `string`  | raw script to concat to the chain | &nbsp; |




##### Returns


- `Script`  @chainable



#### Script.stdout([stdout&#x3D;&#x27;stdout&#x27;]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| stdout&#x3D;&#x27;stdout&#x27; | `string`  |  | *Optional* |




##### Returns


- `Script`  @chainable



#### Script.currentGroup() 








##### Returns


- `Array.&lt;Flag|null&gt;`  



#### Script.goToGroup([index]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| index | `number`  | if blank, goes to last | *Optional* |




##### Returns


- `Script`  @chainable



#### Script.group() 








##### Returns


- `Script`  @chainable



#### Script.addToGroup(flag[, index, group]) 

adds a flag to a specific group, defaults to current




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| flag | `Flag`  |  | &nbsp; |
| index | `number`  |  | *Optional* |
| group | `number`  |  | *Optional* |




##### Returns


- `Script`  @chainable



#### Script._addFlag([index, group])  *private method*






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| index | `number`  |  | *Optional* |
| group | `number`  |  | *Optional* |




##### Returns


- `Flag`  



#### Script.flag(name[, value]) 

use `arg` for no `--`
 if value === OFF, it is an arg with no value




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `string`  |  | &nbsp; |
| value | `string`  |  | *Optional* |




##### Returns


- `Script`  @chainable



#### Script.arg(name[, value, index, group]) 

if value === OFF,
  it is an arg with no value




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `string`  |  | &nbsp; |
| value | `string`  |  | *Optional* |
| index | `number`  |  | *Optional* |
| group | `number`  |  | *Optional* |




##### Returns


- `Script`  @chainable



#### Script.globFlag(name, apps[, dash&#x3D;true]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `string`  | flag name | &nbsp; |
| apps | `string` `Array.&lt;string&gt;`  | string names to use | &nbsp; |
| dash&#x3D;true | `boolean` `string`  | add `-` before it | *Optional* |




##### Returns


- `Script`  @chainable (Flag as current)



#### Script.globArg(name, apps[, stringify]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `string`  |  | &nbsp; |
| apps | `string` `Array.&lt;string&gt;` `boolean`  | boolean when stringify | &nbsp; |
| stringify | `boolean` `string`  |  | *Optional* |




##### Returns


- `Script`  @chainable (Flag as current)



#### Script.globEnv(env, apps) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| env | `string`  |  | &nbsp; |
| apps | `string` `Array.&lt;string&gt;`  |  | &nbsp; |




##### Returns


- `Script`  @chainable (Flag as current)



#### Script.globEnvAndFlag(env, apps, opts) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| env | `string`  |  | &nbsp; |
| apps | `string` `Array.&lt;string&gt;`  |  | &nbsp; |
| opts | `Object`  | {dash: boolean, prefix: boolean} | &nbsp; |




##### Returns


- `Script`  @chainable (Flag as current)



#### Script.envArg(env) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| env | `string.&lt;production, development, any&gt;`  |  | &nbsp; |




##### Returns


- `Script`  @chainable



#### Script.envDefine(env, prop) 

to pass along to child_processes




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| env | `string.&lt;production, development, any&gt;`  |  | &nbsp; |
| prop | `string`  |  | &nbsp; |




##### Returns


- `Script`  @chainable (Flag as current)



#### Script.env(env) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| env | `string.&lt;production, development, any&gt;`  |  | &nbsp; |




##### Returns


- `Script`  @chainable (Flag as current)



#### Script.envs(env) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| env | `string`  |  | &nbsp; |




##### Returns


- `Script`  @chainable (Flag as current)



#### Script.lerna() 








##### Returns


- `Script`  @chainable



#### this.log([level&#x3D;&#x27;info&#x27;]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| level&#x3D;&#x27;info&#x27; | `string`  |  | *Optional* |




##### Returns


- `Script`  @chainable



#### this.lernaEnv(env) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| env | `string`  |  | &nbsp; |




##### Returns


- `Script`  @chainable



#### this.scope(scope) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| scope | `string`  |  | &nbsp; |




##### Returns


- `Script`  @chainable



#### toArray([reduce]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| reduce | `boolean`  | return as joined (should move to toStr) | *Optional* |




##### Returns


- `Array.&lt;string&gt;`  



#### toString() 








##### Returns


- `string`  



#### toCmd() 








##### Returns


- `Object`  




### src/ScriptChain.js


#### ChainedMap() 








##### Returns


- `Void`



#### new ScriptChain() 








##### Examples

```javascript
input  scripts
  .add()
  .npm('diggy')
  .env('magic')
  .flag('env.zoolala', 'aoao')
  .arg('-e')
```
```javascript
output `${env} ${lerna} exec ${lernaLog} ${scoped} -- node ${binPath}`
```


##### Returns


- `Void`



#### ScriptChain.init([parent]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| parent | `ScriptChain` `Chainable` `any`  |  | *Optional* |




##### Returns


- `ScriptChain`  



#### ScriptChain.constructor([parent]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| parent | `ScriptChain` `Chainable` `any`  |  | *Optional* |




##### Returns


- `Void`



#### ScriptChain.env(name, value) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `string`  |  | &nbsp; |
| value | `string`  |  | &nbsp; |




##### Returns


- `ScriptChain`  @chainable



#### ScriptChain.stdout([stdout]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| stdout | `string`  |  | *Optional* |




##### Returns


- `ScriptChain`  @chainable



#### ScriptChain.add() 








##### Returns


- `Void`



#### ScriptChain.toString() 








##### Returns


- `Void`



#### ScriptChain.toCmd() 








##### Returns


- `Void`



#### ScriptChain.run() 








##### Returns


- `Promise.all`  execa promise of all commands




### src/ScriptPermutator.js


#### toarr() 








##### Returns


- `Void`



#### new ScriptPermutator() 








##### Returns


- `Void`




### src/Scripts.js


#### ChainedMap() 








##### Returns


- `Void`



#### new Scripts() 








##### Returns


- `Void`



#### Scripts.constructor(parent) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| parent | `Chainable`  |  | &nbsp; |




##### Returns


- `Void`



#### Scripts.add([name]) 

start/add/name a script




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `string`  |  | *Optional* |




##### Returns


- `Script`  



#### Scripts.toCmd() 








##### Returns


- `Array`  



#### Scripts.toString() 








##### Returns


- `Array`  !!!




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
