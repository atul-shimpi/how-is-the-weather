export default  function routeConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');  
	
  $stateProvider
    .state('welcome', {
        url: '/',
        templateUrl: 'src/views/welcome/welcome.html',
		controller: 'WelcomeController'
    })
	.state('permissions', {
        url: '/permissions',
        templateUrl: 'src/views/permissions/permissions.html',
		controller: 'PermissionsController'
    });   
}; 
    
routeConfig.$inject = [
  '$stateProvider',
  '$urlRouterProvider'
];    
