const sidebarToggle = document.getElementsByClassName('sidebar-toggle')[0]
const sidebarLinks = document.getElementsByClassName('sidebar-links')[0]

sidebarToggle.addEventListener('click', () => {
  sidebarLinks.classList.toggle('active')
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