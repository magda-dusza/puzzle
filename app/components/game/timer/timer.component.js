import timerHtml from './timer.html';

class TimerController {
  /* @ngInject */
  constructor($interval) {
    this.interval = $interval;
    this.time = '00:00';
    this.stop = $interval(this.updateTimer.bind(this), 1000);
  }

  updateTimer() {
    this.seconds++;
    let minute = Math.floor(this.seconds / 60);
    let seconds = this.seconds % 60;
    this.time = `${minute > 9 ? minute : '0' + minute}:${seconds > 9 ? seconds : '0' + seconds}`;
    if (this.seconds % 10 === 0) {
      this.calc();
    }
  }

  stop() {
    this.interval.cancel(this.stop);
  }
}

let timerComponent = {
  template: timerHtml,
  controllerAs: 'timer',
  controller: TimerController,
  bindings: {
    seconds: '=',
    calc: '&'
  }
}
/* @ngInject */
export default timerComponent;
