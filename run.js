const exec = require('child_process').exec;
const path = require('path');
const fs = require('fs');
const Stream = require('stream').Stream;

const dirname = `./test/fixtures/${process.argv[2]}/`;

exec(`node ${path.resolve(__dirname, 'node_modules/babel-cli/bin/babel.js')} ${dirname}input.js`, (err, stdout) => {
	if (err) throw new Error(err.message);
	fs.writeFile(path.resolve(__dirname, dirname + 'output.js'), stdout, (e) => {
		if (err) throw new Error();
		console.log('Complated!')
	});
})