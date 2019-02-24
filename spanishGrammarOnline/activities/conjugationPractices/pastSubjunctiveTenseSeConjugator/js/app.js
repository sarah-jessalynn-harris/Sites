
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
var yo = ["anduviese", "bailase", "cantase", "estuviese", "parase", "mandase", "llevase", "nadase", "cerrase", "enviase", "mostrase", "graduase", "diese", "almorzase", "comiese", "creyese", "bebiese", "vendiese", "conociese", "perdiese", "pudiese", "tuviese", "escogiese", "hiciese", "pusiese", "viese", "cupiese", "trajese", "fuese", "dijese", "durmiese", "saliese", "viviese", "pidiese", "mintiese", "luciese", "distinguiese", "destruyese", "sintiese", "describiese", "prefiriese", "escribiese"];

//array for tu conjugations
var tu = ["anduvieses", "bailases", "cantases", "estuvieses", "parases", "mandases", "llevases", "nadases", "cerrases", "enviases", "mostrases", "graduases", "dieses", "almorzases", "comieses", "creyeses", "bebieses", "vendieses", "conocieses", "perdieses", "pudieses", "tuvieses", "escogieses", "hicieses", "pusieses", "vieses", "cupieses", "trajeses", "fueses", "dijeses", "durmieses", "salieses", "vivieses", "pidieses", "mintieses", "lucieses", "distinguieses", "destruyeses", "sintieses", "describieses", "prefirieses", "escribieses"];

//array for el conjugations
var el = ["anduviese", "bailase", "cantase", "estuviese", "parase", "mandase", "llevase", "nadase", "cerrase", "enviase", "mostrase", "graduase", "diese", "almorzase", "comiese", "creyese", "bebiese", "vendiese", "conociese", "perdiese", "pudiese", "tuviese", "escogiese", "hiciese", "pusiese", "viese", "cupiese", "trajese", "fuese", "dijese", "durmiese", "saliese", "viviese", "pidiese", "mintiese", "luciese", "distinguiese", "destruyese", "sintiese", "describiese", "prefiriese", "escribiese"];

//array for nosotros conjugations
var nos = ["anduvi\xE9semos", "bail\xE1semos", "cant\xE1semos", "estuvi\xE9semos", "par\xE1semos", "mand\xE1semos", "llev\xE1semos", "nad\xE1semos", "cerr\xE1semos", "envi\xE1semos", "mostr\xE1semos", "gradu\xE1semos", "di\xE9semos", "almorz\xE1semos", "comi\xE9semos", "crey\xE9semos", "bebi\xE9semos", "vendi\xE9semos", "conoci\xE9semos", "perdi\xE9semos", "pudi\xE9semos", "tuvi\xE9semos", "escogi\xE9semos", "hici\xE9semos", "pusi\xE9semos", "vi\xE9semos", "cupi\xE9semos", "traj\xE9semos", "fu\xE9semos", "dij\xE9semos", "durmi\xE9semos", "sali\xE9semos", "vivi\xE9semos", "pidi\xE9semos", "minti\xE9semos", "luci\xE9semos", "distingui\xE9semos", "destruy\xE9semos", "sinti\xE9semos", "describi\xE9semos", "prefiri\xE9semos", "escribi\xE9semos"];

//array for vosotros conjugations
var vos = ["anduvieseis", "bailaseis", "cantaseis", "estuvieseis", "paraseis", "mandaseis", "llevaseis", "nadaseis", "cerraseis", "enviaseis", "mostraseis", "graduaseis", "dieseis", "almorzaseis", "comieseis", "creyeseis", "bebieseis", "vendieseis", "conocieseis", "perdieseis", "pudieseis", "tuvieseis", "escogieseis", "hicieseis", "pusieseis", "vieseis", "cupieseis", "trajeseis", "fueseis", "dijeseis", "durmieseis", "salieseis", "vivieseis", "pidieseis", "mintieseis", "lucieseis", "distinguieseis", "destruyeseis", "sintieseis", "describieseis", "prefirieseis", "escribieseis"];

//array for ellos conjugations
var ellos = ["anduviesen", "bailasen", "cantasen", "estuviesen", "parasen", "mandasen", "llevasen", "nadasen", "cerrasen", "enviasen", "mostrasen", "graduasen", "diesen", "almorzasen", "comiesen", "creyesen", "bebiesen", "vendiesen", "conociesen", "perdiesen", "pudiesen", "tuviesen", "escogiesen", "hiciesen", "pusiesen", "viesen", "cupiesen", "trajesen", "fuesen", "dijesen", "durmiesen", "saliesen", "viviesen", "pidiesen", "mintiesen", "luciesen", "distinguiesen", "destruyesen", "sintiesen", "describiesen", "prefiriesen", "escribiesen"];

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
