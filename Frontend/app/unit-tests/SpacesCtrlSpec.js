'use strict';

describe('makersBnB', function() {
  var scope, ctrl, $httpBackend;
  var fake_space = [{name: 'My space', price: 234, location: "newcastle", size: 3, property_type: "lighthouse"}]
  var fake_space2 = [{name: 'Buckingham Palace', price: 999, location: "london", size: 3000, property_type: "palace"}]

    beforeEach(module('makersBnB'));

    describe('returns a space as a JSON object', function() {
      beforeEach(inject(function(_$httpBackend_, $controller, $rootScope){
        $httpBackend = _$httpBackend_
        $httpBackend.expectGET('http://localhost:3000/api/spaces.json').respond(fake_space)
        $httpBackend.expectPOST('http://localhost:3000/api/spaces', fake_space2)
        scope = $rootScope.$new();
        ctrl = $controller('SpacesCtrl', {$scope:scope})
       }))

      it('should return a list of spaces by default', function() {
        expect(scope.spaces).toBeUndefined();
        $httpBackend.flush();
        expect(scope.spaces.length).toBe(1);
      });

      it('should create a new space', function(){

      })
    });
});


