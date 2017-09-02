'use strict';

/**
 * @ngdoc overview
 * @name App
 * @description
 * # App
 *
 * Main module of the application.
 */
angular
  .module('App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'pascalprecht.translate',
    'ui.bootstrap'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $translateProvider) {

    //default language
    $translateProvider.useStaticFilesLoader({
      prefix: 'resources/i18n/',
      suffix: '.json'
    });

    //$translateProvider.useUrlLoader('resources/i18n/en-US.json');
    $translateProvider.preferredLanguage('en-US');
    //default view
    $urlRouterProvider.otherwise('/');

    //state declaration
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'scripts/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .state('list', {
        url: '/list/:category',
        templateUrl: 'scripts/list/list.html',
        controller: 'ListCtrl',
        controllerAs: 'vm'
      })
      .state('details', {
        url: '/details/:id',
        templateUrl: 'scripts/details/details.html',
        controller: 'DetailsCtrl',
        controllerAs: 'vm',
        params: {
          data: null
        }
      });
  })
  .controller('mainCtrl', function($translate){

    //Change language
    this.changeLang = function(lang){
      $translate.use(lang);
    };

  });
