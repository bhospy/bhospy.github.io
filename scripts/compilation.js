const sidebar = document.getElementsByClassName('sidebar')[0]
const compilation = document.getElementsByClassName('compilation')[0]
const canvas = document.getElementsByClassName('canvas')[0]

var acc = document.getElementsByClassName("sidebar-accordion");

function changeMainView(ID) {
	sidebar.style.display = 'block'
	compilation.style.display = 'none'
	canvas.style.display = 'block'

	acc[ID].classList.toggle("active");

	var panel = acc[ID].nextElementSibling;
	
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }

}