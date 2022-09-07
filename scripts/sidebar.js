const sidebarPyDemo = document.getElementsByClassName('sidebar pydemo')

const sidebarToggle = document.getElementsByClassName('sidebar-toggle')[0]
const sidebarLinks = document.getElementsByClassName('sidebar-links')[0]

sidebarToggle.addEventListener('click', () => {
  sidebarLinks.classList.toggle('active')
})

var sidebarAccordions = document.getElementsByClassName("sidebar-accordion");

// sidebarAccordions[0].classList.toggle("active");

for (let i = 0; i < sidebarAccordions.length; i++) {
  sidebarAccordions[i].addEventListener("click", function() {

    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */

    if (this.nextElementSibling.style.display === "block") {
      if (sidebarPyDemo.length === 0) {
        this.style.backgroundColor = "#eee";
      }
      this.nextElementSibling.style.display = "none";
    } else {
      if (sidebarPyDemo.length === 0) {
        this.style.backgroundColor = "#ccc";
      }
      this.nextElementSibling.style.display = "block";
    }

    for (let j = 0; j < sidebarAccordions.length; j++) {
      if (j!==i) {
        if (sidebarPyDemo.length === 0) {
          sidebarAccordions[j].style.backgroundColor = "#eee";
        }
        sidebarAccordions[j].nextElementSibling.style.display = 'none';
      }
    }

  });
}

var canvasItems = document.querySelectorAll('.canvas-item');

canvasItems[0].style.display = 'block'

function changeCanvasItem(ID) {

  for (let i = 0; i < canvasItems.length; i++) {
    canvasItems[i].style.display = 'none';
  }

  // var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

  canvasItems[ID].style.display = 'flex';

  sidebarLinks.classList.toggle('active')
  
}