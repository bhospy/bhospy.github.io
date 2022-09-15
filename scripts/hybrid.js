if (typeof hybrid !== 'undefined') {
	hybrid.classList.toggle("active")
} else {
	sidebar.classList.toggle("active")
	canvas.classList.toggle("active")
}

function changeMainView(ID) {

	sidebar.classList.toggle('active');
	canvas.classList.toggle('active');
	hybrid.classList.toggle('active');

	sidebarToggle.textContent = [pageTitle,'-',sidebarAccordions[ID].textContent].join(' ');

	if (!winmedia.matches) {
		sidebarAccordions[ID].classList.toggle("active");
		sidebarAccordions[ID].nextElementSibling.classList.toggle("active")
	}

	canvasPageItem.classList.remove("active")

	canvasMajorItems[ID].classList.toggle("active")

};