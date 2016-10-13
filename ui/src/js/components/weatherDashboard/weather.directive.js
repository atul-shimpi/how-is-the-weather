import './styles.scss';

function weatherDirective() {
  'ngInject';

  return {
    restrict: 'E',
      replace: false,
      template: `
        <div>
        
          <div class="dashboard_status">                
				    		
				      <span ng-if="gettingWeatherInProgress" class="dashboard_city">
 				        Getting weather.....<i class="fa fa-spinner fa-spin"></i>               
              </span>
              
              <span ng-if="anyError" class="dashboard_error">
 				        Opps...encountered some issues while fetching weather...                               
              </span
              
              <p></p>
              <span ng-if="anyError" class="dashboard_error_desc">
              {{errDesc}}                               
              </span
              
             
              <div ng-if="anyError">
              </div>               
            
			    </div>
          
				  <div ng-if="gotWeather" class="dashboard_wall">                
				    		
				      <span class="dashboard_city">
 				        {{weather.city}},
              </span>
              
              <span class="dashboard_date">              
				       {{weather.date | date : "medium"}} 
              </span>				    
            
			    </div>
          
                    
          <div ng-if="gotWeather" class="dashboard_wall">               
				    <span class="dashboard_weather_description">
 				        Today is {{weather.description}}
                <img src="{{weather.iconUrl}}"></img>
              </span>             
			    </div>	         
        
        <div ng-if="gotWeather" class="dashboard_wall">
        <div class="col-xs-12 col-sm-3">
            <div class="dashboard-stats__item bg-orange">
              
              <h4 class="dashboard-stats__title">
                <span>{{weather.temperature}}</span> 
                <small>Temperature</small>
              </h4>
            </div>
            
          </div>
          
          
          <div class="col-xs-12 col-sm-3">

            <div class="dashboard-stats__item bg-pink">
             
              <h3 class="dashboard-stats__title">
                <span>{{weather.humidity}}</span> 
                <small>Humidity</small>
              </h3>
            </div>            
          </div>
          
          <div class="col-xs-12 col-sm-3">
          <div class="dashboard-stats__item bg-accent">
             
              <h3 class="dashboard-stats__title">
                <span>{{weather.wind}}</span> 
                <small>Wind</small>
              </h3>
            </div>
          </div>
          
          <div class="col-xs-12 col-sm-3">

            <div class="dashboard-stats__item bg-teal">
             
              <h3 class="dashboard-stats__title">
                <span>{{weather.pressure}}</span>
                <small>Pressure</small>
              </h3>
            </div>
            
          </div>
          </div>
      `
  };

}

export {weatherDirective};
