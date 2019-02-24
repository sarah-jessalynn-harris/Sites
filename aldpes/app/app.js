function addListeners() {

    $("nav .navi a").click(function (e) {
        var buttonId = e.currentTarget.id;
        var sectionId = buttonId + "Section";

        $('html, body').animate({
            scrollTop: $("#" + sectionId).offset().top
        }, 500);
    });

}

$(document).ready(function() {
    addListeners();
});