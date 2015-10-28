app.controller('MainController',['$scope', 'servicesfactory', function($scope, servicesfactory) {
  servicesfactory.success(function(data) {
  $scope.photolist = data;
});
}]);
