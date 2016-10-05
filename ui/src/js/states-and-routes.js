export default  function routeConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('welcome', {
        url: '/',
        templateUrl: 'src/views/welcome.html'
      });
  }; 
    
routeConfig.$inject = ['$stateProvider',
  '$urlRouterProvider'];    
    