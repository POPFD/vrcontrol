module.exports = function (app) {

    const raspiBusiness = require("../business/raspiBusiness");
    const baseUrl = "/api";
   
    // Defines endpoint for zumo arduino movement (api/move-zumo)
    app.post(`${baseUrl}/move-zumo`, function (req, res) {
        let direction = req.body.direction;
        // Call business and provide error handling (returns json response with status code)
        raspiBusiness.moveZumo(direction, function (err, result) {
            if (err) {
                res.status(500).json(err);
            } else if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json("Resource not found");
            }
        });

    });
};