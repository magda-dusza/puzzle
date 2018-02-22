/* @ngInject */
export default function draggable($document, $log) {

  return function drag(scope, element, attr) {
    let aim = attr.aim;

    var startX = 0, startY = 0, x = 0, y = 0, posX=0, posY=0;
    element.css({
      position: 'absolute',
      cursor: 'pointer'
    });
    element.on('mousedown', (event) => {
      // Prevent default dragging of selected content
      startX = 0, startY = 0, x = 0, y = 0, posX=0, posY=0;
      event.preventDefault();
      startX = event.screenX - x;
      startY = event.screenY - y;
      posY = event.screenY - startY;
      posX = event.screenX - startX;
      $document.on('mousemove', mousemove);
      $document.on('mouseup', mouseup);
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
      element.css({pointerEvents:'none'});
      let field = document.elementFromPoint(event.pageX, event.pageY);
      if (field.id == aim) {
        element.css({
          position: 'inherit',
          margin: 0,
          border: 0});
        field.appendChild(element[0]);
      } else {
        element.css({
          top: posX + 'px',
          left:  posY + 'px'});
      }
      element.css({pointerEvents:'all'});
      $document.off('mousemove', mousemove);
      $document.off('mouseup', mouseup);
    }
  };
}
