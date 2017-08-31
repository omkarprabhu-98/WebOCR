/**
 * Created by omkar on 29/8/17.
 */

var app = angular.module('WebOcr',[]);

app.controller('Ct',function($http, $scope){

    // $scope.scrolled = false;

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
                $scope.ocrText = data;
                // $('#preview').css('display','none');
            }
        )
    };

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

    var renderImage = function (file){
        var reader = new FileReader();
        reader.onload = function(event) {
            the_url = event.target.result;
            $('#preview').html("<img src='" + the_url + "' width='500' height='500'/>");
            $('#name').html(file.name);

        };

        //when the file is read it triggers the onload event above.
        reader.readAsDataURL(file);
    }

});



