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
    .state('weather-by-lat-long', {
        url: '/weather',
        templateUrl: 'src/views/weatherDashboard/weatherDashboard.html',
		    controller: 'LatLongController'
    })
    .state('weather-by-city', {
        url: '/weather?region',
        templateUrl: 'src/views/weatherDashboard/weatherDashboard.html',
		    controller: 'WeatherDashboardController'
    });  	
}; 
    
routeConfig.$inject = [
  '$stateProvider',
  '$urlRouterProvider'
];    
