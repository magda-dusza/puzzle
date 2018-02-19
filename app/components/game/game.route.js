function gameRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('game', {
      url: '/game',
      component: 'game'
    })
}
/* @ngInject */
export default gameRoutes;
