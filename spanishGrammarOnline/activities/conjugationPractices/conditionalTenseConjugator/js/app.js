
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
return numPicker, numPick;
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
var yo = ["andar\xEDa", "bailar\xEDa", "cantar\xEDa", "estar\xEDa", "parar\xEDa", "mandar\xEDa", "llevar\xEDa", "nadar\xEDa", "cerrar\xEDa", "enviar\xEDa", "mostrar\xEDa", "graduar\xEDa", "dar\xEDa", "almorzar\xEDa", "comer\xEDa", "creer\xEDa", "beber\xEDa", "vender\xEDa", "conocer\xEDa", "perder\xEDa", "podr\xEDa", "tendr\xEDa", "escoger\xEDa", "har\xEDa", "pondr\xEDa", "ver\xEDa", "cabr\xEDa", "traer\xEDa", "ir\xEDa", "dir\xEDa", "dormir\xEDa", "saldr\xEDa", "vivir\xEDa", "pedir\xEDa", "mentir\xEDa", "lucir\xEDa", "distinguir\xEDa", "destruir\xEDa", "sentir\xEDa", "describir\xEDa", "preferir\xEDa", "escribir\xEDa"];

//array for tu conjugations
var tu = ["andar\xEDas", "bailar\xEDas", "cantar\xEDas", "estar\xEDas", "parar\xEDas", "mandar\xEDas", "llevar\xEDas", "nadar\xEDas", "cerrar\xEDas", "enviar\xEDas", "mostrar\xEDas", "graduar\xEDas", "dar\xEDas", "almorzar\xEDas", "comer\xEDas", "creer\xEDas", "beber\xEDas", "vender\xEDas", "conocer\xEDas", "perder\xEDas", "podr\xEDas", "tendr\xEDas", "escoger\xEDas", "har\xEDas", "pondr\xEDas", "ver\xEDas", "cabr\xEDas", "traer\xEDas", "ir\xEDas", "dir\xEDas", "dormir\xEDas", "saldr\xEDas", "vivir\xEDas", "pedir\xEDas", "mentir\xEDas", "lucir\xEDas", "distinguir\xEDas", "destruir\xEDas", "sentir\xEDas", "describir\xEDas", "preferir\xEDas", "escribir\xEDas"];

//array for el conjugations
var el = ["andar\xEDa", "bailar\xEDa", "cantar\xEDa", "estar\xEDa", "parar\xEDa", "mandar\xEDa", "llevar\xEDa", "nadar\xEDa", "cerrar\xEDa", "enviar\xEDa", "mostrar\xEDa", "graduar\xEDa", "dar\xEDa", "almorzar\xEDa", "comer\xEDa", "creer\xEDa", "beber\xEDa", "vender\xEDa", "conocer\xEDa", "perder\xEDa", "podr\xEDa", "tendr\xEDa", "escoger\xEDa", "har\xEDa", "pondr\xEDa", "ver\xEDa", "cabr\xEDa", "traer\xEDa", "ir\xEDa", "dir\xEDa", "dormir\xEDa", "saldr\xEDa", "vivir\xEDa", "pedir\xEDa", "mentir\xEDa", "lucir\xEDa", "distinguir\xEDa", "destruir\xEDa", "sentir\xEDa", "describir\xEDa", "preferir\xEDa", "escribir\xEDa"];

//array for nosotros conjugations
var nos = ["andar\xEDamos", "bailar\xEDamos", "cantar\xEDamos", "estar\xEDamos", "parar\xEDamos", "mandar\xEDamos", "llevar\xEDamos", "nadar\xEDamos", "cerrar\xEDamos", "enviar\xEDamos", "mostrar\xEDamos", "graduar\xEDamos", "dar\xEDamos", "almorzar\xEDamos", "comer\xEDamos", "creer\xEDamos", "beber\xEDamos", "vender\xEDamos", "conocer\xEDamos", "perder\xEDamos", "podr\xEDamos", "tendr\xEDamos", "escoger\xEDamos", "har\xEDamos", "pondr\xEDamos", "ver\xEDamos", "cabr\xEDamos", "traer\xEDamos", "ir\xEDamos", "dir\xEDamos", "dormir\xEDamos", "saldr\xEDamos", "vivir\xEDamos", "pedir\xEDamos", "mentir\xEDamos", "lucir\xEDamos", "distinguir\xEDamos", "destruir\xEDamos", "sentir\xEDamos", "describir\xEDamos", "preferir\xEDamos", "escribir\xEDamos"];

//array for vosotros conjugations
var vos = ["andar\xEDais", "bailar\xEDais", "cantar\xEDais", "estar\xEDais", "parar\xEDais", "mandar\xEDais", "llevar\xEDais", "nadar\xEDais", "cerrar\xEDais", "enviar\xEDais", "mostrar\xEDais", "graduar\xEDais", "dar\xEDais", "almorzar\xEDais", "comer\xEDais", "creer\xEDais", "beber\xEDais", "vender\xEDais", "conocer\xEDais", "perder\xEDais", "podr\xEDais", "tendr\xEDais", "escoger\xEDais", "har\xEDais", "pondr\xEDais", "ver\xEDais", "cabr\xEDais", "traer\xEDais", "ir\xEDais", "dir\xEDais", "dormir\xEDais", "saldr\xEDais", "vivir\xEDais", "pedir\xEDais", "mentir\xEDais", "lucir\xEDais", "distinguir\xEDais", "destruir\xEDais", "sentir\xEDais", "describir\xEDais", "preferir\xEDais", "escribir\xEDais"];

//array for ellos conjugations
var ellos = ["andar\xEDan", "bailar\xEDan", "cantar\xEDan", "estar\xEDan", "parar\xEDan", "mandar\xEDan", "llevar\xEDan", "nadar\xEDan", "cerrar\xEDan", "enviar\xEDan", "mostrar\xEDan", "graduar\xEDan", "dar\xEDan", "almorzar\xEDan", "comer\xEDan", "creer\xEDan", "beber\xEDan", "vender\xEDan", "conocer\xEDan", "perder\xEDan", "podr\xEDan", "tendr\xEDan", "escoger\xEDan", "har\xEDan", "pondr\xEDan", "ver\xEDan", "cabr\xEDan", "traer\xEDan", "ir\xEDan", "dir\xEDan", "dormir\xEDan", "saldr\xEDan", "vivir\xEDan", "pedir\xEDan", "mentir\xEDan", "lucir\xEDan", "distinguir\xEDan", "destruir\xEDan", "sentir\xEDan", "describir\xEDan", "preferir\xEDan", "escribir\xEDan"];    
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