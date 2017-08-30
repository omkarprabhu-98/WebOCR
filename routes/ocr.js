/**
 * Created by omkar on 29/8/17.
 */
var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

var tesseract = require('./../libs/node-tesseract');



router.post('/', upload.single('file'), function(req, res) {

    // specify location of tesseract
    var options = {
        l: 'eng',
        binary: './libs/tesseract',
        config: '--tessdata "./libs/tesseract-ocr/tessdata"'
    };

    // process image
    tesseract.process('./uploads/'+ req.file.filename, options, function(err, text){
        if(err){
            return console.log("An error occured: ", err);
        }

        console.log("Recognized text:");


        console.log(text);


        res.send(text);
    });

});

module.exports = router;
