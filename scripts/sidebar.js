sidebarToggle.addEventListener('click', () => {
  sidebarLinks.classList.toggle('active');
})

function switchPanels() {

  for (let i = 0; i < sidebarAccordions.length; i++) {
    sidebarAccordions[i].classList.remove("active");
    sidebarPanels[i].classList.remove("active");
  }

}

winmedia.addListener(switchPanels)

for (let i = 0; i < sidebarAccordions.length; i++) {
  sidebarAccordions[i].addEventListener("click", function() {

    sidebarToggle.textContent = [pageTitle,'-',this.textContent].join(' ');

    if (!winmedia.matches) {

      for (let j = 0; j < sidebarAccordions.length; j++) {
        if (j===i) {
          sidebarAccordions[j].classList.toggle("active");
          sidebarAccordions[j].nextElementSibling.classList.toggle("active");
        } else {
          sidebarAccordions[j].classList.remove("active");
          sidebarAccordions[j].nextElementSibling.classList.remove("active");
        }
      }
    }

  });
}

function changeCanvasItemFromSidebar(ID) {

  for (let i = 0; i < canvasItems.length; i++) {
    canvasItems[i].classList.remove('active');
  }

  canvasItems[ID].classList.toggle('active')

  if (winmedia.matches) {
    sidebarLinks.classList.toggle('active');
  }

}