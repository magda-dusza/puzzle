import gameHtml from './game.html';
import GameController from './game.controller';

/* @ngInject */
let gameComponent = {
  template: gameHtml,
  controllerAs: 'game',
  controller: GameController

}
export default gameComponent;
