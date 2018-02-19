import angular from 'angular';
import routing from './game.route';
import component from './game.component';
import service from './game.service';
/* @ngInject */

let game = angular.module('game', [])
  .component('game', component)
  .service('gameService', service)
  .config(routing)
  .name;

export default game;