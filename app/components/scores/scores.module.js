import angular from 'angular';
import routing from './scores.route';
import component from './scores.component';
import service from './scores.service';
import RequestService from './request.service.js';

import user from '../../shared/user/user.module'
import './scores.scss';

/* @ngInject */

let scores = angular.module('scores', [ user ])
  .component('scores', component)
  .service('ScoresService', service)
  .service('RequestService', RequestService)
  .config(routing)
  .name;

export default scores;
