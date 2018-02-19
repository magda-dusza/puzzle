import angular from 'angular';
import routing from './game.route';
import component from './game.component';
import service from './game.service';
import draggable from './draggable.js';
/* @ngInject */

import './game.scss';

let game = angular.module('game', [])
  .component('game', component)
  .service('gameService', service)
  .directive('ciDraggable', draggable)
  .config(routing)
  .name;

export default game;
