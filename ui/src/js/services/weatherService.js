function WeatherService($resource) {
    'ngInject';
	//http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=9a1762d699d1fd388877654865fde34f
    var resource, baseUrl, defaults, actions;

    baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
    defaults = { appid: '9a1762d699d1fd388877654865fde34f' };
    actions = {};

    resource = $resource(baseUrl, defaults, actions);

    resource.queryByCityName = function (cityName) {
        return this.get({q: cityName}, function (weather) {
           //console.log("himu : " + angular.toJson(weather));

            return weather;
        }).$promise;
    };
	
	return resource;
}

export {WeatherService};