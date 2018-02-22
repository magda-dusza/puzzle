class GameController {
  constructor($interval, UserService) {
    this.hello = 'Kotel';
    this.timer = '00:00'
    this.seconds = 0;
    this.userName = UserService.userName.value || 'XXX';
    $interval(this.updateTimer.bind(this), 1000);
  }

  updateTimer() {
    this.seconds++;
    let minute = Math.floor(this.seconds / 60);
    let seconds = this.seconds % 60;
    this.timer = `${minute > 9 ? minute : '0' + minute}:${seconds > 9 ? seconds : '0' + seconds}`;

  }
}

/* @ngInject */
export default GameController;
