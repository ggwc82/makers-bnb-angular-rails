'use strict';

describe('makersBnB', function() {
  var scope, ctrl, $httpBackend;
  var fake_space = [{name: 'My space', price: 234, location: "newcastle", size: 3, property_type: "lighthouse"}]

    beforeEach(module('makersBnB.index'));

    describe('returns a space as a JSON object', function() {
      beforeEach(inject(function(_$httpBackend_, $controller, $rootScope){
        $httpBackend = _$httpBackend_
        $httpBackend.expectGET('http://localhost:3000/spaces.json').respond(fake_space)
        scope = $rootScope.$new();
        ctrl = $controller('SpacesCtrl', {$scope:scope})
       }))

      it('should return a list of spaces by default', function() {
        expect(scope.spaces).toBeUndefined();
        $httpBackend.flush();
        expect(scope.spaces.length).toBe(1);
      });
    });
});


