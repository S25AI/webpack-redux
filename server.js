'use strict';

const PORT = 3000;
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
/*const webpackHotMiddleware = require('webpack-hot-middleware');*/
const config = require('./webpack.config');

const express = require('express');
const app = express();

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));
/*app.use(webpackHotMiddleware(compiler));*/

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/index.html`);
});

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});