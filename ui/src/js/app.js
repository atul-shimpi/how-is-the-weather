import styles from "../css/app.scss";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import directives from './directives';
import statesAndRoutes from './states-and-routes'

var app = angular.module('weatherApp', [
  'ui.router',
  directives.name
]); 

app.config(statesAndRoutes);


export default app;