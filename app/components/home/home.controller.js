class HomeController {
  constructor(UserService) {
    this.userName = UserService.userName;
  }

  disable() {
    return this.userName.value === '';
  }
}

/* @ngInject */
export default HomeController;
