import angular from 'angular';
import routing from './level.route';
import component from './level.component';

import user from '../../shared/user/user.module'

import './level.scss';

/* @ngInject */

let level = angular.module('level', [ user ])
  .component('level', component)
  .config(routing)
  .name;

export default level;
