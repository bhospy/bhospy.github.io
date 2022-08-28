const sidebar = document.getElementsByClassName('sidebar')[0];
const canvas = document.getElementsByClassName('canvas')[0];

const compilation = document.getElementsByClassName('compilation');

if (compilation.length > 0) {
	sidebar.style.display = 'none'
	canvas.style.display = 'none'
};

var acc = document.getElementsByClassName("sidebar-accordion");

var itemsPage = document.querySelectorAll('.canvas-item.page');
var itemsMajor = document.querySelectorAll('.canvas-item.major');

function changeMainView(ID) {
	sidebar.style.display = 'block';
	canvas.style.display = 'block';

	compilation[0].style.display = 'none';

	acc[ID].classList.toggle("active");

	var panel = acc[ID].nextElementSibling;
	
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }

  itemsPage[0].style.display = 'none';

  itemsMajor[ID].style.display = 'block';

};