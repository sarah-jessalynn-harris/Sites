
//variable set up for random infinitive
var numPick = 0;

//variable set up for random subject
var numPicker = 0;

//variable set up for correct answers
var correct = 0;

//variable set up for incorrect answers
var incorrect = 0;

//variable set up for rounds
var rounds = 0;

//pick #s for first random infinitive and subject 
game();

//pick #s for random infinitive and subject 
function game() {
//random number generator for picking infinitive
numPick = Math.round(Math.random()*41);
    
//random number generator for picking infinitive
numPicker = Math.round(Math.random()*5);

//return values    
return numPicker;
return numPick;
}

//locate  user input box
var input = document.querySelector("#input");
//locate div to output infinitives
var infDisplay = document.querySelector("#infDisplay");
//locate div to output information
var output = document.querySelector("#output");
//locate div to output subject
var subjDisplay = document.querySelector("#subjDisplay");
//locate table for outputting scores
var right = document.querySelector("#right");
var wrong = document.querySelector("#wrong");
var round = document.querySelector("#round");

//variable set up for answer
var answer = " ";

//array list of subjects
var subj = ["yo", "t&uacute;", "&eacute;l", "nosotros", "vosotros", "ellos"];

//array list of infinitives
var inf = ["andar", "bailar", "cantar", "estar", "parar", "mandar", "llevar", "nadar", "cerrar", "enviar", "mostrar", "graduar", "dar", "almorzar", "comer", "creer", "beber", "vender", "conocer", "perder", "poder", "tener", "escoger", "hacer", "poner", "ver", "caber", "traer", "ir", "decir", "dormir", "salir", "vivir", "pedir", "mentir", "lucir", "distinguir", "destruir", "sentir", "describir", "preferir", "escribir"];

//array for yo conjugations
var yo = [ "andar\xE9", "bailar\xE9", "cantar\xE9", "estar\xE9", "parar\xE9", "mandar\xE9", "llevar\xE9", "nadar\xE9", "cerrar\xE9", "enviar\xE9", "mostrar\xE9", "graduar\xE9", "dar\xE9", "almorzar\xE9", "comer\xE9", "creer\xE9", "beber\xE9", "vender\xE9", "conocer\xE9", "perder\xE9", "podr\xE9", "tendr\xE9", "escoger\xE9", "har\xE9", "pondr\xE9", "ver\xE9", "cabr\xE9", "traer\xE9", "ir\xE9", "dir\xE9", "dormir\xE9", "saldr\xE9", "vivir\xE9", "pedir\xE9", "mentir\xE9", "lucir\xE9", "distinguir\xE9", "destruir\xE9", "sentir\xE9", "describir\xE9", "preferir\xE9", "escribir\xE9"];

//array for tu conjugations
var tu = [ "andar\xE1s", "bailar\xE1s", "cantar\xE1s", "estar\xE1s", "parar\xE1s", "mandar\xE1s", "llevar\xE1s", "nadar\xE1s", "cerrar\xE1s", "enviar\xE1s", "mostrar\xE1s", "graduar\xE1s", "dar\xE1s", "almorzar\xE1s", "comer\xE1s", "creer\xE1s", "beber\xE1s", "vender\xE1s", "conocer\xE1s", "perder\xE1s", "podr\xE1s", "tendr\xE1s", "escoger\xE1s", "har\xE1s", "pondr\xE1s", "ver\xE1s", "cabr\xE1s", "traer\xE1s", "ir\xE1s", "dir\xE1s", "dormir\xE1s", "saldr\xE1s", "vivir\xE1s", "pedir\xE1s", "mentir\xE1s", "lucir\xE1s", "distinguir\xE1s", "destruir\xE1s", "sentir\xE1s", "describir\xE1s", "preferir\xE1s", "escribir\xE1s"];

//array for el conjugations
var el = ["andar\xE1", "bailar\xE1", "cantar\xE1", "estar\xE1", "parar\xE1", "mandar\xE1", "llevar\xE1", "nadar\xE1", "cerrar\xE1", "enviar\xE1", "mostrar\xE1", "graduar\xE1", "dar\xE1", "almorzar\xE1", "comer\xE1", "creer\xE1", "beber\xE1", "vender\xE1", "conocer\xE1", "perder\xE1", "podr\xE1", "tendr\xE1", "escoger\xE1", "har\xE1", "pondr\xE1", "ver\xE1", "cabr\xE1", "traer\xE1", "ir\xE1", "dir\xE1", "dormir\xE1", "saldr\xE1", "vivir\xE1", "pedir\xE1", "mentir\xE1", "lucir\xE1", "distinguir\xE1", "destruir\xE1", "sentir\xE1", "describir\xE1", "preferir\xE1", "escribir\xE1"];

//array for nosotros conjugations
var nos = ["andaremos", "bailaremos", "cantaremos", "estaremos", "pararemos", "mandaremos", "llevaremos", "nadaremos", "cerraremos", "enviaremos", "mostraremos", "graduaremos", "daremos", "almorzaremos", "comeremos", "creeremos", "beberemos", "venderemos", "conoceremos", "perderemos", "podremos", "tendremos", "escogeremos", "haremos", "pondremos", "veremos", "cabremos", "traeremos", "iremos","diremos", "dormiremos", "saldremos", "viviremos", "pediremos", "mentiremos", "luciremos", "distinguiremos", "destruiremos", "sentiremos", "describiremos", "preferiremos", "escribiremos"];

//array for vosotros conjugations
var vos = ["andar\xE9is", "bailar\xE9is", "cantar\xE9is", "estar\xE9is", "parar\xE9is", "mandar\xE9is", "llevar\xE9is", "nadar\xE9is", "cerrar\xE9is", "enviar\xE9is", "mostrar\xE9is", "graduar\xE9is", "dar\xE9is", "almorzar\xE9is", "comer\xE9is", "creer\xE9is", "beber\xE9is", "vender\xE9is", "conocer\xE9is", "perder\xE9is", "podr\xE9is", "tendr\xE9is", "escoger\xE9is", "har\xE9is", "pondr\xE9is", "ver\xE9is", "cabr\xE9is", "traer\xE9is", "ir\xE9is", "dir\xE9is", "dormir\xE9is", "saldr\xE9is", "vivir\xE9is", "pedir\xE9is", "mentir\xE9is", "lucir\xE9is", "distinguir\xE9is", "destruir\xE9is", "sentir\xE9is", "describir\xE9is", "preferir\xE9is", "escribir\xE9is"];

//array for ellos conjugations
var ellos = ["andar\xE1n", "bailar\xE1n", "cantar\xE1n", "estar\xE1n", "parar\xE1n", "mandar\xE1n", "llevar\xE1n", "nadar\xE1n", "cerrar\xE1n", "enviar\xE1n", "mostrar\xE1n", "graduar\xE1n", "dar\xE1n", "almorzar\xE1n", "comer\xE1n", "creer\xE1n", "beber\xE1n", "vender\xE1n", "conocer\xE1n", "perder\xE1n", "podr\xE1n", "tendr\xE1n", "escoger\xE1n", "har\xE1n", "pondr\xE1n", "ver\xE1n", "cabr\xE1n", "traer\xE1n", "ir\xE1n", "dir\xE1n", "dormir\xE1n", "saldr\xE1n", "vivir\xE1n", "pedir\xE1n", "mentir\xE1n", "lucir\xE1n", "distinguir\xE1n", "destruir\xE1n", "sentir\xE1n", "describir\xE1n", "preferir\xE1n", "escribir\xE1n"];

//find answer
answerFind();
        
//display answer for teacher to grade
console.log(answer);

//display a random infinitive for user
infDisplay.innerHTML = inf[numPick];

//display a random subject for user
subjDisplay.innerHTML = subj[numPicker];

//find answer based on infinitive and subject
function answerFind() {
    //if the subject is yo...
    if (numPicker == 0){

    //...answer is in yo array    
        answer = yo[numPick];

        //return the answer out of function 
            return answer;

    //if the subject is tú...    
    } else if (numPicker == 1){

    //...answer is tú in  array    
        answer = tu[numPick];

        //return the answer out of function 
            return answer;

    //if the subject is él...    
    } else if (numPicker == 2){

    //...answer is él in  array 
        answer = el[numPick];

        //return the answer out of function 
            return answer;

    //if the subject is nosotros...    
    } else if (numPicker == 3){
        answer = nos[numPick];

        //return the answer out of function 
            return answer;

    //...answer is nosotros in  array 

    //if the subject is vosotros...    
    } else if (numPicker == 4){

    //...answer is vosotros in  array
        answer = vos[numPick];

        //return the answer out of function 
            return answer;

    //if the subject is ellos...    
    } else if (numPicker == 5){

    //...answer is ellos in  array  
        answer = ellos[numPick];

        //return the answer out of function 
            return answer;


    } 
}


//check user answer
function check  () {
    //get user input
    var inputs = input.value;
    
    //if matches answer...
    if (inputs == answer) {
        
        //...then let the user know they were correct
        output.innerHTML = "Correct!"
    
        //clear input for next conjugation
        document.querySelector("#input"). value = "";

        //add to correct attempts and overall attempts
        correct += 1;
        rounds += 1;
        
        //update table of scores
        right.innerHTML = correct;
        round.innerHTML = rounds;
        
        //generate new infinitive and subject
        game ();
        //find answer
        answerFind();
        
        //display answer for teacher to grade
        console.log(answer);
        
        //display a random infinitive for user
        infDisplay.innerHTML = inf[numPick];

        //display a random subject for user
        subjDisplay.innerHTML = subj[numPicker];
    
    //if it doesn't match answer...    
    } else {
        
        //...let user know the correct answer
        output.innerHTML = "Incorrect. The answer was " +  answer + ".";
        
        //clear input for next conjugation
        document.querySelector("#input"). value = "";

        //add to incorrect attempts and overall attempts
        incorrect += 1;
        rounds += 1;
        
        //update table of scores
        wrong.innerHTML = incorrect;
        round.innerHTML = rounds;
        
        //generate new infinitive and subject
        game ();
        
        //find answer
        answerFind();
        
        //display answer for teacher to grade
        console.log(answer);
        
        //display a random infinitive for user
        infDisplay.innerHTML = inf[numPick];

        //display a random subject for user
        subjDisplay.innerHTML = subj[numPicker];
    }
    
}

//functions to add special characters to user input using buttons
//accent a
function a() {
    
    //place special character in user text
    input.value += "\xE1";
    
}
//accent e
function e() {
    
    //place special character in user text
    document.querySelector("#input").value += "\xE9";
}
//accent i
function i() {
    
    //place special character in user text
    document.querySelector("#input").value += "\xED";
}
//accent o
function o() {
    
    //place special character in user text
    document.querySelector("#input").value += "\xF3";
}
//accent u
function u() {
    
    //place special character in user text
    document.querySelector("#input").value += "\xFA";
}