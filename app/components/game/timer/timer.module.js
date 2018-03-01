import angular from 'angular';
import component from './timer.component';
/* @ngInject */

let timer = angular.module('timer', [])
  .component('timer', component)
  .name;

export default timer;
