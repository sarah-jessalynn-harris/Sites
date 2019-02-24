
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
var yo = [ "ando", "bailo", "canto", "estoy", "paro", "mando", "llevo", "nado", "cierro", "env\xEDo", "muestro", "grad\xFAo", "doy", "almuerzo", "como", "creo", "bebo", "vendo", "conozco", "pierdo", "puedo", "tengo", "escojo", "hago", "pongo", "veo", "quepo", "traigo", "voy", "digo", "duermo", "salgo", "vivo", "pido", "miento", "luzco", "distingo", "destruyo", "siento", "describo", "prefiero", "escribo"];

//array for tu conjugations
var tu = [ "andas", "bailas", "cantas", "est\xE1s", "paras", "mandas", "llevas", "nadas", "cierras", "env\xEDas", "muestras", "grad\xFAas", "das", "almuerzas", "comes", "crees", "bebes", "vendes", "conoces", "pierdes", "puedes", "tienes", "escoges", "haces", "pones", "ves", "cabes", "traes", "vas", "dices", "duermes", "sales", "vives", "pides", "mientes", "luces", "distingues", "destruyes", "sientes", "describes", "prefieres", "escribes"];

//array for el conjugations
var el = [ "anda", "baila", "canta", "est\xE1", "para", "manda", "lleva", "nada", "cierra", "env\xEDa", "muestra", "grad\xFAa", "da", "almuerza", "come", "cree", "bebe", "vende", "conoce", "pierde", "puede", "tiene", "escoge", "hace", "pone", "ve", "cabe", "trae", "va", "dice", "duerme", "sale", "vive", "pide", "miente", "luce", "distingue", "destruye", "siente", "describe", "prefiere", "escribe"];

//array for nosotros conjugations
var nos = [ "andamos", "bailamos", "cantamos", "estamos", "paramos", "mandamos", "llevamos", "nadamos", "cerramos", "enviamos", "mostramos", "graduamos", "damos", "almorzamos", "comemos", "creemos", "bebemos", "vendemos", "conocemos", "perdemos", "podemos", "tenemos", "escogemos", "hacemos", "ponemos", "vemos", "cabemos", "traemos", "vamos", "decimos", "dormimos", "salimos", "vivimos", "pedimos", "mentimos", "lucimos", "distinguimos", "destruimos", "sentimos", "describimos", "preferimos", "escribimos"];

//array for vosotros conjugations
var vos = [ "and\xE1is", "bail\xE1is", "cant\xE1is", "est\xE1is", "par\xE1is", "mand\xE1is", "llev\xE1is", "nad\xE1is", "cerr\xE1is", "envi\xE1is", "mostr\xE1is", "gradu\xE1is", "dais", "almorz\xE1is", "com\xE9is", "cre\xE9is", "beb\xE9is", "vend\xE9is", "conoc\xE9is", "perd\xE9is", "pod\xE9is", "ten\xE9is", "escog\xE9is", "hac\xE9is", "pon\xE9is", "veis", "cab\xE9is", "tra\xE9is", "v\xE1is", "dec\xEDs", "dorm\xEDs", "sal\xEDs", "viv\xEDs", "ped\xEDs", "ment\xEDs", "luc\xEDs", "distingu\xEDs", "destru\xEDs", "sent\xEDs", "describ\xEDs", "prefer\xEDs", "escrib\xEDs"];

//array for ellos conjugations
var ellos = [ "andan", "bailan", "cantan", "est\xE1n", "paran", "mandan", "llevan", "nadan", "cierran", "env\xEDan", "muestran", "grad\xFAan", "dan", "almuerzan", "comen", "creen", "beben", "venden", "conocen", "pierden", "pueden", "tienen", "escogen", "hacen", "ponen", "ven", "caben", "traen", "van", "dicen", "duermen", "salen", "viven", "piden", "mienten", "lucen", "distinguen", "destruyen", "sienten", "describen", "prefieren", "escriben"];

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