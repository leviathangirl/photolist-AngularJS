app.factory('servicesfactory',['$http',function($http) {
  return $http.get('photos.json')
  .success(function(data) {
    return data;
  })
  .error(function(err) {
    return err;
  });
}]);
