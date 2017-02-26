module.exports = function (app) {

    const rapiroBusiness = require("../business/rapiroBusiness");
    const baseUrl = "/api/rapiro";
   
    // Defines endpoint for rapiro body movement (api/rapiro/body-movement)
    app.post(`${baseUrl}/body-movement`, function (req, res) {
        let direction = req.body.direction;

        // Call business and provide error handling (returns json response with status code)
        rapiroBusiness.moveBody(direction, function (err, result) {
            if(err) {
                res.status(500).json(err);
            } else if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json("Resource not found");
            }
        });

    });

     // Defines endpoint for rapiro body movement (api/rapiro/head-movement)
    app.post(`${baseUrl}/head-movement`, function (req, res) {
        let direction = req.body.direction;

        // Call business and provide error handling (returns json response with status code)
        rapiroBusiness.rotateHead(direction, function (err, result) {
            if(err) {
                res.status(500).json(err);
            } else if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json("Resource not found");
            }
        });
    });
};