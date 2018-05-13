var express = require('express');
var router = express.Router();
var request = require("request")
/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body.NN);
    var N = parseInt(req.body.NN)
    request({
        url: "http://terriblytinytales.com/test.txt",
        json: false
    }, function (error, response, body) {

        var fulldata = body;
        fulldata = fulldata.replace(/\./g, "");
        fulldata = fulldata.replace(/\?/g, "");
        fulldata = fulldata.replace(/\//g, "");
        fulldata = fulldata.replace(/\,/g, "");
        fulldata = fulldata.replace(/\./g, "");
        fulldata = fulldata.split("\n").join(" ").split(" ");
        fulldata = fulldata.filter(function(e) { return e !== ''});

        var frequencies={};
        for( i=0; i<fulldata.length; i++ ) {
            var word = fulldata[i];
            frequencies[word] = frequencies[word] || 0;
            frequencies[word]++;
        }
        words = Object.keys( frequencies );
        console.log((Object.values( frequencies )));
        var sortedwords = [];
        for (var d in frequencies) {
            sortedwords.push([d, frequencies[d]]);
        }
        sortedwords.sort(function(a, b) {
            return -(a[1] - b[1]);
        });

        console.log(sortedwords.slice(0,N));
        res.json({"sortedwords": sortedwords.slice(0,N)});
        if (!error && response.statusCode === 200) {
            console.log(error);
        }
    })



});

module.exports = router;
