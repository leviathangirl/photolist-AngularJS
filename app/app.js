var app = angular.module('PhotoList', []);
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainController'
    }
    .when('/photos/:id', {
    controller: 'PhotoController',
  templateUrl: 'views/photo.html'}

    )
  ).otherwise({
      redirectTo: '/'
    });

});
