//Store videos
var videoH = document.getElementById("videoH");
var videoV = document.getElementById("videoV");

// Get the buttons
var btnH = document.getElementById("muteButtonH");
var btnV = document.getElementById("muteButtonV");

// Mute and unmute the video, and change the button text
function muteControl(vid) {

  // determine the active video
  if(vid == "videoV"){
    // Mute the vertical video
    var video = videoV;
    var button = btnV;
  } else {
    //Mute the horizontal video
    var video = videoH;
    var button = btnH;
  }

  // determine if the video is already muted, and mute it if not; mute other version if it is still playing
  if (video.muted == true) {
    //unmute the visible video
    video.muted = false;

    //button should show mute option for visible video
    button.innerHTML = "Mute";
   
  } else {
    //the visible video should now be muted
    video.muted = true;

    //button should show the unmute option for visible video
    button.innerHTML = "Unmute";
  }
}

// ensure that the opposite video never plays when the other video is playing
window.addEventListener("resize", function (e) {
  if(window.innerWidth >= 1000) {
    // hide vertical video and buttons
    videoV.style.display = "none";
    btnV.style.display = "none";

    // Mute the vertical video
    videoV.muted = true;
    //button should show the unmute option while muted
    btnV.innerHTML = "Unmute";

    // show horizontal video and buttons
    videoH.style.display = "flex";
    btnH.style.display = "flex";
  } else {
     // hide horizontal video and buttons
     videoH.style.display = "none";
     btnH.style.display = "none";

     // Mute the horizontal video
     videoH.muted = true;
     //button should show the unmute option while muted
    btnH.innerHTML = "Unmute";

     // show vertical video and buttons
     videoV.style.display = "flex";
     btnV.style.display = "flex";
  }
});