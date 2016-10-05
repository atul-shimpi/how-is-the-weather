var app = angular.module('weatherApp', [
  'ui.router',
]); 

/*
app.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/views/welcome.html'
      });
    }]);
    */
import statesAndRoutes from './states-and-routes'
app.config(statesAndRoutes);

export default app;