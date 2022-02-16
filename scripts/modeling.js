var items = document.querySelectorAll('.canvas-item');

for (let i = 0; i < items.length; i++) {
  items[i].style.display = 'none'
}

items[0].style.display = 'block'

function changeCanvasItem(ID) {

	for (let i = 0; i < items.length; i++) {
	  items[i].style.display = 'none'
	}

	items[ID].style.display = 'block'
	
}