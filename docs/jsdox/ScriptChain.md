# ScriptChain.js

core of script-chain

**Requires:**

+ module:flipchain/ChainedMapExtendable
+ module:fliplog
+ module:execa
+ module:./binner
+ module:./Remember


* * *

## Class: Core
core of script-chain

**scripts**: `Scripts` , scripts to use when running
**remember**: `Remember` , remember script times and show an accurate progress bar
### ScriptChain.js.Core.init(parent) 

core of script-chain

**Parameters**

**parent**: `ScriptChain | Chainable | any`, core of script-chain

**Returns**: `ScriptChain`


## Class: ScriptChain
core of script-chain

### ScriptChain.js.ScriptChain.env(name, value) 

core of script-chain

**Parameters**

**name**: `string`, core of script-chain

**value**: `string`, core of script-chain

**Returns**: `ScriptChain`, @chainable

### ScriptChain.js.ScriptChain.stdout(stdout) 

core of script-chain

**Parameters**

**stdout**: `string`, core of script-chain

**Returns**: `ScriptChain`, @chainable

### ScriptChain.js.ScriptChain.add() 

core of script-chain


### ScriptChain.js.ScriptChain.toString() 

core of script-chain


### ScriptChain.js.ScriptChain.toCmd() 

core of script-chain


### ScriptChain.js.ScriptChain.run() 

get commands to strings, get env & cwd, run Remember, run the scripts

**Returns**: `Promise.all`, execa promise of all commands



* * *










