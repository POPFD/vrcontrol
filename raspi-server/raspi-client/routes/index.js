var httpProxy = require('http-proxy');

module.exports = function (app, dir) {
   
    app.get('/', function (req, res) {
        res.sendFile(`${dir}/raspi-client/views/index.html`)
    });

    app.get('/stream', function (req, res) {
      var proxy = httpProxy.createProxyServer({});

      proxy.web(req, res, { target: 'http://127.0.0.1:9001' });
    });

};