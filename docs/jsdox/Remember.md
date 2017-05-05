# Remember.js

estimate duration, save duration, save on escape too

**Requires:**

+ module:configstore
+ module:fliptime
+ module:fliplog
+ module:obj-chain-core
+ module:obj-chain-plugin-config


* * *

## Class: Remember
remember script times and show an accurate progress bar


## Class: Remember
estimate duration, save duration, save on escape too

### Remember.js.Remember.progressBar(str) 

update a progress bar with averages

**Parameters**

**str**: `string`, JSON.stringify(args)

**Returns**: `Remember`

### Remember.js.Remember.start(args, progress) 

hash the args, check if it exists, store result

**Parameters**

**args**: `Object | string`, unique hash / name

**progress**: `boolean`, hash the args, check if it exists, store result

**Returns**: `Remember`

### Remember.js.Remember.finish(args, result) 

hash the args, check if it exists, store result

**Parameters**

**args**: `Object`, stringifiable hash to use as key for remembering

**result**: `Object`, data, currently unused

**Returns**: `Remember`, @chainable



* * *










