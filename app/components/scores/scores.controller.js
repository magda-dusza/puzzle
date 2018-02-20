class ScoresController {
  constructor(UserService) {
    this.UserService = UserService;
    this.userName = UserService.userName;
  }
}

/* @ngInject */
export default ScoresController;
