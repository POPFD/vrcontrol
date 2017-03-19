/**
 * @file raspiAPI.js
 * @author Damon Jones
 * @date 27 Feb 2017
 * @brief Defines the API endpoints for our HTTP server.
 *
 */

/**
 * @brief Exports our possible endpoints for HTTP server API.
 * Only API endpoint at the moment is move-zumo
 *
 * @param app - Instance of our express server.
 */
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
