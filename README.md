Different versions of Node

You should install `nvm` to manage different versions of Node.

Stable versions are even (0.10, 0.12), unstable versions are odd (0.11) numbers.

Then you can install and use 0.12 by doing:

	nvm install 0.12
	nvm use 0.12

Libraries to Install

`-g` flag stands for global installs.

	npm install -g babel

	npm install -g mocha

You should run `npm install` in the root folder to install dependencies defined in `package.json` file.

To install npm modules and save them to `package.json`, you have to use `--save` flag

	npm i underscore --save

To run tests:

	mocha test/sql.js

	mocha test/test.js

To run ES6 features, you need at least Node version 0.11 installed.

As Node version 0.12 is out, it is better to use that.

	node --harmony test/es6/yield.js
