function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//displays first img in slideshow when page loads

var slideIndex = 1;
showSlides(slideIndex);

//changes slide when lift/right arrows clicked

function plusSlides(n) {
    showSlides(slideIndex += n);
}

//changes slide when dots are clicked

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // takes all elements with the class name and stores them in the var array "slides"
    var dots = document.getElementsByClassName("dot"); //takes all elements with class name dot and stores in var array "dots"
    if (n > slides.length) {slideIndex = 1}; //if n is > length of slides array, slide index is set to 1 
    if (n < 1) {slideIndex = slides.length}; // if n is < 1, slide index is set to length of slides array
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // for loop iterates over each item in slides array and sets display to none 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace( "active","" ); // for loop iterates each item in dots array and removes active which will remove active styling
    }
    slides[slideIndex - 1].style.display = "block"; //displays img in slideshow
    dots[slideIndex - 1].className += " active"; //adds active styling to dot associated with the image
}

//closes contact form when user clicks off, first thing is to add an event listener for any clicks on the website

document.addEventListener("click", function(event) {
    //state that if click happens on cancel button OR anywhere that isnt contact form & click does not happen on contact class then closeform fn is called
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
        closeForm()
    }
}, false )