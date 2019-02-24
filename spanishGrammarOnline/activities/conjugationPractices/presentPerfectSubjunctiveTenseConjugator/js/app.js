
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
var yo = ["haya andado", "haya bailado", "haya cantado", "haya estado", "haya parado", "haya mandado", "haya llevado", "haya nadado", "haya cerrado", "haya enviado", "haya mostrado", "haya graduado", "haya dado", "haya almorzado", "haya comido", "haya cre\xEDdo", "haya bebido", "haya vendido", "haya conocido", "haya perdido", "haya podido", "haya tenido", "haya escogido", "haya hecho", "haya puesto", "haya visto", "haya cabido", "haya tra\xEDdo", "haya ido", "haya dicho", "haya dormido", "haya salido", "haya vivido", "haya pedido", "haya mentido", "haya lucido", "haya distinguido", "haya destruido", "haya sentido", "haya descrito", "haya preferido", "haya escrito"];

//array for tu conjugations
var tu = ["hayas andado", "hayas bailado", "hayas cantado", "hayas estado", "hayas parado", "hayas mandado", "hayas llevado", "hayas nadado", "hayas cerrado", "hayas enviado", "hayas mostrado", "hayas graduado", "hayas dado", "hayas almorzado", "hayas comido", "hayas cre\xEDdo", "hayas bebido", "hayas vendido", "hayas conocido", "hayas perdido", "hayas podido", "hayas tenido", "hayas escogido", "hayas hecho", "hayas puesto", "hayas visto", "hayas cabido", "hayas tra\xEDdo", "hayas ido", "hayas dicho", "hayas dormido", "hayas salido", "hayas vivido", "hayas pedido", "hayas mentido", "hayas lucido", "hayas distinguido", "hayas destruido", "hayas sentido", "hayas descrito", "hayas preferido", "hayas escrito"];

//array for el conjugations
var el = ["haya andado", "haya bailado", "haya cantado", "haya estado", "haya parado", "haya mandado", "haya llevado", "haya nadado", "haya cerrado", "haya enviado", "haya mostrado", "haya graduado", "haya dado", "haya almorzado", "haya comido", "haya cre\xEDdo", "haya bebido", "haya vendido", "haya conocido", "haya perdido", "haya podido", "haya tenido", "haya escogido", "haya hecho", "haya puesto", "haya visto", "haya cabido", "haya tra\xEDdo", "haya ido", "haya dicho", "haya dormido", "haya salido", "haya vivido", "haya pedido", "haya mentido", "haya lucido", "haya distinguido", "haya destruido", "haya sentido", "haya descrito", "haya preferido", "haya escrito"];

//array for nosotros conjugations
var nos = ["hayamos andado", "hayamos bailado", "hayamos cantado", "hayamos estado", "hayamos parado", "hayamos mandado", "hayamos llevado", "hayamos nadado", "hayamos cerrado", "hayamos enviado", "hayamos mostrado", "hayamos graduado", "hayamos dado", "hayamos almorzado", "hayamos comido", "hayamos cre\xEDdo", "hayamos bebido", "hayamos vendido", "hayamos conocido", "hayamos perdido", "hayamos podido", "hayamos tenido", "hayamos escogido", "hayamos hecho", "hayamos puesto", "hayamos visto", "hayamos cabido", "hayamos tra\xEDdo", "hayamos ido", "hayamos dicho", "hayamos dormido", "hayamos salido", "hayamos vivido", "hayamos pedido", "hayamos mentido", "hayamos lucido", "hayamos distinguido", "hayamos destruido", "hayamos sentido", "hayamos descrito", "hayamos preferido", "hayamos escrito"];

//array for vosotros conjugations
var vos = ["hay\xE1is andado", "hay\xE1is bailado", "hay\xE1is cantado", "hay\xE1is estado", "hay\xE1is parado", "hay\xE1is mandado", "hay\xE1is llevado", "hay\xE1is nadado", "hay\xE1is cerrado", "hay\xE1is enviado", "hay\xE1is mostrado", "hay\xE1is graduado", "hay\xE1is dado", "hay\xE1is almorzado", "hay\xE1is comido", "hay\xE1is cre\xEDdo", "hay\xE1is bebido", "hay\xE1is vendido", "hay\xE1is conocido", "hay\xE1is perdido", "hay\xE1is podido", "hay\xE1is tenido", "hay\xE1is escogido", "hay\xE1is hecho", "hay\xE1is puesto", "hay\xE1is visto", "hay\xE1is cabido", "hay\xE1is tra\xEDdo", "hay\xE1is ido", "hay\xE1is dicho", "hay\xE1is dormido", "hay\xE1is salido", "hay\xE1is vivido", "hay\xE1is pedido", "hay\xE1is mentido", "hay\xE1is lucido", "hay\xE1is distinguido", "hay\xE1is destruido", "hay\xE1is sentido", "hay\xE1is descrito", "hay\xE1is preferido", "hay\xE1is escrito"];

//array for ellos conjugations
var ellos = ["hayan andado", "hayan bailado", "hayan cantado", "hayan estado", "hayan parado", "hayan mandado", "hayan llevado", "hayan nadado", "hayan cerrado", "hayan enviado", "hayan mostrado", "hayan graduado", "hayan dado", "hayan almorzado", "hayan comido", "hayan cre\xEDdo", "hayan bebido", "hayan vendido", "hayan conocido", "hayan perdido", "hayan podido", "hayan tenido", "hayan escogido", "hayan hecho", "hayan puesto", "hayan visto", "hayan cabido", "hayan tra\xEDdo", "hayan ido", "hayan dicho", "hayan dormido", "hayan salido", "hayan vivido", "hayan pedido", "hayan mentido", "hayan lucido", "hayan distinguido", "hayan destruido", "hayan sentido", "hayan descrito", "hayan preferido", "hayan escrito"]; 

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
