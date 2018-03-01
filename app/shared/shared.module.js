import user from './user/user.module';
import scoresNav from './nav/scores-nav/scores-nav.module';

const shared = angular.module('shared', [user, scoresNav])
  .name;

export default shared;
