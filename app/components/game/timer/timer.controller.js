class TimerController {
  /* @ngInject */
  constructor($interval) {
    this.interval = $interval;
    this.time = '00:00';
    this.stop = null;
  }

  $onInit() {
    this.stop = this.interval(this.updateTimer.bind(this), 1000);
  }

  updateTimer() {
    if (this.gameOver) {
      this.stopTimer();
    }

    this.seconds.value++;
    let minute = Math.floor(this.seconds.value / 60);
    let seconds = this.seconds.value % 60;
    this.time = `${minute > 9 ? minute : '0' + minute}:${seconds > 9 ? seconds : '0' + seconds}`;

    if (this.seconds.value % 10 === 0) {
      this.calc();
    }
  }

  stopTimer() {
    this.interval.cancel(this.stop);
  }

  $onDestroy() {
    this.stopTimer();
  }
}

export default TimerController;
