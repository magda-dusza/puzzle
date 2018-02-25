import angular from 'angular';
import component from './confirmation-box.component';

import './confirmation-box.scss';

/* @ngInject */

let confirmationBox = angular.module('confirmationBox', [])
  .component('confirmationBox', component)
  .name;

export default confirmationBox;
