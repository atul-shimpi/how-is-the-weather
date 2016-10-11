import {WeatherDashboardController} from './weatherDashboard.controller';
import {weatherDirective} from './weather.directive';

export default angular.module('weatherDashboard', [])
    .controller('WeatherDashboardController', WeatherDashboardController)
	.directive('weather', weatherDirective)
;