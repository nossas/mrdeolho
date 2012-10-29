describe('Events', function(){
  var mainScope;
  var events = {'click a': 'onClick'};

  beforeEach(module('Events'));
  describe('$rootScope', function(){
    beforeEach(inject(function($rootScope, $controller) {
      spyOn($rootScope, "delegateEvents").andReturn();
      mainScope = $rootScope.$new();
    }));

    describe("#delegateEvents", function(){
      it("should define delegateEvents to iterate on events", function(){
        mainScope.delegateEvents(events);
      });
    });

    describe("#events", function(){
      it("should call delegateEvents", function(){
        mainScope.events(events);
        expect(mainScope.delegateEvents).toHaveBeenCalledWith(events);
      });
    });
  });
});
