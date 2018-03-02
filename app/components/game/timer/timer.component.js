import timerHtml from './timer.html';
import TimerController from './timer.controller';

let timerComponent = {
  template: timerHtml,
  controllerAs: 'timer',
  controller: TimerController,
  bindings: {
    seconds: '=',
    calc: '&',
    gameOver: '<'
  }
}
/* @ngInject */
export default timerComponent;
