import home from './home/home.module';
import game from './game/game.module';
import scores from './scores/scores.module';

const components = angular.module('components', [home, game, scores])
  .name;

export default components;
