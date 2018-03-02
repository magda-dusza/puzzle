import angular from 'angular';
import component from './timer.component';
/* @ngInject */

import './timer.scss';

let timer = angular.module('timer', [])
  .component('timer', component)
  .name;

export default timer;
