
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
var yo = ["ande", "baile", "cante", "est\xE9", "pare", "mande", "lleve", "nade", "cierre", "env\xEDe", "muestre", "grad\xFAe", "d\xE9", "almuerce", "coma", "crea", "beba", "venda", "conozca", "pierda", "pueda", "tenga", "escoja", "haga", "ponga", "vea", "quepa", "traiga", "vaya", "diga", "duerma", "salga", "viva", "pida", "mienta", "luzca", "distinga", "destruya", "sienta", "describa", "prefiera", "escriba"];

//array for tu conjugations
var tu = ["andes", "bailes", "cantes", "est\xE9s", "pares", "mandes", "lleves", "nades", "cierres", "env\xEDes", "muestres", "grad\xFAes", "des", "almuerces", "comas", "creas", "bebas", "vendas", "conozcas", "pierdas", "puedas", "tengas", "escojas", "hagas", "pongas", "veas", "quepas", "traigas", "vayas", "digas", "duermas", "salgas", "vivas", "pidas", "mientas", "luzcas", "distingas", "destruyas", "sientas", "describas", "prefieras", "escribas"];

//array for el conjugations
var el = ["ande", "baile", "cante", "est\xE9", "pare", "mande", "lleve", "nade", "cierre", "env\xEDe", "muestre", "grad\xFAe", "d\xE9", "almuerce", "coma", "crea", "beba", "venda", "conozca", "pierda", "pueda", "tenga", "escoja", "haga", "ponga", "vea", "quepa", "traiga", "vaya", "diga", "duerma", "salga", "viva", "pida", "mienta", "luzca", "distinga", "destruya", "sienta", "describa", "prefiera", "escriba"];

//array for nosotros conjugations
var nos = ["andemos", "bailemos", "cantemos", "estemos", "paremos", "mandemos", "llevemos", "nademos", "cerremos", "enviemos", "mostremos", "graduemos", "demos", "almorcemos", "comamos", "creamos", "bebamos", "vendamos", "conozcamos", "perdamos", "podamos", "tengamos", "escojamos", "hagamos", "pongamos", "veamos", "quepamos", "traigamos", "vayamos", "digamos", "durmamos", "salgamos", "vivamos", "pidamos", "mintamos", "luzcamos", "distingamos", "destruyamos", "sintamos", "describamos", "prefiramos", "escribamos"];

//array for vosotros conjugations
var vos = ["and\xE9is", "bail\xE9is", "cant\xE9is", "est\xE9is", "par\xE9is", "mand\xE9is", "llev\xE9is", "nad\xE9is", "cerr\xE9is", "envi\xE9is", "mostr\xE9is", "gradu\xE9is", "deis", "almorc\xE9is", "com\xE1is", "cre\xE1is", "beb\xE1is", "vend\xE1is", "conozc\xE1is", "perd\xE1is", "pod\xE1is", "teng\xE1is", "escoj\xE1is", "hag\xE1is", "pong\xE1is", "ve\xE1is", "quep\xE1is", "traig\xE1is", "vay\xE1is", "dig\xE1is", "durm\xE1is", "salg\xE1is", "viv\xE1is", "pid\xE1is", "mint\xE1is", "luzc\xE1is", "disting\xE1is", "destruy\xE1is", "sint\xE1is", "describ\xE1is", "prefir\xE1is", "escrib\xE1is"];

//array for ellos conjugations
var ellos = ["anden", "bailen", "canten", "est\xE9n", "paren", "manden", "lleven", "naden", "cierren", "env\xEDen", "muestren", "grad\xFAen", "den", "almuercen", "coman", "crean", "beban", "vendan", "conozcan", "pierdan", "puedan", "tengan", "escojan", "hagan", "pongan", "vean", "quepan", "traigan", "vayan", "digan", "duerman", "salgan", "vivan", "pidan", "mientan", "luzcan", "distingan", "destruyan", "sientan", "describan", "prefieran", "escriban"];

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