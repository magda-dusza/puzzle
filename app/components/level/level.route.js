function levelRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('level', {
      url: '/level',
      component: 'level'
    })
}
/* @ngInject */
export default levelRoutes;
