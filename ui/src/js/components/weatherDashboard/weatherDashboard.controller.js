function WeatherDashboardController($scope,
                           $state,
                           $log,
						   WeatherService) {
    'ngInject';
	
	var weatherSer = WeatherService;
	weatherSer.queryByCityName('Mumbai').then(function (data) {
		//alert(angular.toJson(data));
	});
		
	$scope.weather = {
      date: new Date(),
      city: 'Venice',
      description: 'clear sky',
      icon: 'http://openweathermap.org/img/w/10d.png'
	};
	
}

export {WeatherDashboardController};