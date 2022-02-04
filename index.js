function changeClass(){
  document.getElementById("myNAVlnk").className = "active";
}

window.onload = function(){
  document.getElementById("myNAVlnk").addEventListener('click',changeClass);
}