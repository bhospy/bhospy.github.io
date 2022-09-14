const sidebar = document.getElementsByClassName('sidebar')[0];
const canvas = document.getElementsByClassName('canvas')[0];

const compilation = document.getElementsByClassName('compilation');

const sidebarPyDemoToggle = document.getElementsByClassName('sidebar-toggle')[0];

const pagePyDemoTitle = sidebarPyDemoToggle.textContent;

var sidebarPyDemoAccordions = document.getElementsByClassName("sidebar-accordion");

var itemsPage = document.querySelectorAll('.canvas-item.page');
var itemsMajor = document.querySelectorAll('.canvas-item.major');

if (compilation.length > 0) {
	sidebar.style.display = 'none'
	canvas.style.display = 'none'
};

function changeMainView(ID) {

	sidebar.style.display = 'block';
	canvas.style.display = 'block';

	compilation[0].style.display = 'none';

	sidebarPyDemoAccordions[ID].classList.toggle("active");

	var panel = sidebarPyDemoAccordions[ID].nextElementSibling;

	sidebarPyDemoToggle.textContent = [pagePyDemoTitle,'-',sidebarPyDemoAccordions[ID].textContent].join(' ');
	
	if (panel.style.display === "block") {
		if (!winmedia.matches) {
			panel.style.display = "none";
		}
	} else {
		if (!winmedia.matches) {
			panel.style.display = "block";
		}
	}

	itemsPage[0].style.display = 'none';

	itemsMajor[ID].style.display = 'block';

};