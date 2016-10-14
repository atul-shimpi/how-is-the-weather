import {BaseController} from './base.controller';


function LatLongController(
  $scope,
  $state,
  $log,  
  WeatherService) {
  'ngInject';	
  
  BaseController.call(this, $scope, $state, $log, WeatherService);
     
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.getWeatherByLatLong, BaseController.setErrors);
  } else {
    BaseController.setErrors('Geolocation is not supported by this browser.');
  }   
}

export {LatLongController};