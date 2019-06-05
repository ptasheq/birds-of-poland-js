const Sealious = require('sealious');

const config = require('../../config.js');
const manifest = require('../../manifest.js');

const App = new Sealious.App(config, manifest);

const dependencies = ['collections/users.js'];

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
dependencies.forEach(dependency => require(`./${dependency}`)(App));

module.exports = {
	start: () => App.start(),
	_app: App,
};
