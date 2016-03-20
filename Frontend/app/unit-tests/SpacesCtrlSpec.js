'use strict';

describe('makersBnB', function() {
  var scope, ctrl, $httpBackend, location;
  var fake_space = [{name: 'My space', price: 234, location: "newcastle", size: 3, property_type: "lighthouse", id: 1}]
  var fake_space2 = {name: 'Buckingham Palace', price: 999, location: "london", size: 3000, property_type: "palace", id: 2}

    beforeEach(module('makersBnB'));

    describe('returns a space as a JSON object', function() {
      beforeEach(inject(function(_$httpBackend_, $controller, $rootScope, $location){
        $httpBackend = _$httpBackend_
        location = $location


        scope = $rootScope.$new();
        ctrl = $controller('SpacesCtrl', {$scope:scope})
       }))

      it('should return a list of spaces by default', function() {
        expect(ctrl.spaces.length).toBe(0);
        $httpBackend.expectGET('http://localhost:3000/api/spaces.json').respond(fake_space)
        ctrl.getSpaces();
        $httpBackend.flush();
        expect(ctrl.spaces.length).toBe(1);
      });

      it('should create a new space', function(fake_space2){
        $httpBackend.expectPOST('http://localhost:3000/api/spaces', fake_space2).respond({fake_space2})
        ctrl.create(fake_space2);
        $httpBackend.flush();
        expect(ctrl.spaces.length).toBe(1);
      });

      it('should show a space', function(fake_space) {
        $httpBackend.expectGET('http://localhost:3000/api/spaces/' + fake_space.id).respond(fake_space)
        spyOn(location, 'path');
        ctrl.showSpace(fake_space);
        $httpBackend.flush();
        expect(location.path).toHaveBeenCalledWith('/spaces/1');
      });

      it('should update a space', function(fake_space) {
        $httpBackend.expectPUT('http://localhost:3000/api/spaces/' + fake_space.id, fake_space).respond(fake_space)
        ctrl.updateSpace(fake_space);


      });

      it('should delete a space', function(fake_space) {
        ctrl.spaces = [fake_space, fake_space2]
        $httpBackend.expectDELETE('http://localhost:3000/api/spaces/' + fake_space.id).respond({})
        // console.log('hello' +fake_space);
        ctrl.deleteSpace(fake_space);
        $httpBackend.flush();
        // console.log(fake_space);
        expect(ctrl.spaces.length).toBe(1);
      });

      it('should show user an edit space page', function() {

      });

    });
});


