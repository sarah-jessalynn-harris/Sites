//Sarah Harris
//N220-24567
//April 20, 2018

//locate intro div
var intro = document.querySelector(".intro");

//create deck div with a class of deck
var deck = "";

//create each row div
var rowOne = "";
var rowTwo = "";
var rowThree = "";
var rowFour = "";

//create divs for each card
var one = "";
var two = "";
var three = "";
var four = "";
var five = "";
var six = "";
var seven = "";
var eight = "";
var nine = "";
var ten = "";
var eleven = "";
var twelve = "";
var thirteen = "";
var fourteen = "";
var fifteen = "";
var sixteen = "";

//placeholder div to be created
var placeholder = "";

//button to be created
var starter = "";

//number to keep track of amount of cards flipped over
var flippedCards = 0;

//variable to keep track of cards left
var countdown = 0;

//variable to store the first card flipped in a sequence
var firstFlipped = "";

//variable to store the second card flipped in a sequence
var cardTwo = "";

//variable to remember what type of card was flipped first
var flippedType = 0;

//variable to remember what type of card was flipped second
var secondType = 0;

//array for radomizing cards via card names and backround images
var cards = [
    //card flipped down
    {card: 0, pic: "url('images/card0.png')"},
    //card flipped up variation 1-8
    {card: 1, pic: "url('images/card1.png')"},
    {card: 2, pic: "url('images/card2.png')"},
    {card: 3, pic: "url('images/card3.png')"},
    {card: 4, pic: "url('images/card4.png')"},
    {card: 5, pic: "url('images/card5.png')"},
    {card: 6, pic: "url('images/card6.png')"},
    {card: 7, pic: "url('images/card7.png')"},
    {card: 8, pic: "url('images/card8.png')"} 
];

//start up game
function start() {
    document.body.removeChild(intro);
    
    setUp();
    
}

//start new game
function startNew() {
    document.body.removeChild(starter);
    
    setUp();
    
}

//set up game
function setUp() {
    //set amount of cards left to 16
    countdown = 16;
    
    //create deck div with a class of deck
    deck = document.createElement("div");
    deck.className = "deck";

    //create each row div
    rowOne = document.createElement("div");
    rowOne.className = "row";
    rowOne.id = "one";
    rowTwo = document.createElement("div");
    rowTwo.className = "row";
    rowTwo.id = "two";
    rowThree = document.createElement("div");
    rowThree.className = "row";
    rowThree.id = "row";
    rowFour = document.createElement("div");
    rowFour.className = "row";
    rowFour.id = "row";
    
    //append deck and row divs
    document.body.appendChild(deck);
    deck.appendChild(rowOne);
    deck.appendChild(rowTwo);
    deck.appendChild(rowThree);
    deck.appendChild(rowFour);
    
    //create divs for each card
     one = document.createElement("div");
     two = document.createElement("div");
     three = document.createElement("div");
     four = document.createElement("div");
     five = document.createElement("div");
     six = document.createElement("div");
     seven = document.createElement("div");
     eight = document.createElement("div");
     nine = document.createElement("div");
     ten = document.createElement("div");
     eleven = document.createElement("div");
     twelve = document.createElement("div");
     thirteen = document.createElement("div");
     fourteen = document.createElement("div");
     fifteen = document.createElement("div");
     sixteen = document.createElement("div");

    //give all the cards a class of card
    one.className = "card";
    two.className = "card";
    three.className = "card";
    four.className = "card";
    five.className = "card";
    six.className = "card";
    seven.className = "card";
    eight.className = "card";
    nine.className = "card";
    ten.className = "card";
    eleven.className = "card";
    twelve.className = "card";
    thirteen.className = "card";
    fourteen.className = "card";
    fifteen.className = "card";
    sixteen.className = "card";

    //assign a card type
    one.setAttribute("card", cards[1].card);
    two.setAttribute("card", cards[1].card);
    three.setAttribute("card", cards[2].card);
    four.setAttribute("card", cards[2].card);
    five.setAttribute("card", cards[3].card);
    six.setAttribute("card", cards[3].card);
    seven.setAttribute("card", cards[4].card);
    eight.setAttribute("card", cards[4].card);
    nine.setAttribute("card", cards[5].card);
    ten.setAttribute("card", cards[5].card);
    eleven.setAttribute("card", cards[6].card);
    twelve.setAttribute("card", cards[6].card);
    thirteen.setAttribute("card", cards[7].card);
    fourteen.setAttribute("card", cards[7].card);
    fifteen.setAttribute("card", cards[8].card);
    sixteen.setAttribute("card", cards[8].card);

    //array to hold all the card divs
    var divCards = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen];
    
    //suffle divCards array to append cards randomly
    var appender = shuffle(divCards);

    //run through randomized array and append divs accordingly
    for (var i = 0; i < divCards.length; i++) {

        //if statement to put four cards in each row
        if (i >= 0 & i<= 3) {
            //set an attribute to locate which row this card is in
            appender[i].setAttribute("row", 1);
            
            //append current array value of div
            rowOne.appendChild(appender[i]);
        } else if (i >= 4 & i<= 7) {
            //set an attribute to locate which row this card is in
            appender[i].setAttribute("row", 2);
            
            //append current array value of div
            rowTwo.appendChild(appender[i]);
        } else if (i >= 8 & i<= 11 ) {
            //set an attribute to locate which row this card is in
            appender[i].setAttribute("row", 3);
            
            //append current array value of div
            rowThree.appendChild(appender[i]);
        } else if (i >=12 & i<= 16) {
            //set an attribute to locate which row this card is in
            appender[i].setAttribute("row", 4);
            
            //append current array value of div
            rowFour.appendChild(appender[i]);
        }
    }

    //set up event listeners for each card
    one.addEventListener("click", flip);
    two.addEventListener("click", flip);
    three.addEventListener("click", flip);
    four.addEventListener("click", flip);
    five.addEventListener("click", flip);
    six.addEventListener("click", flip);
    seven.addEventListener("click", flip);
    eight.addEventListener("click", flip);
    nine.addEventListener("click", flip);
    ten.addEventListener("click", flip);
    eleven.addEventListener("click", flip);
    twelve.addEventListener("click", flip);
    thirteen.addEventListener("click", flip);
    fourteen.addEventListener("click", flip);
    fifteen.addEventListener("click", flip);
    sixteen.addEventListener("click", flip);
    
    return one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, countdown;
}

//event handler
function flip(event) {
    //find out which card it is
    var cardNum = event.target.getAttribute("card");
    
    // match each card attribute to the correct background image to flip over
   event.target.style.backgroundImage = cards[cardNum].pic;
    
    //if two cards are already flipped up, prevent a third from being flipped over
    if (flippedCards >= 2) {
        //if it is the first card
        if (event.target == firstFlipped) {
            //do nothing
            event.target.style.backgroundImage = cards[flippedType].pic;
        } else if (event.target == cardTwo) {
            //if it is the second card, do nothing
            event.target.style.backgroundImage = cards[secondType].pic;
        } else {
            //if it isn't the same as the second card, flip back over
            event.target.style.backgroundImage = cards[0].pic;
        }
    }
    
    //take note that one card is turned over
    flippedCards ++;

    
    //if this is the first card to be flipped
    if (flippedCards == 1) {
        //remember that this is the first card flipped
        firstFlipped = event.target;
        //remember the type of card it was
        flippedType = cardNum;
    }
    
    //if this is the second card to be flipped
    if (flippedCards == 2) {
        //store card in variable
        cardTwo = event.target;
        //store second card's type in variable
        secondType = cardNum;
        
        //if the card is the same as the first card, don't consider it the second card flipped
        if(event.target == firstFlipped) {
            //by keeping the card flipped up  
            event.target.style.backgroundImage = cards[flippedType].pic; 
            //and by resetting the number of flipped cards back to 1
            flippedCards = 1;
        } else if (cardNum == flippedType) {
            //then the two cards match; wait half a second, then make both them dissappear
            setTimeout(remove, 500);
            
            //makes them both dissapear
            function remove() {
                //replace the first card from the row, based on which row it is in, and create placeholder so that the remaining cards stay in place
                if (firstFlipped.getAttribute("row") == 1) {
                    placemaker();
                    rowOne.replaceChild(placeholder, firstFlipped);
                } else if (firstFlipped.getAttribute("row") == 2) {
                    placemaker();
                    rowTwo.replaceChild(placeholder, firstFlipped);
                } else if (firstFlipped.getAttribute("row") == 3) {
                    placemaker();
                    rowThree.replaceChild(placeholder, firstFlipped);
                } else if (firstFlipped.getAttribute("row") == 4) {
                    placemaker();
                    rowFour.replaceChild(placeholder, firstFlipped);
                }  
                
                //replace the second card from the row, based on which row it is in, and create placeholder so that the remaining cards stay in place
                if (cardTwo.getAttribute("row") == 1) {
                    placemaker();
                    rowOne.replaceChild(placeholder, cardTwo);
                } else if (cardTwo.getAttribute("row") == 2) {
                    placemaker();
                    rowTwo.replaceChild(placeholder, cardTwo);
                } else if (cardTwo.getAttribute("row") == 3) {
                    placemaker();
                    rowThree.replaceChild(placeholder, cardTwo);
                } else if (cardTwo.getAttribute("row") == 4) {
                    placemaker();
                    rowFour.replaceChild(placeholder, cardTwo);
                }
                
                //subtract these cards from the total count of cards
                countdown -= 2;
                console.log(countdown);
                
                //also reset flipped cards to 0
                flippedCards = 0;
                
                //trigger replay sequence if all the cards have been matched
                if (countdown == 0) {
               
                    //get rid of old deck
                    document.body.removeChild(deck);
                    
                    //create start button
                    starter = document.createElement("button");
                    starter.className = "starter";
                    starter.innerHTML = "Play Again";
                    
                    //set up game again when clicked
                    starter.onclick = function() {startNew()};
                    document.body.appendChild(starter);
                }
            }   
         } else {
                //they don't match flip them back over after 1 second
                setTimeout(flipper, 1000);
                
                //flip cards back over
                function flipper() {
                    //flip current card back over
                    event.target.style.backgroundImage = cards[0].pic;
                    //flip first card back over
                    firstFlipped.style.backgroundImage = cards[0].pic;
                    
                    //also reset flipped cards to 0
                    flippedCards = 0;
                }
            }
    }
    

    
    //update number of cards flipped and the first flipped card
    return flippedCards, firstFlipped, cardNum, secondType, cardTwo, countdown, rowOne, rowTwo, rowThree, rowFour, deck, starter;
}

//create placeholder divs
function placemaker() {
    placeholder = document.createElement("div");
    placeholder.className = "placeholder";
    return placeholder;
}

// Fisher-Yates Shuffling Algorithm to shuffle the divCards array, so as to randomize the order in which the divs are appended to the page
function shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};


