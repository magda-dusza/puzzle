import angular from 'angular';
import component from './scores-nav.component';
/* @ngInject */

import './scores-nav.scss';

let scoresNav = angular.module('scoresNav', [])
  .component('scoresNav', component)
  .name;

export default scoresNav;
