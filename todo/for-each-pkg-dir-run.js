/**
 * @TODO could also just `require` and call `cwd`
 *
 * @desc
 *   read dir
 *   resolve to absolute path
 *   ensure directory & not node_modules
 *   add cwd to process.env, dereferences
 *   call child process for each cwd
 * @type {Array<Promise>}
 */
const builds = readdirSync(__dirname)
.map(dirname => join(__dirname, dirname))
.filter(dirname =>
	statSync(dirname).isDirectory() &&
	!dirname.includes('node_modules')
)
.sort()
.map(dirname => Object.assign(Object.assign({}, process.env), {cwd: dirname}))
.map(cmd => execa.shell('node build.js', cmd)
	.then(result =>
		log.blue(cmd.cwd).echo() &&
		log.yellow('result stdout').data(result.stdout).echo(debug))
)
