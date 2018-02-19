import homeHtml from './home.html';
import HomeController from './home.controller';

/* @ngInject */
let homeComponent = {
  template: homeHtml,
  controllerAs: 'home',
  controller: HomeController

}
export default homeComponent;
