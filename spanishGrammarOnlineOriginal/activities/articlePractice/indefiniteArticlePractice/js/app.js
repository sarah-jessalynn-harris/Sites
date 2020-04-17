//set up a variable for random noun picking
var number = 0;

//variable set up for correct answers
var correct = 0;

//variable set up for incorrect answers
var incorrect = 0;

//variable set up for rounds
var rounds = 0;

//start up the game by picking a random noun
nounPick();

//locate the div to output the noun
var noun = document.querySelector("#noun");
//locate the div to output the results
var results = document.querySelector("#results");
//locate table for outputting scores
var right = document.querySelector("#right");
var wrong = document.querySelector("#wrong");
var round = document.querySelector("#round");

//function to create random number to select noun
function nounPick () {
//create a random number to select a noun from array
    number = Math.round(Math.random()*63);
    
    //return the value
    return number;
}

//create an array for all the possible nouns
var nouns = [ "tema", "cuaderno", "l&aacute;piz", "ba&ntilde;o", "plato", "&aacute;rbol", "reloj", "verde", "horno", "zorro", "hombre", "viaje", "rompecabezas", "d&iacute;a", "cumplea&ntilde;os", "herido", "agua", "pasta", "manzana", "estaci&oacute;n", "m&uacute;sica", "luz", "clase", "salida", "gente", "mujer", "jirafa", "verdad", "estupidez", "fecha", "playa", "herida", "temas", "cuadernos", "l&aacute;pices", "ba&ntilde;os", "platos", "&aacute;rboles", "relojes", "verdes", "hornos", "zorros", "hombres", "viajes", "rompecabezas", "d&iacute;as", "cumplea&ntilde;os", "heridos", "aguas", "pastas", "manzanas", "estaciones", "m&uacute;sicas", "luces", "clases", "salidas", "gentes", "mujeres", "jirafas", "verdades", "estupideces", "fechas", "playas", "heridas"];

//display the noun for user
noun.innerHTML = nouns[number];

//display answer for grader
grader();

//when un answer is chosen
function un() {
    
    //if the noun is in the first 16 of array 
    if ((number >= 0) && (number <= 15)) {
        
        //then the answer is un
        results.innerHTML = "Correct!" 
        
        //add to correct attempts and overall attempts
        correct += 1;
        rounds += 1;
        
        //update table of scores
        right.innerHTML = correct;
        round.innerHTML = rounds;
        
    //if the noun is in the second 16 of array   
    } else if ((number >= 16) && (number <= 31)) {
        
        //then the answer is una
        results.innerHTML = "Incorrect. The answer was una."
        
        //add to incorrect attempts and overall attempts
        incorrect += 1;
        rounds += 1;
        
        //update table of scores
        wrong.innerHTML = incorrect;
        round.innerHTML = rounds;
        
    //if the noun is in the third 16 of the array    
    } else if ((number >= 32) && (number <= 47)) {
        
        //then the answer is unos
        results.innerHTML = "Incorrect. The answer was unos."
        
        //add to incorrect attempts and overall attempts
        incorrect += 1;
        rounds += 1;
        
        //update table of scores
        wrong.innerHTML = incorrect;
        round.innerHTML = rounds;
        
    //if the noun is in the last 16 of the array    
    } else if ((number >= 48) && (number <= 63)) {
        
        //the answer is unas
        results.innerHTML = "Incorrect. The answer was unas."
        
        //add to incorrect attempts and overall attempts
        incorrect += 1;
        rounds += 1;
        
        //update table of scores
        wrong.innerHTML = incorrect;
        round.innerHTML = rounds;
        
    }
    
    //reset game
    nounPick();
    //display answer for grader
    grader();
    //display the new noun for user
    noun.innerHTML = nouns[number];
    
}

//when una answer is chosen
function una() {
    
    //if the noun is in the first 16 of array 
    if ((number >= 0) && (number <= 15)) {
        
        //then the answer is un
        results.innerHTML = "Incorrect. The answer was un." 
        
        //add to incorrect attempts and overall attempts
        incorrect += 1;
        rounds += 1;
        
        //update table of scores
        wrong.innerHTML = incorrect;
        round.innerHTML = rounds;
        
    //if the noun is in the second 16 of array   
    } else if ((number >= 16) && (number <= 31)) {
        
        //then the answer is una
        results.innerHTML = "Correct!"
        
        //add to correct attempts and overall attempts
        correct += 1;
        rounds += 1;
        
        //update table of scores
        right.innerHTML = correct;
        round.innerHTML = rounds;
        
    //if the noun is in the third 16 of the array    
    } else if ((number >= 32) && (number <= 47)) {
        
        //then the answer is unos
        results.innerHTML = "Incorrect. The answer was unos."
        
        //add to incorrect attempts and overall attempts
        incorrect += 1;
        rounds += 1;
        
        //update table of scores
        wrong.innerHTML = incorrect;
        round.innerHTML = rounds;
        
    //if the noun is in the last 16 of the array    
    } else if ((number >= 48) && (number <= 63)) {
        
        //the answer is unas
        results.innerHTML = "Incorrect. The answer was unas."
        
        //add to incorrect attempts and overall attempts
        incorrect += 1;
        rounds += 1;
        
        //update table of scores
        wrong.innerHTML = incorrect;
        round.innerHTML = rounds;
        
    }
    
    //reset game
    nounPick();
    //display answer for grader
    grader();
    //display the new noun for user
    noun.innerHTML = nouns[number];
    
}

//when unos answer is chosen
function unos() {
    
    //if the noun is in the first 16 of array 
    if ((number >= 0) && (number <= 15)) {
        
        //then the answer is un
        results.innerHTML = "Incorrect. The answer was un."
        
        //add to incorrect attempts and overall attempts
        incorrect += 1;
        rounds += 1;
        
        //update table of scores
        wrong.innerHTML = incorrect;
        round.innerHTML = rounds;
        
    //if the noun is in the second 16 of array   
    } else if ((number >= 16) && (number <= 31)) {
        
        //then the answer is una
        results.innerHTML = "Incorrect. The answer was una."
        
        //add to incorrect attempts and overall attempts
        incorrect += 1;
        rounds += 1;
        
        //update table of scores
        wrong.innerHTML = incorrect;
        round.innerHTML = rounds;
        
    //if the noun is in the third 16 of the array    
    } else if ((number >= 32) && (number <= 47)) {
        
        //then the answer is unos
        results.innerHTML = "Correct!"
        
        //add to correct attempts and overall attempts
        correct += 1;
        rounds += 1;
        
        //update table of scores
        right.innerHTML = correct;
        round.innerHTML = rounds;
        
    //if the noun is in the last 16 of the array    
    } else if ((number >= 48) && (number <= 63)) {
        
        //the answer is unas
        results.innerHTML = "Incorrect. The answer was unas."
        
        //add to incorrect attempts and overall attempts
        incorrect += 1;
        rounds += 1;
        
        //update table of scores
        wrong.innerHTML = incorrect;
        round.innerHTML = rounds;
        
    }
    
    //reset game
    nounPick();
    //display answer for grader
    grader();
    //display the new noun for user
    noun.innerHTML = nouns[number];
    
}

//when unas answer is chosen
function unas() {
    
    //if the noun is in the first 16 of array 
    if ((number >= 0) && (number <= 15)) {
        
        //then the answer is un
        results.innerHTML = "Incorrect. The answer was el." 
        
        //add to incorrect attempts and overall attempts
        incorrect += 1;
        rounds += 1;
        
        //update table of scores
        wrong.innerHTML = incorrect;
        round.innerHTML = rounds;
        
    //if the noun is in the second 16 of array   
    } else if ((number >= 16) && (number <= 31)) {
        
        //then the answer is una
        results.innerHTML = "Incorrect. The answer was una."
        
        //add to incorrect attempts and overall attempts
        incorrect += 1;
        rounds += 1;
        
        //update table of scores
        wrong.innerHTML = incorrect;
        round.innerHTML = rounds;
        
    //if the noun is in the third 16 of the array    
    } else if ((number >= 32) && (number <= 47)) {
        
        //then the answer is unos
        results.innerHTML = "Incorrect. The answer was unos."
        
        //add to incorrect attempts and overall attempts
        incorrect += 1;
        rounds += 1;
        
        //update table of scores
        wrong.innerHTML = incorrect;
        round.innerHTML = rounds;
        
    //if the noun is in the last 16 of the array    
    } else if ((number >= 48) && (number <= 63)) {
        
        //the answer is unas
        results.innerHTML = "Correct!"
        
        //add to correct attempts and overall attempts
        correct += 1;
        rounds += 1;
        
        //update table of scores
        right.innerHTML = correct;
        round.innerHTML = rounds;
        
    }
    //reset game
    nounPick();
    //display answer for grader
    grader();
    //display the new noun for user
    noun.innerHTML = nouns[number];
}
    
//display the answer in the console log for grader
function grader() {
    
    //if the noun is in the first 16 of array 
    if ((number >= 0) && (number <= 15)) {
        
        //then the answer is un
        console.log("un"); 
        
        
    //if the noun is in the second 16 of array   
    } else if ((number >= 16) && (number <= 31)) {
        
         //then the answer is un
        console.log("una"); 
        
    //if the noun is in the third 16 of the array    
    } else if ((number >= 32) && (number <= 47)) {
        
        //then the answer is unos
        console.log("unos"); 
        
    //if the noun is in the last 16 of the array    
    } else if ((number >= 48) && (number <= 63)) {
        
         //then the answer is unas
        console.log("unas"); 
        
    }

}