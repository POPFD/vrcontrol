module.exports = function (app) {

    const baseUrl = "/api/rapiro";
    const rapiroBusiness = require("../business/rapiroBusiness");

    app.post(`${baseUrl}/movement`, function (req, res) {
        let direction = req.body.direction;

        rapiroBusiness.move(direction, function (err, result) {
            if(err) {
                res.status(500).json(err);
            } else if (result) {
                res.status(200).json(result);
            } else {
                res.status(200).json("Resoyrce not found");
            }
        });

    });

};