function WeatherDashboardController($scope,
                           $state,
                           $log) {
    'ngInject';
	
	$scope.weather = {
      date: new Date(),
      city: 'Venice'
	};
	
}

export {WeatherDashboardController};