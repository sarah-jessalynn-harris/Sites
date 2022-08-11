// Get the video
var video = document.getElementById("bgVideo");

// Get the button
var btn = document.getElementById("muteButton");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.muted == true) {
    video.muted = false;
    btn.innerHTML = "Mute";
  } else {
    video.muted = true;
    btn.innerHTML = "Unmute";
  }
}