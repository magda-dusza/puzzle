import angular from 'angular';
import 'angular-animate';
import uirouter from 'angular-ui-router';
import example from './example/example.module';
import components from './components/components.module';
import shared from './shared/shared.module';

import '../assets/styles/scss/main.scss';

angular.module('app', [
  'ngAnimate',
  uirouter,
  components,
  shared
])
.config(['$locationProvider', ($locationProvider) => {
  // $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');
}])
.config(function ($urlRouterProvider) {
  $urlRouterProvider
     .when('/', '/home')
     .when('', '/home')
     .otherwise('/home');
});
