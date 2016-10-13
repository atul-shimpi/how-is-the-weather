function WeatherDashboardController($scope,
                           $state,
                           $log,
						   WeatherService) {
    'ngInject';
	
	
	WeatherService.queryByCityName('Mumbai').then(function (data) {
		$scope.weather = {
      date: new Date(),
      city: data.name,
      description: data.weather[0].description,
      iconUrl: 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png',
      temperature: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      wind: data.wind.speed
	};
	});
		
	
	
}

export {WeatherDashboardController};