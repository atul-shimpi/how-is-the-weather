function weatherDirective() {
    'ngInject';

    return {
        restrict: 'E',
        replace: false,
        template: `
            <div>
                <h4>				
				  <span style="color: RGB(0, 162, 232)">
 				    {{weather.city}},
				  </span>
				  
				 {{weather.date | date : "medium"}} 
				<h4>
            </div>
        `
    };

}

export {weatherDirective};
