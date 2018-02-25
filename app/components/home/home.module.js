import angular from 'angular';
import routing from './home.route';
import component from './home.component';

import user from '../../shared/user/user.module'

import './home.scss';

/* @ngInject */

let home = angular.module('home', [ user ])
  .component('home', component)
  .config(routing)
  .name;

export default home;
