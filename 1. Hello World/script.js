function HelloCtrl($scope) {
  $scope.action = function() {
    $scope.name = 'World';
  }
  
  $scope.name = '';
}