const ribbonMain = document.getElementsByClassName('ribbon-title')[0]
const ribbonToggle = document.getElementsByClassName('ribbon-toggle')[0]
const ribbonLinks = document.getElementsByClassName('ribbon-links')[0]

const sidebarHome = document.getElementsByClassName('sidebar home')[0]

ribbonMain.addEventListener('click', () => {
  sidebarHome.style.display = "none";
})

ribbonToggle.addEventListener('click', () => {
  ribbonLinks.classList.toggle('active')
})