
@{
    Layout = null;
}

<!DOCTYPE html>

<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title>Login</title>
    <link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="~/Views/Home/main.css">
</head>
<body ng-app="AssetApp" ng-controller="HomeController">
    <div>
        <form name="myform">
            <center>
                <fieldset style="border: medium double #000080">
                    <p id="form"><b>User Login</b></p>
                    <div id="box">
                        <label>User name  </label>
                        </br>
                        </br>
                        <input type="text" class="form-control" name="user" ng-model="user.Email">
                        </br>
                        </br>
                        <label>Password </label>
                        </br>
                        </br>
                        <input type="password" class="form-control" name="pass" ng-model="user.Password">
                        </br>
                        </br>
                        <a href="#" id="login" ng-click="login()">login</a>
                    </div>
                    </fieldset>
            </center>
        </form>
    </div>
    <script src="~/script/angular.min.js"></script>
    <script src="~/script/AngularController/Angularhome.js"></script>
</body>
</html>
