import angular from 'angular';
import routing from './home.route';
import component from './home.component';
import service from './home.service';
/* @ngInject */

let home = angular.module('home', [])
  .component('home', component)
  .service('homeService', service)
  .config(routing)
  .name;

export default home;
