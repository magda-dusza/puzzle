class GameController {
  constructor(UserService, $state, $scope, GameService) {
    this.state = $state;
    this.$scope = $scope;
    this.UserService = UserService;
    this.GameService = GameService;
    this.seconds = 0;
    this.userName = UserService.userName.value;
    this.score = 1500;
    this.elementsFit = 0;
    this.mistakes = 0;
    this.confirmBox = {visible : false};
    this.finalScore = {result : 1500};

    this.kotel = 'kotel1';
    this.positions = ['11', '12', '13', '21', '22', '23', '31', '32', '33'];
  }

  correct() {
    this.elementsFit++;
    if (this.elementsFit === 9) {
      this.calcScore();
      this.confirmBox.visible = true;
      this.$scope.$apply();
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

  getTarget(pos) {
    let a = `t${this.positions[pos]}`;
    return a;
  }

  getElement(pos) {
    return `element${this.positions[pos]}`;
  }
}

/* @ngInject */
export default GameController;
