(function (resource) {

    resource.getRapiroVideoFeed = function (callback) {
        // Get the video feed from rapiro/pi
        var videoFeed = "Heres the video feed";

        if (videoFeed) {
            callback(null, videoFeed);
        } else {
            var err = "Could not get video feed from rapiro-pi";
            // Error occurred could not get video feed from rapiro-pi
            callback(err, null);
        }
    };

})(module.exports);