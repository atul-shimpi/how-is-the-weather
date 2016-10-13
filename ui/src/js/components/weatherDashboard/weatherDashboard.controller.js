function WeatherDashboardController(
  $scope,
  $state,
  $log,
  WeatherService) {
  'ngInject';
	
  initialize();
  
	function initialize() { 
    $scope.gettingWeatherInProgress = true;  
    $scope.gotWeather = false;
	  WeatherService.queryByCityName('Mumbai')
     .then(
       function (data) {
         $scope.weather = data;
         $scope.anyError = false;
         $scope.gettingWeatherInProgress = false; 
         $scope.gotWeather = true;
       }, 
       function(error){
         $scope.anyError = true;
         $scope.errDesc =  error;
         $scope.gettingWeatherInProgress = false;          
       }
    );
  }
}

export {WeatherDashboardController};