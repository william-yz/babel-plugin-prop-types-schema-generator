const { resolve } = require('path');
const { readdirSync, readFileSync } = require('fs');
const { transformFileSync } = require('babel-core');


describe('index', () => {
	const fixturesDir = resolve(__dirname, 'fixtures')
	const dirs = readdirSync(fixturesDir);
	dirs.forEach(caseName => {
		const fixtureDir = resolve(fixturesDir, caseName);
		const inputFile = resolve(fixtureDir, 'input.js');
		const outputFile = resolve(fixtureDir, 'output.js');

		it(caseName, () => {
			expect(transformFileSync(inputFile).code)
				.toEqual(readFileSync(outputFile, 'utf-8').trim())
		})
	})

});