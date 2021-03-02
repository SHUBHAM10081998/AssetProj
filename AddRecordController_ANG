var app = angular.module('AssetApp', []);
app.controller("HomeController", function ($scope, $http) {
    $scope.btntext = "Submit";
    $scope.savedata = function () {
        $scope.btntext = "Please Wait...!";
        $http({
            method:"POST",
            url:'/Home/Add_Record',
            data: $scope.submitRcrd
        }).success(function () {
            $scope.btntext = 'Submit';
            $scope.submitRcrd = null;
            alert("Data Submited Sucessfully");
        }).error(function () {
            alert('Faield');
        })
    }
})
