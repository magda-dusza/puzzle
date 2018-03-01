/* @ngInject */
export default function draggable($document, $log, $timeout) {

  return {
    scope: {
      target: '<',
      correct: '&',
      mistake: '&'
    },
    link: function (scope, element, attr) {

      var startX = 0, startY = 0, x = 0, y = 0;

      let topToParent = Math.floor(Math.random() * element.parent()[0].offsetHeight) - 120;
      topToParent = topToParent > 0 ? topToParent : 0;


      let leftToParent = Math.floor(Math.random() * element.parent()[0].offsetWidth - 120);
      leftToParent = leftToParent > 0 ? leftToParent : 0;

      element.css({
        top: topToParent + 'px',
        left:  leftToParent + 'px'
      });

      element.on('mousedown', (event) => {
        if (isElementMatched()) { return; }

        startX = 0, startY = 0, x = leftToParent, y = topToParent;
        event.preventDefault();

        startX = event.screenX - x;
        startY = event.screenY - y;

        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
        element.css({pointerEvents:'none'});
      });

      function isElementMatched() {
        return element.parent()[0].id === scope.target;
      }

      function mousemove(event) {
        y = event.screenY - startY;
        x = event.screenX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup(event) {
        let target = event.target;

        if (target.id === scope.target) {
          addElementToBoard(target);
        } else {
          moveBack(target);
        }

        clean();
      }

      function addElementToBoard(target) {
        element.css({
          position: 'inherit',
          margin: 0,
          border: 0});
        target.appendChild(element[0]);

        scope.correct();
      }

      function moveBack(target) {
        element.css({
          top: topToParent + 'px',
          left:  leftToParent + 'px'});

        blink(target);

        scope.mistake();
      }

      function blink(target) {
        let targetElement = angular.element(target);
        if (targetElement.attr('class').indexOf('board__row--element') > -1) {
          targetElement.addClass('blink');
          $timeout(function() { targetElement.removeClass('blink') }, 1000);
        }
      }

      function clean() {
        element.css({pointerEvents:'all'});

        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    }
  }
}
