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
    
    /*if (1) {
      navigator.geolocation.getCurrentPosition(getWeatherByLatLong, setErrors);
    } else {
      setErrors('Geolocation is not supported by this browser.');
    } */
  };
  
  /*function getWeatherByLatLong(position) {
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
  };*/
}

export {BaseController};