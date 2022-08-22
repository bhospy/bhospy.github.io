const ribbonToggle = document.getElementsByClassName('ribbon-toggle')[0]
const ribbonLinks = document.getElementsByClassName('ribbon-links')[0]

ribbonToggle.addEventListener('click', () => {
  ribbonLinks.classList.toggle('active')
})