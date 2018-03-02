class GameService {
  constructor(API_URL, $resource, $state) {
    this.API_URL = API_URL;
    this.SCORE = 1500;

    this.resource = $resource;
    this.state = $state;

    this.seconds = {value: 8};
    this.mistakes = {value: 0};
    this.finalScore = {result : this.SCORE};
    this.positions = ['11', '12', '13', '21', '22', '23', '31', '32', '33'];
  }

  initGame() {
    this.finalScore.result = this.SCORE;
    this.seconds.value = 0;
    this.mistakes.value = 0;
  }

  calcScore() {
    let timePoints = (Math.floor(this.seconds.value / 10) * 100);
    this.finalScore.result = this.SCORE - (this.mistakes.value * 100) - timePoints;
  }

  saveScore(userName, score) {
    return this.resource(this.API_URL + '/scores')
      .save({userName : userName.value, score:score}, ()=>{
        this.state.go('scores');
      });
  }

  reset() {
    this.state.go(this.state.current, {}, {reload: true});
  }
}
/* @ngInject */
export default GameService;
