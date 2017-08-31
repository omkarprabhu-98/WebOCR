/**
 * Created by omkar on 29/8/17.
 */

var app = angular.module('WebOcr',[]);

app.controller('Ct',function($http, $scope){

    // $scope.scrolled = fals;

    // formData object
    var formD = new FormData();

    // upload
    $scope.up = function () {

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
                var data = response.data;
                console.log(data);
            }
        )
    };

    $scope.selectedFile = function(file){

        // add file to key 'file'
        formD.append('file', file);
    };

    $(window).scroll(function () {
        console.log($(window).scrollTop());
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

});



