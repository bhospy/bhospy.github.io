var items = document.querySelectorAll('.canvas-item');

items[0].style.display = 'block'

function navAccFunc(itemId) {
	var x = document.getElementById(itemId);
	if (x.className.indexOf("w3-show") == -1) {
	  x.className += " w3-show";
	  x.previousElementSibling.className += " w3-green";
	} else { 
	  x.className = x.className.replace(" w3-show", "");
	  x.previousElementSibling.className = 
	  x.previousElementSibling.className.replace(" w3-green", "");
	}
  }

function changeCanvasItem(ID) {

	for (let i = 0; i < items.length; i++) {
	  items[i].style.display = 'none'
	}

	items[ID].style.display = 'block'
	
}