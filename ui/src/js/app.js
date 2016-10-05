import directives from './directives';
import statesAndRoutes from './states-and-routes'

var app = angular.module('weatherApp', [
  'ui.router',
  directives.name
]); 

app.config(statesAndRoutes);


export default app;