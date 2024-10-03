// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const favSongTitle = document.getElementById("fav-song");

//fade in effect
favSongTitle.style.opacity = 0; //hides title
let opacity = 0;

//gradually increases opacity

function fadeIn() {
    if (opacity < 1) {
        opacity += 0.1; //increases the opacity
        favSongTitle.style.opacity = opacity; //updates opacity
    } else {
        clearInterval(fadeInInterval); //will stop when its fully visible 
    }
}

setTimeout(function () {
    var fadeInInterval = setInterval(fadeIn, 100); //calls function every 100ms
}, 500); //starts it after 500ms