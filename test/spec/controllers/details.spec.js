'use strict';

describe('Controller: DetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('App'));
  beforeEach(module('pascalprecht.translate'));

  var vm, scope, $httpBackend, $state, employee, $rootScope, $q, deferred, mockdataService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector, _$rootScope_) {

    mockdataService = {
      getEmployeeByID: function() {}
    };

    mockdataService.getEmployeeByID = function(){
      var defer = $q.defer();
      defer.resolve('My name is Xavi');
      return defer.promise;
    };

    $q = $injector.get('$q');
    $httpBackend = $injector.get('$httpBackend');
    $state = $injector.get('$state');
    $rootScope = $injector.get('$rootScope');
    scope = $rootScope.$new();
    deferred = $q.defer();
    spyOn(mockdataService, 'getEmployeeByID')
        .and.returnValue('My name is Xavi');

    $httpBackend.when('GET', 'resources/i18n/en-US.json')
            .respond();
    $httpBackend.when('GET', 'scripts/main/main.html')
            .respond();

    scope.$apply();

  }));

  describe("Controller with OUT entry params: ", function() {
    var controller;
    beforeEach(inject(function($controller) {
      controller = $controller('DetailsCtrl', {
      });
    }));

    it('should not load if it has NO data', function () {
      expect(controller.employee).toEqual({});
      expect(controller.reportsTo).toEqual('');
    });

  });

  describe("Controller with params: ", function() {
    var controller;
    beforeEach(inject(function($controller) {
      controller = $controller('DetailsCtrl', {
        $scope: scope,
        dataService: mockdataService,
        $stateParams : {
          data:{
            FirstName: 'testName',
            ReportsTo: 1
          }
        }
      });
    }));

    it('should load employee',function () {
      expect(controller.employee).toEqual({
        FirstName: 'testName',
        ReportsTo: 1
      });
      expect(controller.reportsTo).toBe('My name is Xavi');
    });

  });


});
