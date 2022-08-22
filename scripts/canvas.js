var items = document.querySelectorAll('.canvas-item');

items[0].style.display = 'block'

function changeCanvasItem(ID) {

  for (let i = 0; i < items.length; i++) {
    items[i].style.display = 'none'
  }

  // var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

  items[ID].style.display = 'flex';

  sidebarLinks.classList.toggle('active')
  
}