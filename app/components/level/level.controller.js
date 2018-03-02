class LevelController {
  constructor(UserService) {
    this.pictureName = UserService.pictureName;
    this.BASE_PATH = '../../../assets/img';
    this.pictures = [
      {id:0, src:`${this.BASE_PATH}/kotel.jpg`, title: 'Pancake', name: 'kotel1'},
      {id:1, src:`${this.BASE_PATH}/kot2.jpg`, title: 'Grumpy Cat', name: 'kotel2'},
      {id:2, src:`${this.BASE_PATH}/kot3.jpg`, title: 'Hello Kitty', name: 'kotel3'},
    ];
    this.active = [true, false, false];
  }
  makeActive(index) {
    let i = 0, length = this.active.length;
    for (i = 0; i < length; i++) {
      this.active[i] = false;
    }
    this.active[index] = true;
    this.pictureName.kotel = this.pictures[index].name;
  }

  isActive(index) {
    return { 'active' : this.active[index] };
  }
}

/* @ngInject */
export default LevelController;
