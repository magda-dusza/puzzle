import scoresHtml from './scores.html';
import ScoresController from './scores.controller';

/* @ngInject */
let scoresComponent = {
  template: scoresHtml,
  controllerAs: 'scores',
  controller: ScoresController

}
export default scoresComponent;
