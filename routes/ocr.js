/**
 * Created by omkar on 29/8/17.
 */
var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var Jimp = require("jimp");

var tesseract = require('./../libs/node-tesseract');


router.post('/', upload.single('file'), function(req, res) {


    // specify location of tesseract
    var options = {
        l: 'eng',
        binary: './libs/tesseract',
        config: '--tessdata "./libs/tesseract-ocr/tessdata"'
    };

    Jimp.read('./uploads/'+ req.file.filename, function (err, lenna) {

        var file = "res." + lenna.getExtension();

        if (err) throw err;
        lenna.quality(100)                 // set JPEG quality
            .contrast(1)
            .greyscale()
            .write(file); // save



        // process image
        tesseract.process(file, options, function(err, text){
            if(err){
                return console.log("An error occured: ", err);
            }

            console.log("Recognized text:");
            console.log(text);
            res.send(text);
        });

    });


});

module.exports = router;
