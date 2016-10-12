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
 				        {{weather.description}}
                <img src="{{weather.icon}}"></img>
              </span> 
            
			    </div>	

          <div class="dashboard_wall">
                
				    <h4>				
				      <span style="color: RGB(0, 162, 232)">
 				        {{weather.city}},
				      </span>				  
				     {{weather.date | date : "medium"}} 
				    <h4>
            
			    </div>          
        </div>
      `
  };

}

export {weatherDirective};
