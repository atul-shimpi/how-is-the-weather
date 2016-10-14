function CityAndPostalCodeController(
  $scope,
  $state,
  $log) {
  'ngInject';
  
  initialize();
  
  function initialize() {
    $scope.city = null;
  };
	
  $scope.onClickGetWeather = function() {
    if ($scope.city === null || $scope.city == "") {
      alert('Please enter city name or postal code');
    } else {
    }
  };
}

export {CityAndPostalCodeController};