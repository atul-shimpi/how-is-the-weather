function PermissionsController($scope,
                           $state,
                           $log) {
    'ngInject';
	
	$scope.onClickNoThanks = function(){
	  $state.go("welcome");
	}	
}

export {PermissionsController};