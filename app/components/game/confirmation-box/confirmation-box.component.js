import confirmationBoxHtml from './confirmation-box.html';
import ConfirmationBoxController from './confirmation-box.controller';

/* @ngInject */
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
