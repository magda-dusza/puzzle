/* @ngInject */
export default function draggable($document, $log) {

  return {
    scope: {
      correct: '&',
      mistake: '&'
    },
    link: function (scope, element, attr) {
      let target = attr.target;

      var startX = 0, startY = 0, x = 0, y = 0, posX = 0, posY = 0;
      let topStart = Math.floor(Math.random() * 100);
      let leftStart = Math.floor(Math.random() * 600);
      element.css({
        top: topStart + 'px',
        left:  leftStart + 'px'
      });
      element.on('mousedown', (event) => {
        startX = 0, startY = 0, x = leftStart, y = topStart, posX = 0, posY = 0;
        event.preventDefault();

        startX = event.screenX - x;
        startY = event.screenY - y;

        posY = event.screenY - startY;
        posX = event.screenX - startX;

        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
        element.css({pointerEvents:'none'});
      });

      function mousemove(event) {
        y = event.screenY - startY;
        x = event.screenX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup(event) {
        let field = event.target;
        if (field.id == target) {
          element.css({
            position: 'inherit',
            margin: 0,
            border: 0});
          field.appendChild(element[0]);
          scope.correct();
        } else {
          scope.mistake();
          element.css({
            top: topStart + 'px',
            left:  leftStart + 'px'});
        }
        element.css({pointerEvents:'all'});
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    }
  }
}
