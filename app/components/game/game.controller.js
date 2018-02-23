class GameController {
  constructor($interval, UserService, $state, $scope) {
    this.hello = 'Kotel';
    this.timer = '00:00'
    this.seconds = 0;
    this.state = $state;
    this.$scope = $scope;
    this.interval = $interval;
    this.UserService = UserService;
    this.userName = UserService.userName.value || 'XXX';
    this.stop = $interval(this.updateTimer.bind(this), 1000);
    this.score = 1500;
    this.elementsFit = 0;
    this.mistakes = 0;
    this.confirmBox = {visible : false};
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
      this.confirmBox.visible = true;
      let finalScore = this.score - (this.mistakes * 100) - (Math.floor(this.seconds / 10) * 100);
      this.$scope.$apply();
      console.log(finalScore);
      this.interval.cancel(this.stop);
    }
  }

  mistake() {
    this.mistakes++;
  }

  submit() {
    //save result
    this.state.go('scores');
  }

  reset() {
    this.state.go(this.state.current, {}, {reload: true});
  }
}

/* @ngInject */
export default GameController;
