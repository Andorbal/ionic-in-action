angular.module('App', ['ionic'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('search', {
      url: '/search',
      controller: 'SearchController',
      templateUrl: 'views/search/search.html'
    });

  $urlRouterProvider.otherwise('/search');
});