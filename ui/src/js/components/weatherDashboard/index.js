import {LatLongController} from './latLong.controller';
import {weatherDirective} from './weather.directive';

export default angular.module('weatherDashboard', [])
  .controller('LatLongController', LatLongController)
	.directive('weather', weatherDirective)
;