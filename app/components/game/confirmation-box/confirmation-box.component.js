import confirmationBoxHtml from './confirmation-box.html';

/* @ngInject */
class ConfirmationBoxController {
  constructor() {}

  submitScore() {
    this.submit();
  }

  resetGame() {
    this.reset();
  }
}

let confirmationBoxComponent = {
  template: confirmationBoxHtml,
  controllerAs: 'dialog',
  controller: ConfirmationBoxController,
  bindings: {
    display: '<',
    score: '<',
    submit: '&',
    reset: '&'
  }
}
export default confirmationBoxComponent;
