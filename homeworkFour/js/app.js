//make the miniNav sticky
function stickify() {
    //get the position of the mini nav (and subtract 60 for the main nav)
    var stickyNavTop = $('.miniNav').offset().top -60;
    
    //if the window has scrolled past the top of the mini nav (and the 60px buffer for the main nav) stop it so that miniNav will stick
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
        
        if (scrollTop > stickyNavTop) { 
            $('.miniNav').addClass('sticky');
        } else {
            $('.miniNav').removeClass('sticky'); 
        }
    };
    
    stickyNav();
    
    //check if the miniNav needs to stick when the window is scrolled
    $(window).scroll(function() {
        stickyNav();
    });
}

//load and use the JSON data
function loadData() {
    $.getJSON("data/data.json", function(data){

       //get main nav data
       mainNav(data);

       //get home section header data
       homeHeader(data);

       //get mini nav data
       miniNav(data);

       //get intro section data
       intro(data);

       //get resources section data
       resource(data);

       //get concepts section data
       concepts(data);

       //get activities seciton data
       activities(data);

       //get more section data
       more(data);

       //get footer data
    //    footer(data);

    });
}

 //get data for the main navigation
function mainNav(data) {

    $(".mainNav").append('<img src="' + data.navLogoImage+ '">')
  
    $.each(data.mainNav, function(idx, value){
        let anchor = '<a target="' + value.target + '" href = "' + value.linkUrl + '">' + value.linkName.charAt(0).toUpperCase() + value.linkName.slice(1).toLowerCase() + '</a>';

        $(".mainNav").append(anchor);
    });
}

//get home section header data
function homeHeader(data) {

    let text = '<img src="' + data.homeImgUrl + '"></img>'

    $(".homeBg").append(text);
}

 //get data for the mini navigation
 function miniNav(data) {

    $(".miniNav").append('<h3>' + data.homeTitle.charAt(0).toUpperCase() + data.homeTitle.slice(1).toLowerCase()  + '</h3>')
  
    $.each(data.miniNav, function(idx, value){
        let anchor = '<a href = "' + value.linkUrl + '">' + value.linkName.charAt(0).toUpperCase() + value.linkName.slice(1).toLowerCase() + '</a>';

        $(".miniNav").append(anchor);
    });
}

//get the data for the introduction section
function intro(data) {

        let content = '<h2>' + data.Sections[0].introGreeting + '</h2> <img src="' + data.Sections[0].sectionImage + '"> <p>'+ data.Sections[0].introParagraph +' </p> <p>' + data.Sections[0].introOutro + '</p>';

        $(".intro").append(content);
}

//get resources section data
function resource(data) {

    let content = '<h2>' + data.Sections[1].heading + '</h2> <p>' + data.Sections[1].pOne + '</p> <p>' + data.Sections[1].pTwo + '</p>';

    $(".resource").append(content);

}

//get concepts section data
function concepts(data) {
    let content = '<h2>' + data.Sections[2].heading + '</h2> <p>' + data.Sections[2].pOne + '</p> <div> <a href="' + data.Sections[2].verbsLink +'"> <img src="' + data.Sections[2].verbsImage + '"></a><a href="' + data.Sections[2].speechLink +'"> <img class ="speechImg" src="' + data.Sections[2].speechImage + '"></a><a href="' + data.Sections[2].indexLink +'"> <img class="indexImg" src="' + data.Sections[2].indexImage + '"></a></div>';

    $(".concepts").append(content);
}

//get activities section data
function activities(data) {
    let content = '<h2>' + data.Sections[3].heading + '</h2> <p>' + data.Sections[3].pOne + '</p> <h4>' + data.Sections[3].actOne + '</h4> <p>' + data.Sections[3].pTwo + '</p>  <video autoplay muted loop controls> <source src="' + data.Sections[3].movOne +'" type="video/mp4"> </video> <h4>' + data.Sections[3].actTwo + '</h4> <p>' + data.Sections[3].pThree + '</p> <video autoplay muted loop controls> <source src="' + data.Sections[3].movTwo +'" type="video/mp4"> </video> <h4>' + data.Sections[3].actThree + '</h4> <p>' + data.Sections[3].pFour + '</p> <video autoplay muted loop controls> <source src="' + data.Sections[3].movThree +'" type="video/mp4"> </video>' ;

    $(".activities").append(content);
}

//get more section data
function more(data) {
    let content = '<img src="' + data.Sections[4].moreImage + '"> <p>' + data.Sections[4].pOne + '</p> <p>' + data.Sections[4].pTwo + '</p>';

    $(".more").append(content);

}

//get footer data
// function footer(data) {
//     let content  = '<h3>' + data.Sections[5].footing + '</h3>';

//     $(".footer").append(content);
// }

//load this on startup
$(document).ready (function (){

    //make the miniNav stick
    stickify();

    //add the data to the site
    loadData();

});