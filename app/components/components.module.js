import home from './home/home.module';
import game from './game/game.module';

const components = angular.module('components', [home, game])
  .name;

export default components;
