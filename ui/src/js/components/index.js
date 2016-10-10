import welcomeComponent from './welcome';
import permissionsComponent from './permissions';

export default angular.module('weather.components', [
    welcomeComponent.name,
	permissionsComponent.name
]);
