//make the Nav sticky
function stickify() {
    //get the position of the nav (and subtract 60 for the main nav)
    var stickyNavTop = $('.menu').offset().top;
    
    //if the window has scrolled past the top of the mini nav (and the 60px buffer for the main nav) stop it so that miniNav will stick
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
        
        if (scrollTop > stickyNavTop) { 
            $('.menu').addClass('sticky');
        } else {
            $('.menu').removeClass('sticky'); 
        }
    };
    
    stickyNav();
    
    //check if the miniNav needs to stick when the window is scrolled
    $(window).scroll(function() {
        stickyNav();
    });
}

//load this on startup
$(document).ready (function (){

    //make the Nav stick
    stickify();

});