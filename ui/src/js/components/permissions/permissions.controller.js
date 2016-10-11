function PermissionsController($scope,
                           $state,
                           $log) {
    'ngInject';
	
	$scope.onClickYes = function(){
	  $state.go("location-weather", {latitude: 100, longitude: 200});
	};
	
	$scope.onClickNoThanks = function(){
	  $state.go("welcome");
	};    
    	
}

export {PermissionsController};