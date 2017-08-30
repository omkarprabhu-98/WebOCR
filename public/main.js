/**
 * Created by omkar on 29/8/17.
 */

var app = angular.module('WebOcr',[]);

app.controller('Ct',function($http, $scope){

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



});



