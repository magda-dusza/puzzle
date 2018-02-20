import angular from 'angular';
import service from './user.service';
/* @ngInject */

let user = angular.module('user', [])
  .service('UserService', service)
  .name;

export default user;
