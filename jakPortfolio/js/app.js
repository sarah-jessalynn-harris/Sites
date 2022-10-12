//Store videos
var videoH = document.getElementById("videoH");
var videoV = document.getElementById("videoV");

// Get the buttons
var btnH = document.getElementById("muteButtonH");
var btnV = document.getElementById("muteButtonV");

// Mute and unmute the video, and change the button text
function muteControl(vid) {
  if(vid == "videoV"){
    // Mute the vertical video
    var video = videoV;
    var hideVideo = videoH;
    var button = btnV;
  } else {
    //Mute the horizontal video
    var video = videoH;
    var hideVideo = videoV;
    var button = btnH;
  }

  // determine if the video is already muted, and mute it if not; mute other version if it is still playing
  if (video.muted == true) {
    hideVideo.muted = true;
    video.muted = false;
    button.innerHTML = "Mute";
  } else {
    hideVideo.muted = true;
    video.muted = true;
    button.innerHTML = "Unmute";
  }
}

