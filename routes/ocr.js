/**
 * Created by omkar on 29/8/17.
 */

var express = require('express');
var router = express.Router();

var tesseract = require('./../libs/node-tesseract');


/* GET home page. */
router.get('/', function(req, res, next) {

    var options = {
        l: 'eng',
        binary: './libs/tesseract',
        config: '--tessdata "./libs/tesseract-ocr/tessdata"'
    };


    tesseract.process('b.jpg', options, function(err, text){
        if(err){
            return console.log("An error occured: ", err);
        }

        console.log("Recognized text:");
        // the text variable contains the recognized text
        console.log(text);
        res.send(text);
    });

});

module.exports = router;
