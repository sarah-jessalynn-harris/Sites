//slideshow portfolio
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// nav links
function addListeners() {

    $("nav .links .link a, nav .links .heading .headingNames a").click(function (e) {
        var buttonId = e.currentTarget.id;
        var sectionId = buttonId;

        $('html, body').animate({
            scrollTop: $("." + sectionId).offset().top -100
        }, 500);
    });

}


//sticky nav
//make the Nav sticky
function stickify() {
    //get the position of the nav (and subtract 60 for the main nav)
    var stickyNavTop = $('.links').offset().top;
    
    //if the window has scrolled past the top of the mini nav (and the 60px buffer for the main nav) stop it so that miniNav will stick
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
        
        if (scrollTop > stickyNavTop) { 
            $('.links').addClass('sticky');
        } else {
            $('.links').removeClass('sticky'); 
        }
    };
    
    stickyNav();
    
    //check if the miniNav needs to stick when the window is scrolled
    $(window).scroll(function() {
        stickyNav();
    });
}

(function($){
    $.fn.extend({ 
        rotaterator: function(options) {
 
            var defaults = {
                fadeSpeed: 500,
                pauseSpeed: 100,
				child:null
            };
             
            var options = $.extend(defaults, options);
         
            return this.each(function() {
                  var o =options;
                  var obj = $(this);                
                  var items = $(obj.children(), obj);
				  items.each(function() {$(this).hide();})
				  if(!o.child){var next = $(obj).children(':first');
				  }else{var next = o.child;
				  }
				  $(next).fadeIn(o.fadeSpeed, function() {
						$(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
							var next = $(this).next();
							if (next.length == 0){
									next = $(obj).children(':first');
							}
							$(obj).rotaterator({child : next, fadeSpeed : o.fadeSpeed, pauseSpeed : o.pauseSpeed});
						})
					});
            });
        }
    });
})(jQuery);


//startup jQuery stuff for nav
$(document).ready(function() {
    addListeners();
       //make the Nav stick
       stickify();

       //text rotator for header
       $('#rotate').rotaterator({fadeSpeed:700, pauseSpeed:300});
});


