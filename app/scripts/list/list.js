'use strict';

/**
 * @ngdoc function
 * @name App.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the App
 */
angular.module('App')
  .controller('ListCtrl', function ($scope, MainServices, $state, dataService) {

    var vm = this;

    //MS CALL category

    this.listArray = [{
      name:'Sample name',
      description:'Just a description',
      starts:2,
      reviews:3,
      tag:'Sample Tag',
      isOpened:true,
      address:'just an address'
    },
    {
      name:'Sample name',
      description:'Just a description',
      starts:2,
      reviews:3,
      tag:'Sample Tag',
      isOpened:false,
      address:'just an address'
    },
    {
      name:'Sample name',
      description:'Just a description',
      starts:2,
      reviews:3,
      tag:'Sample Tag',
      isOpened:true,
      address:'just an address'
    },
    {
      name:'Sample name',
      description:'Just a description',
      starts:2,
      reviews:3,
      tag:'Sample Tag',
      isOpened:false,
      address:'just an address'
    }]
  });
