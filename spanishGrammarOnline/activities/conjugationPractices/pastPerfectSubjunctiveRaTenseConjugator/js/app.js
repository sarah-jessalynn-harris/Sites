
//variable set up for random infinitive
var numPick = 0;

//variable set up for random subject
var numPicker = 0;

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
var yo = ["hubiera andado", "hubiera bailado", "hubiera cantado", "hubiera estado", "hubiera parado", "hubiera mandado", "hubiera llevado", "hubiera nadado", "hubiera cerrado", "hubiera enviado", "hubiera mostrado", "hubiera graduado", "hubiera dado", "hubiera almorzado", "hubiera comido", "hubiera cre\xEDdo", "hubiera bebido", "hubiera vendido", "hubiera conocido", "hubiera perdido", "hubiera podido", "hubiera tenido", "hubiera escogido", "hubiera hecho", "hubiera puesto", "hubiera visto", "hubiera cabido", "hubiera tra\xEDdo", "hubiera ido", "hubiera dicho", "hubiera dormido", "hubiera salido", "hubiera vivido", "hubiera pedido", "hubiera mentido", "hubiera lucido", "hubiera distinguido", "hubiera destruido", "hubiera sentido", "hubiera descrito", "hubiera preferido", "hubiera escrito"];

//array for tu conjugations
var tu = ["hubieras andado", "hubieras bailado", "hubieras cantado", "hubieras estado", "hubieras parado", "hubieras mandado", "hubieras llevado", "hubieras nadado", "hubieras cerrado", "hubieras enviado", "hubieras mostrado", "hubieras graduado", "hubieras dado", "hubieras almorzado", "hubieras comido", "hubieras cre\xEDdo", "hubieras bebido", "hubieras vendido", "hubieras conocido", "hubieras perdido", "hubieras podido", "hubieras tenido", "hubieras escogido", "hubieras hecho", "hubieras puesto", "hubieras visto", "hubieras cabido", "hubieras tra\xEDdo", "hubieras ido", "hubieras dicho", "hubieras dormido", "hubieras salido", "hubieras vivido", "hubieras pedido", "hubieras mentido", "hubieras lucido", "hubieras distinguido", "hubieras destruido", "hubieras sentido", "hubieras descrito", "hubieras preferido", "hubieras escrito"];

//array for el conjugations
var el = ["hubiera andado", "hubiera bailado", "hubiera cantado", "hubiera estado", "hubiera parado", "hubiera mandado", "hubiera llevado", "hubiera nadado", "hubiera cerrado", "hubiera enviado", "hubiera mostrado", "hubiera graduado", "hubiera dado", "hubiera almorzado", "hubiera comido", "hubiera cre\xEDdo", "hubiera bebido", "hubiera vendido", "hubiera conocido", "hubiera perdido", "hubiera podido", "hubiera tenido", "hubiera escogido", "hubiera hecho", "hubiera puesto", "hubiera visto", "hubiera cabido", "hubiera tra\xEDdo", "hubiera ido", "hubiera dicho", "hubiera dormido", "hubiera salido", "hubiera vivido", "hubiera pedido", "hubiera mentido", "hubiera lucido", "hubiera distinguido", "hubiera destruido", "hubiera sentido", "hubiera descrito", "hubiera preferido", "hubiera escrito"];

//array for nosotros conjugations
var nos = ["hubi\xE9ramos andado", "hubi\xE9ramos bailado", "hubi\xE9ramos cantado", "hubi\xE9ramos estado", "hubi\xE9ramos parado", "hubi\xE9ramos mandado", "hubi\xE9ramos llevado", "hubi\xE9ramos nadado", "hubi\xE9ramos cerrado", "hubi\xE9ramos enviado", "hubi\xE9ramos mostrado", "hubi\xE9ramos graduado", "hubi\xE9ramos dado", "hubi\xE9ramos almorzado", "hubi\xE9ramos comido", "hubi\xE9ramos cre\xEDdo", "hubi\xE9ramos bebido", "hubi\xE9ramos vendido", "hubi\xE9ramos conocido", "hubi\xE9ramos perdido", "hubi\xE9ramos podido", "hubi\xE9ramos tenido", "hubi\xE9ramos escogido", "hubi\xE9ramos hecho", "hubi\xE9ramos puesto", "hubi\xE9ramos visto", "hubi\xE9ramos cabido", "hubi\xE9ramos tra\xEDdo", "hubi\xE9ramos ido", "hubi\xE9ramos dicho", "hubi\xE9ramos dormido", "hubi\xE9ramos salido", "hubi\xE9ramos vivido", "hubi\xE9ramos pedido", "hubi\xE9ramos mentido", "hubi\xE9ramos lucido", "hubi\xE9ramos distinguido", "hubi\xE9ramos destruido", "hubi\xE9ramos sentido", "hubi\xE9ramos descrito", "hubi\xE9ramos preferido", "hubi\xE9ramos escrito"];

//array for vosotros conjugations
var vos = ["hubierais andado", "hubierais bailado", "hubierais cantado", "hubierais estado", "hubierais parado", "hubierais mandado", "hubierais llevado", "hubierais nadado", "hubierais cerrado", "hubierais enviado", "hubierais mostrado", "hubierais graduado", "hubierais dado", "hubierais almorzado", "hubierais comido", "hubierais cre\xEDdo", "hubierais bebido", "hubierais vendido", "hubierais conocido", "hubierais perdido", "hubierais podido", "hubierais tenido", "hubierais escogido", "hubierais hecho", "hubierais puesto", "hubierais visto", "hubierais cabido", "hubierais tra\xEDdo", "hubierais ido", "hubierais dicho", "hubierais dormido", "hubierais salido", "hubierais vivido", "hubierais pedido", "hubierais mentido", "hubierais lucido", "hubierais distinguido", "hubierais destruido", "hubierais sentido", "hubierais descrito", "hubierais preferido", "hubierais escrito"];

//array for ellos conjugations
var ellos = ["hubieran andado", "hubieran bailado", "hubieran cantado", "hubieran estado", "hubieran parado", "hubieran mandado", "hubieran llevado", "hubieran nadado", "hubieran cerrado", "hubieran enviado", "hubieran mostrado", "hubieran graduado", "hubieran dado", "hubieran almorzado", "hubieran comido", "hubieran cre\xEDdo", "hubieran bebido", "hubieran vendido", "hubieran conocido", "hubieran perdido", "hubieran podido", "hubieran tenido", "hubieran escogido", "hubieran hecho", "hubieran puesto", "hubieran visto", "hubieran cabido", "hubieran tra\xEDdo", "hubieran ido", "hubieran dicho", "hubieran dormido", "hubieran salido", "hubieran vivido", "hubieran pedido", "hubieran mentido", "hubieran lucido", "hubieran distinguido", "hubieran destruido", "hubieran sentido", "hubieran descrito", "hubieran preferido", "hubieran escrito"];
        
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