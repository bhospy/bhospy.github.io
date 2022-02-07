console.log("Hello World")

function clickchange(clickid) {
    var divtag = document.getElementById('canvascontent');
    var text = `<p>This is the content of Home ${clickid}</p>`
    divtag.innerHTML = text;
}

// function changeClass(){
//   document.getElementById("myNAVlnk").className = "active";
// }

// window.onload = function(){
//   document.getElementById("myNAVlnk").addEventListener('click',changeClass);
// }

// function myFunction(){
//   document.getElementById("demo").innerHTML="Shiriyev";
//   }

// function photoNext(){
//   document.getElementById("demo2").src="my_photo/p2.jpg";
//   }

// function photoPrev(){
//   document.getElementById("demo2").src="my_photo/p1.jpg";
//   }