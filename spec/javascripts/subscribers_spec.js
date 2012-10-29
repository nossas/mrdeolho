describe('Subscribers', function(){
  var mainScope;
  var events = {'click a': 'onClick'};

  beforeEach(module('Events'));

  beforeEach(inject(function($rootScope, $controller) {
    mainScope = $rootScope.$new();
    var subscribers = $controller(Subscribers, {$scope: $rootScope})
  }));

  describe("#delegateEvents", function(){
    it("should define delegateEvents to iterate on events", function(){
      mainScope.delegateEvents(events);
    });
  });

});
