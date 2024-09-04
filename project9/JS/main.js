function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

var slideIndex = 1; // sets index to display first slide upon loading page
showSlides(slideIndex);

function plusSlides(n) { // correctly updates slideIndex
    showSlides(slideIndex += n); 
}

function currentSlide(n) { // supports navigating via the dots
    showSlides(slideIndex = n); 
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1} // loops back to the first slide
    if (n < 1) {slideIndex = slides.length} // loops forward to the last slide

    //hides all slides and removes active class from dots

    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

   // will display current slide and add active to the corresponding dot
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}