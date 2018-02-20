import user from './user/user.module';

const shared = angular.module('shared', [ user ])
  .name;

export default shared;
