if (typeof hybrid !== 'undefined') {
    sidebar.style.display = 'none'
	canvas.style.display = 'none'
}

function changeMainView(ID) {

	sidebar.style.display = 'block';
	canvas.style.display = 'block';
	hybrid.style.display = 'none';

	sidebarAccordions[ID].classList.toggle("active");

	var panel = sidebarAccordions[ID].nextElementSibling;

	sidebarToggle.textContent = [pageTitle,'-',sidebarAccordions[ID].textContent].join(' ');
	
	if (panel.style.display === "block") {
		if (!winmedia.matches) {
			panel.style.display = "none";
		}
	} else {
		if (!winmedia.matches) {
			panel.style.display = "block";
		}
	}

	canvasPageItem.style.display = 'none';

	canvasMajorItems[ID].style.display = 'block';

};