const ribbonToggle = document.getElementsByClassName('ribbon-toggle')[0]
const ribbonLinks = document.getElementsByClassName('ribbon-links')[0]

ribbonToggle.addEventListener('click', () => {
  ribbonLinks.classList.toggle('active')
})

var acc = document.getElementsByClassName("sidebar-accordion");

// acc[0].classList.toggle("active");

// var pan = document.querySelector('.sidebar-panel');

// pan.style.display = "block"

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var items = document.querySelectorAll('.canvas-item');

items[0].style.display = 'block'

function changeCanvasItem(ID) {

  for (let i = 0; i < items.length; i++) {
    items[i].style.display = 'none'
  }

  items[ID].style.display = 'block'
  
}