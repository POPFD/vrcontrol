module.exports = function (app, dir) {
   
    app.get('/', function (req, res) {
        res.sendFile(`${dir}/raspi-client/views/index.html`)
    });

};