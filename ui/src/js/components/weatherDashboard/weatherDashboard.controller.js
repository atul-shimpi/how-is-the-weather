import {BaseController} from './baseController';


function WeatherDashboardController(
  $scope,
  $state,
  $log,  
  WeatherService) {
  'ngInject';	
  
  
  initialize();  
	function initialize() {   
  //var d = new baseController();
    BaseController.call(this, $scope, $state, $log, WeatherService);  
    //$scope.gettingWeatherInProgress = true;  
    //$scope.gotWeather = false;
   
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeatherByLatLong, setErrors);
    } else {
      setErrors('Geolocation is not supported by this browser.');
    } 
  };
  
  function getWeatherByLatLong(position) {
    WeatherService.queryByLatLong(position.coords.latitude, position.coords.longitude)
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
  };
  
  function setErrors(error) {     
    $scope.anyError = true;
    $scope.errDesc = angular.toJson(error) ? 'Application is not able to read your location.' : error;
    $scope.gettingWeatherInProgress = false;     
    $scope.$apply();     
  };
}

export {WeatherDashboardController};