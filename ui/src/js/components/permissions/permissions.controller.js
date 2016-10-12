function PermissionsController($scope,
                           $state,
                           $log) {
    'ngInject';
	
	$scope.onClickYes = function(){
	  $state.go("location-weather", {lat: 100, long: 200});
	};
	
	$scope.onClickNoThanks = function(){
	  $state.go("welcome");
	};    
    	
}

export {PermissionsController};