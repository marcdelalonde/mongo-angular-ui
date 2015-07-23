'use strict';

angular.module('App', ['ui.router', 'ngMaterial', 'app.filters', 'app.services', 'templates'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    // For any unmatched url, redirect to homepage
    $urlRouterProvider.otherwise('/');

    // Homepage
    $stateProvider.state('homepage', {
      url: '/'
    });

    $stateProvider.state('database', {
      url: '/:database',
      templateUrl: 'database.html',
      controller: 'DatabaseCtrl'
    });

    $stateProvider.state('database.collection', {
      url: '/:collection',
      parent: 'database',
      templateUrl: 'collection.html',
      controller: 'CollectionCtrl'
    });

  }])
  .controller('AppCtrl', ['$rootScope', '$scope', '$mdSidenav', '$state', 'Databases', function($rootScope, $scope, $mdSidenav, $state, Databases){
    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };

    $rootScope.server = 'localhost';
    $rootScope.database = null;
    $rootScope.collection = null;
    $scope.databases = [];

    Databases.get().$promise.then(function(databases){
      $scope.databases = databases.databases;
    });

    $rootScope.go = function(state, params) {
      $state.go(state, params);
    };
   
  }])
  .controller('DatabaseCtrl', ['$rootScope', '$scope', 'Collections', '$stateParams', function($rootScope, $scope, Collections, $stateParams){
    
    $rootScope.database = $stateParams.database;
    $scope.collections = [];

    Collections.get({database: $rootScope.database}).$promise.then(function(collections){
      $scope.collections = collections.collections;
      $rootScope.collection = $scope.collections[0] ? $scope.collections[0].name : null;
      if ($rootScope.collection) {
        $rootScope.go('database.collection', {collection: $rootScope.collection});
      }
    });
      
  }])
  .controller('CollectionCtrl', ['$rootScope', '$scope', 'Model', '$stateParams', '$mdDialog', function($rootScope, $scope, Model, $stateParams, $mdDialog){
    
    $rootScope.collection = $stateParams.collection;
    $scope.data = [];

    Model.get({database: $rootScope.database, collection: $rootScope.collection}).$promise.then(function(data){
      $scope.data = data.data;
    });

    $scope.showConfirm = function(ev, id) {
      var confirm = $mdDialog.confirm()
        .title('Are you sure you want to delete this entry?')
        .content('You will not be able to cancel it.')
        .ok('Delete')
        .cancel('Cancel')
        .targetEvent(ev);

      $mdDialog.show(confirm).then(function() {
        console.log('Delete the object ' + id);
      });
    };
      
  }]);