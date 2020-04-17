
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
var yo = [ "hube andado", "hube bailado", "hube cantado", "hube estado", "hube parado", "hube mandado", "hube llevado", "hube nadado", "hube cerrado", "hube enviado", "hube mostrado", "hube graduado", "hube dado", "hube almorzado", "hube comido", "hube cre\xEDdo", "hube bebido", "hube vendido", "hube conocido", "hube perdido", "hube podido", "hube tenido", "hube escogido", "hube hecho", "hube puesto", "hube visto", "hube cabido", "hube tra\xEDdo", "hube ido", "hube dicho", "hube dormido", "hube salido", "hube vivido", "hube pedido", "hube mentido", "hube lucido", "hube distinguido", "hube destruido", "hube sentido", "hube descrito", "hube preferido", "hube escrito"];

//array for tu conjugations
var tu = ["hubiste andado", "hubiste bailado", "hubiste cantado", "hubiste estado", "hubiste parado", "hubiste mandado", "hubiste llevado", "hubiste nadado", "hubiste cerrado", "hubiste enviado", "hubiste mostrado", "hubiste graduado", "hubiste dado", "hubiste almorzado", "hubiste comido", "hubiste cre\xEDdo", "hubiste bebido", "hubiste vendido", "hubiste conocido", "hubiste perdido", "hubiste podido", "hubiste tenido", "hubiste escogido", "hubiste hecho", "hubiste puesto", "hubiste visto", "hubiste cabido", "hubiste tra\xEDdo", "hubiste ido", "hubiste dicho", "hubiste dormido", "hubiste salido", "hubiste vivido", "hubiste pedido", "hubiste mentido", "hubiste lucido", "hubiste distinguido", "hubiste destruido", "hubiste sentido", "hubiste descrito", "hubiste preferido", "hubiste escrito"];

//array for el conjugations
var el = [ "hubo andado", "hubo bailado", "hubo cantado", "hubo estado", "hubo parado", "hubo mandado", "hubo llevado", "hubo nadado", "hubo cerrado", "hubo enviado", "hubo mostrado", "hubo graduado", "hubo dado", "hubo almorzado", "hubo comido", "hubo cre\xEDdo", "hubo bebido", "hubo vendido", "hubo conocido", "hubo perdido", "hubo podido", "hubo tenido", "hubo escogido", "hubo hecho", "hubo puesto", "hubo visto", "hubo cabido", "hubo tra\xEDdo", "hubo ido", "hubo dicho", "hubo dormido", "hubo salido", "hubo vivido", "hubo pedido", "hubo mentido", "hubo lucido", "hubo distinguido", "hubo destruido", "hubo sentido", "hubo descrito", "hubo preferido", "hubo escrito"];

//array for nosotros conjugations
var nos = [ "hubimos andado", "hubimos bailado", "hubimos cantado", "hubimos estado", "hubimos parado", "hubimos mandado", "hubimos llevado", "hubimos nadado", "hubimos cerrado", "hubimos enviado", "hubimos mostrado", "hubimos graduado", "hubimos dado", "hubimos almorzado", "hubimos comido", "hubimos cre\xEDdo", "hubimos bebido", "hubimos vendido", "hubimos conocido", "hubimos perdido", "hubimos podido", "hubimos tenido", "hubimos escogido", "hubimos hecho", "hubimos puesto", "hubimos visto", "hubimos cabido", "hubimos tra\xEDdo", "hubimos ido", "hubimos dicho", "hubimos dormido", "hubimos salido", "hubimos vivido", "hubimos pedido", "hubimos mentido", "hubimos lucido", "hubimos distinguido", "hubimos destruido", "hubimos sentido", "hubimos descrito", "hubimos preferido", "hubimos escrito"];

//array for vosotros conjugations
var vos = ["hubisteis andado", "hubisteis bailado", "hubisteis cantado", "hubisteis estado", "hubisteis parado", "hubisteis mandado", "hubisteis llevado", "hubisteis nadado", "hubisteis cerrado", "hubisteis enviado", "hubisteis mostrado", "hubisteis graduado", "hubisteis dado", "hubisteis almorzado", "hubisteis comido", "hubisteis cre\xEDdo", "hubisteis bebido", "hubisteis vendido", "hubisteis conocido", "hubisteis perdido", "hubisteis podido", "hubisteis tenido", "hubisteis escogido", "hubisteis hecho", "hubisteis puesto", "hubisteis visto", "hubisteis cabido", "hubisteis tra\xEDdo", "hubisteis ido", "hubisteis dicho", "hubisteis dormido", "hubisteis salido", "hubisteis vivido", "hubisteis pedido", "hubisteis mentido", "hubisteis lucido", "hubisteis distinguido", "hubisteis destruido", "hubisteis sentido", "hubisteis descrito", "hubisteis preferido", "hubisteis escrito"];

//array for ellos conjugations
var ellos = ["hubieron andado", "hubieron bailado", "hubieron cantado", "hubieron estado", "hubieron parado", "hubieron mandado", "hubieron llevado", "hubieron nadado", "hubieron cerrado", "hubieron enviado", "hubieron mostrado", "hubieron graduado", "hubieron dado", "hubieron almorzado", "hubieron comido", "hubieron cre\xEDdo", "hubieron bebido", "hubieron vendido", "hubieron conocido", "hubieron perdido", "hubieron podido", "hubieron tenido", "hubieron escogido", "hubieron hecho", "hubieron puesto", "hubieron visto", "hubieron cabido", "hubieron tra\xEDdo", "hubieron ido", "hubieron dicho", "hubieron dormido", "hubieron salido", "hubieron vivido", "hubieron pedido", "hubieron mentido", "hubieron lucido", "hubieron distinguido", "hubieron destruido", "hubieron sentido", "hubieron descrito", "hubieron preferido", "hubieron escrito"]; 

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