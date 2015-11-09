angular.module('app.landingPage',[])
.controller('landingPageController',
  ['$scope', '$state', function ($scope, $state) {

    $scope.form = {
      passwordValidation: "incorrect-input form-control input-lg",
      emailValidation: "incorrect-input form-control input-lg",
      passwordValid: false,
      emailValid: false
    };

    $scope.emailCheck = function(email){
      var atFound = 0;
      for (var i = 0; i < email.length; i++){
        if (email.charAt(i) === "@"){
          atFound++;
        }
      }
      if (email.slice(-4) === ".com" && atFound === 1){
        $scope.form.emailValidation = "correct-input form-control input-lg";
        $scope.form.emailValid = true;
      } else {
        $scope.form.emailValidation = "incorrect-input form-control input-lg";
        $scope.form.emailValid = false;
      }
    }

    $scope.checkValidPassword = function(){
      if ($scope.form.password.length >= 5){
        $scope.form.passwordValidation = "correct-input form-control input-lg";
        $scope.form.passwordValid = true;
      } else {
        $scope.form.passwordValidation = "incorrect-input form-control input-lg";
        $scope.form.passwordValid = false;
      }
    }

    $scope.signIn = function(){
      if ($scope.form.passwordValid && $scope.form.emailValid){
        $state.go('successPage');
      }
    }
}]);