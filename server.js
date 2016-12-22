const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const path = require('path');
const app = new (require('express'))();
const port = 8000;

const compiler = webpack(config);
middleware = webpackDevMiddleware(compiler, {
 publicPath: config.output.publicPath,
 stats: {
   colors: true,
   hash: false,
   timings: true,
   chunks: false,
   chunkModules: false,
   modules: false
 }
});
app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.use('/public', express.static('public'));

app.use('*', function (req, res) {
 res.write(middleware.fileSystem.readFileSync(path.join(__dirname, './dist/index.html')));
 res.end();
 // res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, function (error) {
 if (error) {
   console.error(error);
 } else {
   console.info('==> :earth_americas:  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
 }
});
