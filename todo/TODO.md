https://github.com/adamjeffries/cmdx
https://github.com/jonschlinkert/yarn-api
http://blog.trevnorris.com/2013/07/child-process-multiple-file-descriptors.html
dargs

- [ ] allow using `&&` and `|`

- [x] try to run a bin
  - [x] if it fails, use node
  - [x] store that it failed so we know when we try again

- [ ] can parse the argv from a string with that lib, then edit!

----

simple lerna wrapper to allow scoping with just comma packages


----

//
// for each devMode, or autoEnv mode :-)
//
// should clone and run in dev + prod,
// since we want to run both if needed,
// which means I need to be careful with auto-defining env... -.-
// .when(production, s => s.env('production'))
// .when(development, s => s.env('development'))
