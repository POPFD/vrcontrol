module.exports = function (app) {

    const resourceBusiness = require("../business/resourceBusiness");
    const baseUrl = "/api/rapiro/resources";
   
    // Defines endpoint for resources video feed (api/rapiro/get-video-feed)
    app.get(`${baseUrl}/get-video-feed`, function (req, res) {

        // Call business and provide error handling (returns json response with status code)
        resourceBusiness.getRapiroVideoFeed(function (err, result) {
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