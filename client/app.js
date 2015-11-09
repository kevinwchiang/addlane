angular.module('app', 
  [
  'ui.router', 
  'app.landingPage', 
  'app.signupPage'
  ])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('landingPage', {
        url: "/",
        templateUrl: "landingPage/landingPage.html"
      })
      .state('signupPage', {
        url: "/signupPage",
        templateUrl: "signupPage/signupPage.html"
      })
      .state('successPage', {
        url: "/successPage",
        templateUrl: "successPage/successPage.html"
      })

}])
