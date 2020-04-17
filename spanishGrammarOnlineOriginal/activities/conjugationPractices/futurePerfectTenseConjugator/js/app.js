
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
var inf = ["andar", "bailar", "cantar", "estar", "parar", "mandar", "llevar", "nadar", "cerrar", "enviar", "mostrar", "graduar", "dar", "almorzar",
"comer", "creer", "beber", "vender", "conocer", "perder", "poder", "tener", "escoger", "hacer", "poner", "ver", "caber", "traer", "ir", "decir", "dormir", "salir", "vivir", "pedir", "mentir", "lucir", "distinguir", "destruir", "sentir", "describir", "preferir", "escribir"];

//array for yo conjugations
var yo = ["habr\xE9 andado", "habr\xE9 bailado", "habr\xE9 cantado", "habr\xE9 estado", "habr\xE9 parado", "habr\xE9 mandado", "habr\xE9 llevado", "habr\xE9 nadado", "habr\xE9 cerrado", "habr\xE9 enviado", "habr\xE9 mostrado", "habr\xE9 graduado", "habr\xE9 dado", "habr\xE9 almorzado", "habr\xE9 comido", "habr\xE9 cre\xEDdo", "habr\xE9 bebido", "habr\xE9 vendido", "habr\xE9 conocido", "habr\xE9 perdido", "habr\xE9 podido", "habr\xE9 tenido", "habr\xE9 escogido", "habr\xE9 hecho", "habr\xE9 puesto", "habr\xE9 visto", "habr\xE9 cabido", "habr\xE9 tra\xEDdo", "habr\xE9 ido", "habr\xE9 dicho", "habr\xE9 dormido", "habr\xE9 salido", "habr\xE9 vivido", "habr\xE9 pedido", "habr\xE9 mentido", "habr\xE9 lucido", "habr\xE9 distinguido", "habr\xE9 destruido", "habr\xE9 sentido", "habr\xE9 descrito", "habr\xE9 preferido", "habr\xE9 escrito"];

//array for tu conjugations
var tu = ["habr\xE1s andado", "habr\xE1s bailado", "habr\xE1s cantado", "habr\xE1s estado", "habr\xE1s parado", "habr\xE1s mandado", "habr\xE1s llevado", "habr\xE1s nadado", "habr\xE1s cerrado", "habr\xE1s enviado", "habr\xE1s mostrado", "habr\xE1s graduado", "habr\xE1s dado", "habr\xE1s almorzado", "habr\xE1s comido", "habr\xE1s cre\xEDdo", "habr\xE1s bebido", "habr\xE1s vendido", "habr\xE1s conocido", "habr\xE1s perdido", "habr\xE1s podido", "habr\xE1s tenido", "habr\xE1s escogido", "habr\xE1s hecho", "habr\xE1s puesto", "habr\xE1s visto", "habr\xE1s cabido", "habr\xE1s tra\xEDdo", "habr\xE1s ido", "habr\xE1s dicho", "habr\xE1s dormido", "habr\xE1s salido", "habr\xE1s vivido", "habr\xE1s pedido", "habr\xE1s mentido", "habr\xE1s lucido", "habr\xE1s distinguido", "habr\xE1s destruido", "habr\xE1s sentido", "habr\xE1s descrito", "habr\xE1s preferido", "habr\xE1s escrito"];

//array for el conjugations
var el = ["habr\xE1 andado", "habr\xE1 bailado", "habr\xE1 cantado", "habr\xE1 estado", "habr\xE1 parado", "habr\xE1 mandado", "habr\xE1 llevado", "habr\xE1 nadado", "habr\xE1 cerrado", "habr\xE1 enviado", "habr\xE1 mostrado", "habr\xE1 graduado", "habr\xE1 dado", "habr\xE1 almorzado", "habr\xE1 comido", "habr\xE1 cre\xEDdo", "habr\xE1 bebido", "habr\xE1 vendido", "habr\xE1 conocido", "habr\xE1 perdido", "habr\xE1 podido", "habr\xE1 tenido", "habr\xE1 escogido", "habr\xE1 hecho", "habr\xE1 puesto", "habr\xE1 visto", "habr\xE1 cabido", "habr\xE1 tra\xEDdo", "habr\xE1 ido", "habr\xE1 dicho", "habr\xE1 dormido", "habr\xE1 salido", "habr\xE1 vivido", "habr\xE1 pedido", "habr\xE1 mentido", "habr\xE1 lucido", "habr\xE1 distinguido", "habr\xE1 destruido", "habr\xE1 sentido", "habr\xE1 descrito", "habr\xE1 preferido", "habr\xE1 escrito"];

//array for nosotros conjugations
var nos = ["habremos andado", "habremos bailado", "habremos cantado", "habremos estado", "habremos parado", "habremos mandado", "habremos llevado", "habremos nadado", "habremos cerrado", "habremos enviado", "habremos mostrado", "habremos graduado", "habremos dado", "habremos almorzado", "habremos comido", "habremos cre\xEDdo", "habremos bebido", "habremos vendido", "habremos conocido", "habremos perdido", "habremos podido", "habremos tenido", "habremos escogido", "habremos hecho", "habremos puesto", "habremos visto", "habremos cabido", "habremos tra\xEDdo", "habremos ido", "habremos dicho", "habremos dormido", "habremos salido", "habremos vivido", "habremos pedido", "habremos mentido", "habremos lucido", "habreamos distinguido", "habre\xEDamos destruido", "habremos sentido", "habremos descrito", "habremos preferido", "habremos escrito"];

//array for vosotros conjugations
var vos = ["habr\xE9is andado", "habr\xE9is bailado", "habr\xE9is cantado", "habr\xE9is estado", "habr\xE9is parado", "habr\xE9is mandado", "habr\xE9is llevado", "habr\xE9is nadado", "habr\xE9is cerrado", "habr\xE9is enviado", "habr\xE9is mostrado", "habr\xE9is graduado", "habr\xE9is dado", "habr\xE9is almorzado", "habr\xE9is comido", "habr\xE9is cre\xEDdo", "habr\xE9is bebido", "habr\xE9is vendido", "habr\xE9is conocido", "habr\xE9is perdido", "habr\xE9is podido", "habr\xE9is tenido", "habr\xE9is escogido", "habr\xE9is hecho", "habr\xE9is puesto", "habr\xE9is visto", "habr\xE9is cabido", "habr\xE9is tra\xEDdo", "habr\xE9is ido", "habr\xE9is dicho", "habr\xE9is dormido", "habr\xE9is salido", "habr\xE9is vivido", "habr\xE9is pedido", "habr\xE9is mentido", "habr\xE9is lucido", "habr\xE9is distinguido", "habr\xE9is destruido", "habr\xE9is sentido", "habr\xE9is descrito", "habr\xE9is preferido", "habr\xE9is escrito"];

//array for ellos conjugations
var ellos = ["habr\xE1n andado", "habr\xE1n bailado", "habr\xE1n cantado", "habr\xE1n estado", "habr\xE1n parado", "habr\xE1n mandado", "habr\xE1n llevado", "habr\xE1n nadado", "habr\xE1n cerrado", "habr\xE1n enviado", "habr\xE1n mostrado", "habr\xE1n graduado", "habr\xE1n dado", "habr\xE1n almorzado", "habr\xE1n comido", "habr\xE1n cre\xEDdo", "habr\xE1n bebido", "habr\xE1n vendido", "habr\xE1n conocido", "habr\xE1n perdido", "habr\xE1n podido", "habr\xE1n tenido", "habr\xE1n escogido", "habr\xE1n hecho", "habr\xE1n puesto", "habr\xE1n visto", "habr\xE1n cabido", "habr\xE1n tra\xEDdo", "habr\xE1n ido", "habr\xE1n dicho", "habr\xE1n dormido", "habr\xE1n salido", "habr\xE1n vivido", "habr\xE1n pedido", "habr\xE1n mentido", "habr\xE1n lucido", "habr\xE1n distinguido", "habr\xE1n destruido", "habr\xE1n sentido", "habr\xE1n descrito", "habr\xE1n preferido", "habr\xE1n escrito"]; 

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