
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
var yo = ["anduviera", "bailara", "cantara", "estuviera", "parara", "mandara", "llevara", "nadara", "cerrara", "enviara", "mostrara", "graduara", "diera", "almorzara", "comiera", "creyera", "bebiera", "vendiera", "conociera", "perdiera", "pudiera", "tuviera", "escogiera", "hiciera", "pusiera", "viera", "cupiera", "trajera", "fuera", "dijera", "durmiera", "saliera", "viviera", "pidiera", "mintiera", "luciera", "distinguiera", "destruyera", "sintiera", "describiera", "prefiriera", "escribiera"];

//array for tu conjugations
var tu = ["anduvieras", "bailaras", "cantaras", "estuvieras", "pararas", "mandaras", "llevaras", "nadaras", "cerraras", "enviaras", "mostraras", "graduaras", "dieras", "almorzaras", "comieras", "creyeras", "bebieras", "vendieras", "conocieras", "perdieras", "pudieras", "tuvieras", "escogieras", "hicieras", "pusieras", "vieras", "cupieras", "trajeras", "fueras", "dijeras", "durmieras", "salieras", "vivieras", "pidieras", "mintieras", "lucieras", "distinguieras", "destruyeras", "sintieras", "describieras", "prefirieras", "escribieras"];

//array for el conjugations
var el = ["anduviera", "bailara", "cantara", "estuviera", "parara", "mandara", "llevara", "nadara", "cerrara", "enviara", "mostrara", "graduara", "diera", "almorzara", "comiera", "creyera", "bebiera", "vendiera", "conociera", "perdiera", "pudiera", "tuviera", "escogiera", "hiciera", "pusiera", "viera", "cupiera", "trajera", "fuera", "dijera", "durmiera", "saliera", "viviera", "pidiera", "mintiera", "luciera", "distinguiera", "destruyera", "sintiera", "describiera", "prefiriera", "escribiera"];

//array for nosotros conjugations
var nos = ["anduvi\xE9ramos", "bail\xE1ramos", "cant\xE1ramos", "estuvi\xE9ramos", "par\xE1ramos", "mand\xE1ramos", "llev\xE1ramos", "nad\xE1ramos", "cerr\xE1ramos", "envi\xE1ramos", "mostr\xE1ramos", "gradu\xE1ramos", "di\xE9ramos", "almorz\xE1ramos", "comi\xE9ramos", "crey\xE9ramos", "bebi\xE9ramos", "vendi\xE9ramos", "conoci\xE9ramos", "perdi\xE9ramos", "pudi\xE9ramos", "tuvi\xE9ramos", "escogi\xE9ramos", "hici\xE9ramos", "pusi\xE9ramos", "vi\xE9ramos", "cupi\xE9ramos", "traj\xE9ramos", "fu\xE9ramos", "dij\xE9ramos", "durmi\xE9ramos", "sali\xE9ramos", "vivi\xE9ramos", "pidi\xE9ramos", "minti\xE9ramos", "luci\xE9ramos", "distingui\xE9ramos", "destruy\xE9ramos", "sinti\xE9ramos", "describi\xE9ramos", "prefiri\xE9ramos", "escribi\xE9ramos"];

//array for vosotros conjugations
var vos = ["anduvierais", "bailarais", "cantarais", "estuvierais", "pararais", "mandarais", "llevarais", "nadarais", "cerrarais", "enviarais", "mostrarais", "graduarais", "dierais", "almorzarais", "comierais", "creyerais", "bebierais", "vendierais", "conocierais", "perdierais", "pudierais", "tuvierais", "escogierais", "hicierais", "pusierais", "vierais", "cupierais", "trajerais", "fuerais", "dijerais", "durmierais", "salierais", "vivierais", "pidierais", "mintierais", "lucierais", "distinguierais", "destruyerais", "sintierais", "describierais", "prefirierais", "escribierais"];

//array for ellos conjugations
var ellos = ["anduvieran", "bailaran", "cantaran", "estuvieran", "pararan", "mandaran", "llevaran", "nadaran", "cerraran", "enviaran", "mostraran", "graduaran", "dieran", "almorzaran", "comieran", "creyeran", "bebieran", "vendiera", "conociera", "perdiera", "pudiera", "tuviera", "escogiera", "hiciera", "pusiera", "viera", "cupieran", "trajeran", "fueran", "dijeran", "durmieran", "salieran", "vivieran", "pidieran", "mintieran", "lucieran", "distinguieran", "destruyeran", "sintieran", "describieran", "prefirieran", "escribieran"];

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