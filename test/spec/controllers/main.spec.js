'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('App'));
  beforeEach(module('pascalprecht.translate'));

  var vm, scope, $httpBackend, $state;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();

    $httpBackend = $injector.get('$httpBackend');
    $state = $injector.get('$state');

    $httpBackend.when('GET', 'resources/i18n/en-US.json')
            .respond();

    vm = $controller('MainCtrl', {
      $scope: scope
    });

  }));


      it('should initialize employees', function () {
        expect(vm.employees).toBeDefined();
      });

      it('should change sort and reverse', function() {

        vm.changeSort('LastName');

        expect(vm.sortType).toBe('LastName');
        expect(vm.sortReverse).toBeTruthy();
      });

      it('should go to details page with params', function() {
        spyOn($state, 'go');

        var employee = {
          FirstName:'testname'
        };

        vm.getDetails(employee);

        expect($state.go).toHaveBeenCalledWith('details',{data:employee});
      });

});
