class HomeController {
  constructor(UserService) {
    this.userName = UserService.userName;
  }
}

/* @ngInject */
export default HomeController;
