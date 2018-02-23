class GameService {
  constructor($resource, API_URL, UserService) {
    this.resource = $resource;
    this.API_URL = API_URL;
    this.UserService = UserService;
  }

  saveScore(score) {
    return this.resource(this.API_URL + '/scores').save({userName : this.UserService.userName.value, score:score}).$promise;
  }
}
/* @ngInject */
export default GameService;
