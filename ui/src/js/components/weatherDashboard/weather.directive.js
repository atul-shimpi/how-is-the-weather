import './styles.scss';

function weatherDirective() {
  'ngInject';

  return {
    restrict: 'E',
      replace: false,
      template: `
        <div>
				  <div class="dashboard_wall">                
				    		
				      <span class="dashboard_city">
 				        {{weather.city}},
              </span>
              
              <span class="dashboard_date">              
				       {{weather.date | date : "medium"}} 
              </span>				    
            
			    </div>
          
          <div class="dashboard_wall">
                
				    <span class="dashboard_weather_description">
 				        Today is {{weather.description}}
                <img src="{{weather.iconUrl}}"></img>
              </span> 
            
			    </div>	         
        
        <div class="dashboard_wall">
        <div class="col-xs-12 col-sm-3">
            <div class="dashboard-stats__item bg-orange">
              <i class="fa fa-comments"></i>
              <h4 class="dashboard-stats__title">
                <span>{{weather.temperature}}</span> 
                <small>Temperature</small>
              </h4>
            </div>
            
          </div>
          
          
          <div class="col-xs-12 col-sm-3">

            <div class="dashboard-stats__item bg-pink">
              <i class="fa fa-globe"></i>
              <h3 class="dashboard-stats__title">
                <span>{{weather.humidity}}</span> 
                <small>Humidity</small>
              </h3>
            </div>            
          </div>
          
          <div class="col-xs-12 col-sm-3">
          <div class="dashboard-stats__item bg-accent">
              <i class="fa fa-pie-chart"></i>
              <h3 class="dashboard-stats__title">
                <span>{{weather.wind}}</span> 
                <small>Wind</small>
              </h3>
            </div>
          </div>
          
          <div class="col-xs-12 col-sm-3">

            <div class="dashboard-stats__item bg-teal">
              <i class="fa fa-eur"></i>
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
