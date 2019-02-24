//locate video holder div
var hold = document.querySelector(".vidPlayer");

//locate video player div
var vid = document.querySelector(".player");

//locate video
var video = document.querySelector("#vid");

//show vid and hide img when clicked
function show() {
    
    hold.style.backgroundImage = "none";
    
    vid.style.opacity = 1;
    
    video.play();
}