var app = angular.module('AssetApp', []);
app.controller("HomeController", function ($scope,$http) {
    $scope.btntext = "Login";
    $scope.login = function () {
        $scope.btntext = "Please Wait...!";
        $http({
            method: "POST",
            url: '/Home/Userlogin',
            data: $scope.user
        }).success(function (d) {
            $scope.btntext = 'Login';
            if (d == 1) {
                window.location.href ='/Home/AssetFrm';
            }
            else
            {
                alert(d);
            }
            $scope.user = null;
        }).error(function () {
            alert('Failed');
        })
    }
    })
