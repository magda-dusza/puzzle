class GameController {
  constructor($scope, UserService, GameService) {
    this.$scope = $scope;
    this.UserService = UserService;
    this.GameService = GameService;

    this.seconds = GameService.seconds;
    this.mistakes = GameService.mistakes;
    this.positions = GameService.positions;
    this.finalScore = GameService.finalScore;

    this.userName = UserService.userName.value;
    this.kotel = UserService.pictureName.kotel;

    this.elementsFit = 0;
    this.confirmBox = {visible : false};
    this.gameOver = false;
  }

  $onInit() {
    this.GameService.initGame();
  }

  correct() {
    this.elementsFit++;
    if (this.elementsFit === 9) {
      this.gameOver = true;
      this.calcScore();
      this.confirmBox.visible = true;
      this.$scope.$apply();
    }
  }

  mistake() {
    this.mistakes.value++;
    this.calcScore();
  }

  submit() {
    this.GameService.saveScore(this.UserService.userName, this.finalScore.result);
  }

  reset() {
    this.GameService.reset();
  }

  calcScore() {
    this.GameService.calcScore();
  }

  getTarget(pos) {
    return `t${this.positions[pos]}`;
  }

  getElement(pos) {
    return `element${this.positions[pos]}`;
  }
}

/* @ngInject */
export default GameController;
