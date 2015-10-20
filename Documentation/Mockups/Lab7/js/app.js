var app = angular.module("myApp", [])


app.controller("RegisterController", function ($scope, $http, $httpParamSerializerJQLike) {

    $scope.pageClass = 'register';
$scope.register = function(username, password, email) {
   console.log("inside login function");
$http({
    method: 'POST',
    url : 'https://api.mongolab.com/api/1/databases/angularlogin/collections/register?apiKey=jwTtZxj0UFvt_JDGFsAcPUfPT_jBY_JA',
    data: JSON.stringify({
                name: username,
                password: password,
                email: email
            }),
    contentType: "application/json"
}).success(function() {
    $scope.userName ="";
    $scope.password ="";
    $scope.email ="";
    
    $scope.msg ="User created successfully";
        })
}

$scope.login = function(userName, password) {
    
    $http.get('https://api.mongolab.com/api/1/databases/angularlogin/collections/register?q={"name":"userName", "password":"password"}&apiKey=jwTtZxj0UFvt_JDGFsAcPUfPT_jBY_JA'
).then(function successCallback(response){
        loggedIn =true;
        //showLocs();
        $scope.name = "Welcome, " + userName + "!";
       // $scope.loginModal.hide();
        //document.getElementById("loginForm").reset();
        
    }, function errorCallback(response){$scope.loginErr="Damn!! u messed it again"});
}
    
    $scope.registerfriend = function(email, username, mobilenumber) {
   console.log("inside login function");
$http({
    method: 'POST',
    url : 'https://api.mongolab.com/api/1/databases/angularlogin/collections/registerfriend?apiKey=jwTtZxj0UFvt_JDGFsAcPUfPT_jBY_JA',
    data: JSON.stringify({
                email: email,
                username: username,
                mobilenumber: mobilenumber
            }),
    contentType: "application/json"
}).success(function() {
    $scope.userName ="";
    $scope.password ="";
    $scope.email ="";
    
    $scope.msg ="User added to ur list successfully";
        })
   console.log("inside login function");
        $scope.msg ="User added to ur list successfully";

}
    $scope.searchfriend = function(username) {
    
    $http.get('https://api.mongolab.com/api/1/databases/angularlogin/collections/registerfriend?q={"name":"userName"}&apiKey=jwTtZxj0UFvt_JDGFsAcPUfPT_jBY_JA'
).then(function successCallback(response){
        loggedIn =true;
        //showLocs();
        $scope.name = "Welcome, " + username + "!";
       // $scope.loginModal.hide();
        //document.getElementById("loginForm").reset();
        
    }, function errorCallback(response){$scope.loginErr="Damn!! u messed it again"});
}
    
});  
