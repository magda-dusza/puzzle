function homeRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      component: 'home'
    })
}
/* @ngInject */
export default homeRoutes;
