/**
 * Created by omkar on 29/8/17.
 */

var app = angular.module('WebOcr',[]);

app.controller('Ct',function($http, $scope){

    // formData object
    var formD = new FormData();

    // upload
    $scope.up = function () {
        $('.preloader').addClass('loader');
        $http(
            {
                method: 'POST',
                url: "http://localhost:3000/api/ocr",
                data: formD,
                transformRequest: angular.identity,
                headers: {'Content-type': undefined}
            }
        ).then(
            function successCallback(response) {
                $('.preloader').removeClass('loader');
                var data = response.data;
                console.log(data);
                $scope.ocrText = data;
                // $('#preview').css('display','none');
            }
        )
    };

    // select file
    $scope.selectedFile = function(file){
        // $('#preview').css('display','block');
        // add file to key 'file'
        if(formD.has('file')){
            formD.delete('file');
        }
        // console.log(file);
        formD.append('file', file);
        renderImage(file);
    };

    // scroll check for fade in
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {

            $('nav').addClass('active');
        }
        if ($(window).scrollTop() > 400) {

            $('.steps').addClass('active');
        }
        if ($(window).scrollTop() > 600) {

            $('.ocr').addClass('active');
        }
    });

    //  display img in div
    var renderImage = function (file){
        var reader = new FileReader();
        reader.onload = function(event) {
            the_url = event.target.result;

            var screenWidth = $(window).width();
            console.log(screenWidth);
            if (screenWidth < 700){
                $('#preview').html("<img src='" + the_url + "' width='200' height='200'/>");
            }else{
                $('#preview').html("<img src='" + the_url + "' width='400' height='400'/>");
            }
            $('#name').html(file.name);

        };
        reader.readAsDataURL(file);
    }

});



