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
    })
    .state('city-and-postal-code', {
        url: '/city-postal-code',
        templateUrl: 'src/views/cityAndPostalCode/cityAndPostalCode.html',
		    controller: 'CityAndPostalCodeController'
    })  
    .state('location-weather', {
        url: '/weather?lat&long',
        templateUrl: 'src/views/weatherDashboard/weatherDashboard.html',
		    controller: 'WeatherDashboardController'
    })
        url: '/weather?region',
        templateUrl: 'src/views/weatherDashboard/weatherDashboard.html',
		    controller: 'WeatherDashboardController'
    });  	
}; 
    
routeConfig.$inject = [
  '$stateProvider',
  '$urlRouterProvider'
];    
