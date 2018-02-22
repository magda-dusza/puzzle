class GameController {
  constructor($interval, UserService, $state) {
    this.hello = 'Kotel';
    this.timer = '00:00'
    this.seconds = 0;
    this.state = $state;
    this.userName = UserService.userName.value || 'XXX';
    $interval(this.updateTimer.bind(this), 1000);
    this.score = 1500;
    this.elementsFit = 0;
    this.mistakes = 0;
  }

  updateTimer() {
    this.seconds++;
    let minute = Math.floor(this.seconds / 60);
    let seconds = this.seconds % 60;
    this.timer = `${minute > 9 ? minute : '0' + minute}:${seconds > 9 ? seconds : '0' + seconds}`;

  }

  correct() {
    this.elementsFit++;
    if (this.elementsFit === 9) {
      let finalScore = this.score - this.mistakes * 100 - Math.floor(this.seconds / 10) * 100;
      console.log(finalScore);
      this.state.go('scores');
    }
  }

  mistake() {
    this.mistakes++;
  }
}

/* @ngInject */
export default GameController;
