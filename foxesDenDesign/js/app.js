//global variable of number of items in cart
var cartItems = 0;

//return to top of products page
function addOneListener() {
    $(".return").click(function(e) {
        //when return button is clicked, scroll back to the top of the page
        $('html, body').animate({
            scrollTop: 0}, 500);
        });
}

//show pop up when product is clicked
function showProduct(clickedProduct) {
    //variable to store location of the popup details page of each item
    var productDetails;

    //find the hidden product information
    productDetails = document.getElementById("product" + clickedProduct);

    //make the product details show up gradually
    productDetails.style.transition = "visibility 2s, opacity .5s linear";
    productDetails.style.visibility = "visible";
    productDetails.style.opacity = "1";
}

//hide pop up when the exit button is clicked
function hideProduct(productClicked) {
    //variable to store location of the popup details page of each item
    var productDetail;

    //to keep id's unique yet still indicate the correct product, subtract the extra 20 added to each id before using it
    productClicked = productClicked - 20;

    //find the hidden product information
    productDetail = document.getElementById("product" + productClicked);

    //hide the product details gradually
    productDetail.style.transition = "visibility 2s, opacity .5s linear";
    productDetail.style.visibility = "hidden";
    productDetail.style.opacity = "0";
}

//when a product link is clicked, go to that section of the page
function addListeners() {

    $(".similarItem").click(function(e) {

        //close the details page before going to the next product's section
        //get the second class of the target to determine which product it is from
        var detailsSection = e.currentTarget.classList[1];

        //use that id to close the product details that was previously opened and the target was clicked in
        var homeProduct = document.getElementById("product" + detailsSection);

        //hide the product details gradually
        homeProduct.style.transition = "visibility 2s, opacity .5s linear";
        homeProduct.style.visibility = "hidden";
        homeProduct.style.opacity = "0";

        //scroll to the clicked product's section of the page
        //get clicked element's third class name
        var buttonId = e.currentTarget.classList[2];

        //concatenate section and current target id to recreate the next product section's id
        var sectionId = "section" + buttonId;

        //scroll to the id
        $('html, body').animate({
            scrollTop: $("#" + sectionId).offset().top}, 500);
    });
}

//allow users to select an image to view in the product's details on the main product page
function addMoreListeners() {
    $(".imageButton").click(function(e) {
        //store value of the second class of the image holder to select the correct imageHolder
        var newClass = e.currentTarget.classList[1];

        //locate the image holder
        var holder = document.getElementsByClassName('imageHolder')[newClass];

        //gradually use the source of the image clicked on to make the background of the image holder the correct one
        holder.style.transition = "background-image .5s";
        holder.style.backgroundImage = "url('" + e.currentTarget.src + "')";
    });
}

//if add to cart is clicked, edit cart number to show amount added to cart
function addItem() {
    //find the cart display
    var cart = document.querySelector(".cartItems");

    //find the current cart number
    var cartNumber = Number(cart.innerHTML);

    //add to the number of items in the cart
    cartItems = cartNumber + 1;

    //display the new number
    cart.innerHTML = cartItems;

    //store new value in local storage
    localStorage.setItem("cartItems", cartItems);
}

//delete items from cart
function addAnotherListener() {
    //when user clicks to clear cart, re-define cartItems in localStorage
    $(".clearCart").click(function(e) {
       localStorage.setItem("cartItems", 0);

       //locate cart display
        var carts = document.querySelector(".cartItems");

       //then show the change in the cart display
        carts.innerHTML = localStorage.cartItems;
    });
}

//scrolling image in the hover menu
//variable to keep track of how many times we have slid to the next image
var slid = 0;

//allow the animation to start over
function startOver() {
    TweenMax.to($(".imageSlide"), 2, {x: 0, delay: 2, onComplete: startAnimation});
}

//cause the image to slide again
function slideAgain() {
    TweenMax.to($(".imageSlide"), 2, {x: "-=" + 330, delay: 2, onComplete: slideAgain} );

    slid ++;

    if(slid == 7) {
        slid = 0;
        setTimeout(startOver, 50);
    }
}

//start the animation with the first image
function startAnimation() {
    TweenMax.to($(".imageSlide"), 2, {x: -330, delay: 2, onComplete: slideAgain} );
}

//load in everything when the DOM is loaded
$(document).ready(function() {
    if(localStorage.cartItems) {
        $(".cartItems").html(localStorage.cartItems);

    } else {
        localStorage.setItem("cartItems", cartItems);
        $(".cartItems").html(localStorage.cartItems);
    }
    addListeners();
    addMoreListeners();
    addOneListener();
    addAnotherListener();
    startAnimation();
});
