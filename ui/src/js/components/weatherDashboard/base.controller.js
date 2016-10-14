function BaseController(
  $scope,
  $state,
  $log,  
  WeatherService) {
  'ngInject';  
  initialize();  
  
	function initialize() {      
    $scope.gettingWeatherInProgress = true;  
    $scope.gotWeather = false;
    $scope.favCity = 'venice';    
  };
  
  this.getWeatherByLatLong = function(position) {
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
  
  this.setErrors = function(error) {   
    alert('jo');  
    $scope.anyError = true;
    $scope.errDesc = angular.toJson(error) ? 'Application is not able to read your location.' : error;
    $scope.gettingWeatherInProgress = false;     
    $scope.$apply();     
  };
}

export {BaseController};