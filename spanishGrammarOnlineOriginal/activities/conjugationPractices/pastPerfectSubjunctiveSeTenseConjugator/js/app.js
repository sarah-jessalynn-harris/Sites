
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
var yo = ["hubiese andado", "hubiese bailado", "hubiese cantado", "hubiese estado", "hubiese parado", "hubiese mandado", "hubiese llevado", "hubiese nadado", "hubiese cerrado", "hubiese enviado", "hubiese mostrado", "hubiese graduado", "hubiese dado", "hubiese almorzado", "hubiese comido", "hubiese cre\xEDdo", "hubiese bebido", "hubiese vendido", "hubiese conocido", "hubiese perdido", "hubiese podido", "hubiese tenido", "hubiese escogido", "hubiese hecho", "hubiese puesto", "hubiese visto", "hubiese cabido", "hubiese tra\xEDdo", "hubiese ido", "hubiese dicho", "hubiese dormido", "hubiese salido", "hubiese vivido", "hubiese pedido", "hubiese mentido", "hubiese lucido", "hubiese distinguido", "hubiese destruido", "hubiese sentido", "hubiese descrito", "hubiese preferido", "hubiese escrito"];

//array for tu conjugations
var tu = ["hubieses andado", "hubieses bailado", "hubieses cantado", "hubieses estado", "hubieses parado", "hubieses mandado", "hubieses llevado", "hubieses nadado", "hubieses cerrado", "hubieses enviado", "hubieses mostrado", "hubieses graduado", "hubieses dado", "hubieses almorzado", "hubieses comido", "hubieses cre\xEDdo", "hubiese bebido", "hubieses vendido", "hubieses conocido", "hubieses perdido", "hubieses podido", "hubieses tenido", "hubieses escogido", "hubieses hecho", "hubieses puesto", "hubieses visto", "hubieses cabido", "hubieses tra\xEDdo", "hubieses ido", "hubieses dicho", "hubieses dormido", "hubieses salido", "hubieses vivido", "hubieses pedido", "hubieses mentido", "hubieses lucido", "hubieses distinguido", "hubieses destruido", "hubieses sentido", "hubieses descrito", "hubieses preferido", "hubieses escrito"];

//array for el conjugations
var el = ["hubiese andado", "hubiese bailado", "hubiese cantado", "hubiese estado", "hubiese parado", "hubiese mandado", "hubiese llevado", "hubiese nadado", "hubiese cerrado", "hubiese enviado", "hubiese mostrado", "hubiese graduado", "hubiese dado", "hubiese almorzado", "hubiese comido", "hubiese cre\xEDdo", "hubiese bebido", "hubiese vendido", "hubiese conocido", "hubiese perdido", "hubiese podido", "hubiese tenido", "hubiese escogido", "hubiese hecho", "hubiese puesto", "hubiese visto", "hubiese cabido", "hubiese tra\xEDdo", "hubiese ido", "hubiese dicho", "hubiese dormido", "hubiese salido", "hubiese vivido", "hubiese pedido", "hubiese mentido", "hubiese lucido", "hubiese distinguido", "hubiese destruido", "hubiese sentido", "hubiese descrito", "hubiese preferido", "hubiese escrito"];

//array for nosotros conjugations
var nos = ["hubi\xE9semos andado", "hubi\xE9semos bailado", "hubi\xE9semos cantado", "hubi\xE9semos estado", "hubi\xE9semos parado", "hubi\xE9semos mandado", "hubi\xE9semos llevado", "hubi\xE9semos nadado", "hubi\xE9semos cerrado", "hubi\xE9semos enviado", "hubi\xE9semos mostrado", "hubi\xE9semos graduado", "hubi\xE9semos dado", "hubi\xE9semos almorzado", "hubi\xE9semos comido", "hubi\xE9semos cre\xEDdo", "hubi\xE9semos bebido", "hubi\xE9semos vendido", "hubi\xE9semos conocido", "hubi\xE9semos perdido", "hubi\xE9semos podido", "hubi\xE9semos tenido", "hubi\xE9semos escogido", "hubi\xE9semos hecho", "hubi\xE9semos puesto", "hubi\xE9semos visto", "hubi\xE9semos cabido", "hubi\xE9semos tra\xEDdo", "hubi\xE9semos ido", "hubi\xE9semos dicho", "hubi\xE9semos dormido", "hubi\xE9semos salido", "hubi\xE9semos vivido", "hubi\xE9semos pedido", "hubi\xE9semos mentido", "hubi\xE9semos lucido", "hubi\xE9semos distinguido", "hubi\xE9semos destruido", "hubi\xE9semos sentido", "hubi\xE9semos descrito", "hubi\xE9semos preferido", "hubi\xE9semos escrito"];

//array for vosotros conjugations
var vos = ["hubieseis andado", "hubieseis bailado", "hubieseis cantado", "hubieseis estado", "hubieseis parado", "hubieseis mandado", "hubieseis llevado", "hubieseis nadado", "hubieseis cerrado", "hubieseis enviado", "hubieseis mostrado", "hubieseis graduado", "hubieseis dado", "hubieseis almorzado", "hubieseis comido", "hubieseis cre\xEDdo", "hubieseis bebido", "hubieseis vendido", "hubieseis conocido", "hubieseis perdido", "hubieseis podido", "hubieseis tenido", "hubieseis escogido", "hubieseis hecho", "hubieseis puesto", "hubieseis visto", "hubieseis cabido", "hubieseis tra\xEDdo", "hubieseis ido", "hubieseis dicho", "hubieseis dormido", "hubieseis salido", "hubieseis vivido", "hubieseis pedido", "hubieseis mentido", "hubieseis lucido", "hubieseis distinguido", "hubieseis destruido", "hubieseis sentido", "hubieseis descrito", "hubieseis preferido", "hubieseis escrito"];

//array for ellos conjugations
var ellos = ["hubiesen andado", "hubiesen bailado", "hubiesen cantado", "hubiesen estado", "hubiesen parado", "hubiesen mandado", "hubiesen llevado", "hubiesen nadado", "hubiesen cerrado", "hubiesen enviado", "hubiesen mostrado", "hubiesen graduado", "hubiesen dado", "hubiesen almorzado", "hubiesen comido", "hubiesen cre\xEDdo", "hubiesen bebido", "hubiesen vendido", "hubiesen conocido", "hubiesen perdido", "hubiesen podido", "hubiesen tenido", "hubiesen escogido", "hubiesen hecho", "hubiesen puesto", "hubiesen visto", "hubiesen cabido", "hubiesen tra\xEDdo", "hubiesen ido", "hubiesen dicho", "hubiesen dormido", "hubiesen salido", "hubiesen vivido", "hubiesen pedido", "hubiesen mentido", "hubiesen lucido", "hubiesen distinguido", "hubiesen destruido", "hubiesen sentido", "hubiesen descrito", "hubiesen preferido", "hubiesen escrito"];

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