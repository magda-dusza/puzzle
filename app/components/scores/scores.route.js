function scoresRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('scores', {
      url: '/scores',
      component: 'scores'
    })
}
/* @ngInject */
export default scoresRoutes;
