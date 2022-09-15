
sidebarToggle.addEventListener('click', () => {
  sidebarLinks.classList.toggle('active');
})

function switchPanels() {

  for (let i = 0; i < sidebarPanels.length; i++) {
    sidebarPanels[i].style.display = 'none';
  }

}

winmedia.addListener(switchPanels)

// sidebarAccordions[0].classList.toggle("active");

for (let i = 0; i < sidebarAccordions.length; i++) {
  sidebarAccordions[i].addEventListener("click", function() {

    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */

    sidebarToggle.textContent = [pageTitle,'-',this.textContent].join(' ');

    if (this.nextElementSibling.style.display === "block") {
      if (!winmedia.matches) {
        this.nextElementSibling.style.display = "none";
      }
    } else {
      if (!winmedia.matches) {
        this.nextElementSibling.style.display = "block";
      }
    }

    for (let j = 0; j < sidebarAccordions.length; j++) {
      if (j!==i) {
        if (!winmedia.matches) {
          sidebarAccordions[j].nextElementSibling.style.display = 'none';
        }
      }
    }

  });
}

canvasItems[0].style.display = 'block'

function changeCanvasItemFromSidebar(ID) {

  for (let i = 0; i < canvasItems.length; i++) {
    canvasItems[i].style.display = 'none';
  }
  // var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  canvasItems[ID].style.display = 'flex';

  sidebarLinks.classList.toggle('active');

}

function changeCanvasItemFromCanvas(CIID) {

  for (let i = 0; i < canvasItems.length; i++) {
    canvasItems[i].style.display = 'none';
  }

  var canvasItemById = document.getElementById(CIID);

  canvasItemById.style.display = 'flex';

}