import angular from 'angular';
import routing from './scores.route';
import component from './scores.component';
import service from './scores.service';

import user from '../../shared/user/user.module'
import './scores.scss';

/* @ngInject */

let scores = angular.module('scores', [ user ])
  .component('scores', component)
  .service('ScoresService', service)
  .config(routing)
  .name;

export default scores;
