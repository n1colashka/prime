// Get the modal
var modal = document.getElementById("popup");

var modal2 = document.getElementById("popup__form");


var popupContent = document.getElementById("popup__nav");
var popupContent = document.getElementById("popup__footer");

// Get the button that opens the modal
var btn = document.getElementById("popup-link");
var btnFooter = document.getElementById("popup__footer-link");
var btn2 = document.getElementById("popup-link2");
var btn3 = document.getElementById("popup-link3");
var btn4 = document.getElementById("popup-link4");


btn.onclick = function() {
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
    popupContent.style.opacity = "1";
    popupContent.style.display = "block";
    popupContent.style.transition = "all 0.8s ease 0s";
    modal2.style.display = "none";
}

btnFooter.onclick = function(e) {
    e.preventDefault();
    console.log('click');
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
    popupContent.style.opacity = "1";
    popupContent.style.display = "block";
    popupContent.style.transition = "all 0.8s ease 0s";
    modal2.style.display = "none";
}

btn2.onclick = function() {
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
    popupContent.style.display = "none";
    modal2.style.display = "block";
}

btn3.onclick = function() {
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
    popupContent.style.display = "none";
    modal2.style.display = "block";
}

btn4.onclick = function() {
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
    popupContent.style.display = "none";
    modal2.style.display = "block";
}



window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
    }
}
