import angular from 'angular';
import 'angular-resource';
import 'angular-animate';
import uirouter from 'angular-ui-router';
import components from './components/components.module';
import shared from './shared/shared.module';

import constants from 'constants';

import '../assets/styles/scss/main.scss';

angular.module('app', [
  'ngAnimate',
  'ngResource',
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
})
.run(['$transitions', '$state', 'UserService', ($transitions, $state, UserService) => {
  $transitions.onSuccess({to:'*'}, function () {
    if (UserService.userName.value === '') {
      $state.go('home')
    }
  });
}])
.constant('API_URL', 'http://localhost:3000');
