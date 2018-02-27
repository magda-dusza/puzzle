class GameController {
  constructor($interval, UserService, $state, $scope, GameService) {
    this.state = $state;
    this.$scope = $scope;
    this.interval = $interval;
    this.UserService = UserService;
    this.GameService = GameService;

    this.timer = '00:00'
    this.seconds = 0;
    this.userName = UserService.userName.value || 'XXX';
    this.stop = $interval(this.updateTimer.bind(this), 1000);
    this.score = 1500;
    this.elementsFit = 0;
    this.mistakes = 0;
    this.confirmBox = {visible : false};
    this.finalScore = {result : 1500};

    this.targetIds = ['t11', 't12', 't13', 't21', 't22', 't23', 't31', 't32', 't33'];
    this.kotel = 'kotel1';
    // this.targetIds = ['11', 't12', 't13', 't21', 't22', 't23', 't31', 't32', 't33'];
  }

  updateTimer() {
    this.seconds++;
    let minute = Math.floor(this.seconds / 60);
    let seconds = this.seconds % 60;
    this.timer = `${minute > 9 ? minute : '0' + minute}:${seconds > 9 ? seconds : '0' + seconds}`;
    if (this.seconds % 10 === 0) {
      this.calcScore();
    }
  }

  correct() {
    this.elementsFit++;
    if (this.elementsFit === 9) {
      this.calcScore();
      this.confirmBox.visible = true;
      this.$scope.$apply();
      this.interval.cancel(this.stop);
    }
  }

  mistake() {
    this.mistakes++;
    this.calcScore();
  }

  submit() {
    this.GameService.saveScore(this.finalScore.result).then(()=>{
      this.state.go('scores');
    });
  }

  reset() {
    this.state.go(this.state.current, {}, {reload: true});
  }

  calcScore() {
    let timePoints = (Math.floor(this.seconds / 10) * 100);
    this.finalScore.result = this.score - (this.mistakes * 100) - timePoints;
  }
}

/* @ngInject */
export default GameController;
