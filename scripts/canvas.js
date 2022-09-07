// It is going to scroll to lower text when clicked on item head

var canvasItems = document.querySelectorAll('.canvas-item');

function changeCanvasItemFromCanvas(CIID) {
	for (let i = 0; i < canvasItems.length; i++) {
    canvasItems[i].style.display = 'none';
  }

  var canvasItemById = document.getElementById(CIID);

  canvasItemById.style.display = 'flex';

}