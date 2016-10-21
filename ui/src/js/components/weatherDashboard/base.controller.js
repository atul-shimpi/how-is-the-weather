function BaseController(
  $scope,
  $state,
  $log,  
  WeatherService) {
  'ngInject';  
  initialize();  
  
  var self = this;
	
  function initialize() {      
    $scope.gettingWeatherInProgress = true;  
    $scope.gotWeather = false; 
  };
    
  //get weather by lat and long
  this.getWeatherByLatLong = function(position) {   
    WeatherService.queryByLatLong(position.coords.latitude, position.coords.longitude)
     .then(
       function (weather) {//got weather         
         self.gotWeather(weather);  
       }, 
       function(error){ //some error while getting weather
         self.onGettingWeatherFailed(error);            
       }
    );
  };
  
  //get weather by city
  this.getWeatherByCity = function(city) {
    WeatherService.queryByCityName(city)
     .then(
       self.gotWeather, //got weather     
       self.onGettingWeatherFailed //failed getting weather    
    );
  };
    
  this.onGettingWeatherFailed = function(error) {    
    $scope.anyError = true;
    if (error.data) {
      $scope.errDesc =  error.data.message + ' - ' + error.config.params.q;
    } else {
      $scope.errDesc = error;
    }
    $scope.gettingWeatherInProgress = false;
    $scope.gotWeather = false;
    if(!$scope.$$phase) {
      $scope.$apply();  
    }
  };
  
  this.gotWeather = function(weather) {
    $scope.weather = weather;
    $scope.anyError = false;
    $scope.gettingWeatherInProgress = false; 
    $scope.gotWeather = true;
  };   
  
  $scope.onClickYes = function() {
    $state.go('city-and-postal-code');
  }
  
};
 
export {BaseController};