
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
var yo = ["anduve", "bail\xE9", "cant\xE9", "estuve", "par\xE9", "mand\xE9", "llev\xE9", "nad\xE9", "cerr\xE9", "envi\xE9", "mostr\xE9", "gradu\xE9", "di", "almorc\xE9", "com\xED", "cre\xED", "beb\xED", "vend\xED", "conoc\xED", "perd\xED", "pude", "tuve", "escog\xED", "hice", "puse", "vi", "cupe", "traje", "fui", "dije", "dorm\xED", "sal\xED", "viv\xED", "ped\xED", "ment\xED", "luc\xED", "distingu\xED", "destru\xED", "sent\xED", "describ\xED", "prefer\xED", "escrib\xED"];

//array for tu conjugations
var tu = [ "andaste", "bailaste", "cantaste", "estuviste", "paraste", "mandaste", "llevaste", "nadaste", "cerraste", "enviaste", "mostraste", "graduaste", "diste", "almorzaste", "comiste", "cre\xEDste", "bebiste", "vendis\xED", "conocis\xED", "perdis\xED", "pudiste", "tuviste", "escogiste", "hiciste", "pusiste", "viste", "cupiste", "tra\xEDste", "fuiste", "dijiste", "dormiste", "saliste", "viviste", "pudiste", "mentiste", "luciste", "distinguiste", "destruiste", "sentiste", "describiste", "preferiste", "escribiste"];

//array for el conjugations
var el = ["anduvo", "bail\xF3", "cant\xF3", "estuvo", "par\xF3", "mand\xF3", "llev\xF3", "nad\xF3", "cerr\xF3", "envi\xF3", "mostr\xF3", "gradu\xF3", "dio", "almorz\xF3", "comi\xF3", "crey\xF3", "bebi\xF3", "vendi\xF3", "conoci\xF3", "perdi\xF3", "pudo", "tuvo", "escogi\xF3", "hizo", "puso", "vio", "cupo", "trajo", "fue", "dijo", "durmi\xF3", "sali\xF3", "vivi\xF3", "pidi\xF3", "minti\xF3", "luci\xF3", "distingui\xF3", "destruy\xF3", "sinti\xF3", "describi\xF3", "prefiri\xF3", "escribi\xF3"];

//array for nosotros conjugations
var nos = [ "anduvimos", "bailamos", "cantamos", "estamos", "paramos", "mandamos", "llevamos", "nadamos", "cerramos", "enviamos", "mostramos", "graduamos", "dimos", "almorzamos", "comimos", "cre\xEDmos", "bebimos", "vendimos", "conocimos", "perdimos", "pudimos", "tuvimos", "escogimos", "hicimos", "pusimos", "vimos", "cupimos", "trajimos", "fuimos", "dijimos", "dormimos", "salimos", "vivimos", "pedimos", "mentimos", "lucimos", "distinguimos", "destruimos", "sentimos", "describimos", "preferimos", "escribimos"];

//array for vosotros conjugations
var vos = ["anduvisteis", "bailasteis", "cantasteis", "estuvisteis", "parasteis", "mandasteis", "llevasteis", "nadasteis", "cerrasteis", "enviasteis", "mostrasteis", "graduasteis", "disteis", "almorzasteis", "comisteis", "cre\xEDsteis", "bebisteis", "vendisteis", "conocisteis", "perdisteis", "pudisteis", "tuvisteis", "escogisteis", "hicimos", "pusimos", "visteis", "cupimos", "trajimos", "fuisteis", "dijisteis", "dormisteis", "salisteis", "vivisteis", "pedisteis", "mentisteis", "lucisteis", "distinguisteis", "destruisteis", "sentisteis", "describisteis", "preferisteis", "escribisteis"];

//array for ellos conjugations
var ellos = ["anduvieron", "bailaron", "cantaron", "estuvieron", "pararon", "mandaron", "llevaron", "nadaron", "cerraron", "enviaron", "mostraron", "graduaron", "dieron", "almorzaron", "comieron", "creyeron", "bebieron", "vendieron", "conocieron", "perdieron", "pudieron", "tuvieron", "escogieron", "hicieron", "pusieron", "vieron", "cupieron", "trajeron", "fueron", "dijeron", "durmieron", "salieron", "vivieron", "pidieron", "mintieron", "lucieron", "distinguieron", "destruyeron", "sintieron", "describieron", "prefirieron", "escribieron"];

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