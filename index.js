/**
 * Created by SAMOLS on 8/15/2017.
 */
const path = require('path');
const express = require('express');

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, './dist/index.html');
    const publicPath = express.static(path.join(__dirname, '../public'));
    const assetsPath = express.static(path.join(__dirname, '/dist/assets'));
    app.use('/public', publicPath);
    app.use('/assets', assetsPath);
    app.get('/', function (_, res) { res.sendFile(indexPath) });

    return app;
  }
};
