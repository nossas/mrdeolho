angular.module('Events', []).run(['$rootScope', function($scope) {
  
  $scope.events = function(events){
    $scope.delegateEvents(events);
  };

  $scope.delegateEvents = function(events){
    $.each(events, function(el, fn){
      console.log(el, fn);
    });
  };

}]);
