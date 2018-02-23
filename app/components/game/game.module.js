import angular from 'angular';
import routing from './game.route';
import component from './game.component';
import service from './game.service';
import draggable from './draggable.js';
/* @ngInject */

import './game.scss';
import user from '../../shared/user/user.module';

let game = angular.module('game', [ user ])
  .component('game', component)
  .service('GameService', service)
  .directive('ciDraggable', draggable)
  .config(routing)
  .name;

export default game;
