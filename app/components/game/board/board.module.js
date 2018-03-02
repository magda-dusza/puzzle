import boardHtml from './board.html';

import './board.scss';

export default angular.module('board', [])
  .component('board', {template: boardHtml})
  .name;
