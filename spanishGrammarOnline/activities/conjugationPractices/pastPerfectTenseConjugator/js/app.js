
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
var yo = ["hab\xEDa andado", "hab\xEDa bailado", "hab\xEDa cantado", "hab\xEDa estado", "hab\xEDa parado", "hab\xEDa mandado", "hab\xEDa llevado", "hab\xEDa nadado", "hab\xEDa cerrado", "hab\xEDa enviado", "hab\xEDa mostrado", "hab\xEDa graduado", "hab\xEDa dado", "hab\xEDa almorzado", "hab\xEDa comido", "hab\xEDa cre\xEDdo", "hab\xEDa bebido", "hab\xEDa vendido", "hab\xEDa conocido", "hab\xEDa perdido", "hab\xEDa podido", "hab\xEDa tenido", "hab\xEDa escogido", "hab\xEDa hecho", "hab\xEDa puesto", "hab\xEDa visto", "hab\xEDa cabido", "hab\xEDa tra\xEDdo", "hab\xEDa ido", "hab\xEDa dicho", "hab\xEDa dormido", "hab\xEDa salido", "hab\xEDa vivido", "hab\xEDa pedido", "hab\xEDa mentido", "hab\xEDa lucido", "hab\xEDa distinguido", "hab\xEDa destruido", "hab\xEDa sentido", "hab\xEDa descrito", "hab\xEDa preferido", "hab\xEDa escrito"];

//array for tu conjugations
var tu = ["hab\xEDas andado", "hab\xEDas bailado", "hab\xEDas cantado", "hab\xEDas estado", "hab\xEDas parado", "hab\xEDas mandado", "hab\xEDas llevado", "hab\xEDas nadado", "hab\xEDas cerrado", "hab\xEDas enviado", "hab\xEDas mostrado", "hab\xEDas graduado", "hab\xEDas dado", "hab\xEDas almorzado", "hab\xEDas comido", "hab\xEDas cre\xEDdo", "hab\xEDas bebido", "hab\xEDas vendido", "hab\xEDas conocido", "hab\xEDas perdido", "hab\xEDas podido", "hab\xEDas tenido", "hab\xEDas escogido", "hab\xEDas hecho", "hab\xEDas puesto", "hab\xEDas visto", "hab\xEDas cabido", "hab\xEDas tra\xEDdo", "hab\xEDas ido", "hab\xEDas dicho", "hab\xEDas dormido", "hab\xEDas salido", "hab\xEDas vivido", "hab\xEDas pedido", "hab\xEDas mentido", "hab\xEDas lucido", "hab\xEDas distinguido", "hab\xEDas destruido", "hab\xEDas sentido", "hab\xEDas descrito", "hab\xEDas preferido", "hab\xEDas escrito"];

//array for el conjugations
var el = ["hab\xEDa andado", "hab\xEDa bailado", "hab\xEDa cantado", "hab\xEDa estado", "hab\xEDa parado", "hab\xEDa mandado", "hab\xEDa llevado", "hab\xEDa nadado", "hab\xEDa cerrado", "hab\xEDa enviado", "hab\xEDa mostrado", "hab\xEDa graduado", "hab\xEDa dado", "hab\xEDa almorzado", "hab\xEDa comido", "hab\xEDa cre\xEDdo", "hab\xEDa bebido", "hab\xEDa vendido", "hab\xEDa conocido", "hab\xEDa perdido", "hab\xEDa podido", "hab\xEDa tenido", "hab\xEDa escogido", "hab\xEDa hecho", "hab\xEDa puesto", "hab\xEDa visto", "hab\xEDa cabido", "hab\xEDa tra\xEDdo", "hab\xEDa ido", "hab\xEDa dicho", "hab\xEDa dormido", "hab\xEDa salido", "hab\xEDa vivido", "hab\xEDa pedido", "hab\xEDa mentido", "hab\xEDa lucido", "hab\xEDa distinguido", "hab\xEDa destruido", "hab\xEDa sentido", "hab\xEDa descrito", "hab\xEDa preferido", "hab\xEDa escrito"];

//array for nosotros conjugations
var nos = ["hab\xEDamos andado", "hab\xEDamos bailado", "hab\xEDamos cantado", "hab\xEDamos estado", "hab\xEDamos parado", "hab\xEDamos mandado", "hab\xEDamos llevado", "hab\xEDamos nadado", "hab\xEDamos cerrado", "hab\xEDamos enviado", "hab\xEDamos mostrado", "hab\xEDamos graduado", "hab\xEDamos dado", "hab\xEDamos almorzado", "hab\xEDamos comido", "hab\xEDamos cre\xEDdo", "hab\xEDamos bebido", "hab\xEDamos vendido", "hab\xEDamos conocido", "hab\xEDamos perdido", "hab\xEDamos podido", "hab\xEDamos tenido", "hab\xEDamos escogido", "hab\xEDamos hecho", "hab\xEDamos puesto", "hab\xEDamos visto", "hab\xEDamos cabido", "hab\xEDamos tra\xEDdo", "hab\xEDamos ido", "hab\xEDamos dicho", "hab\xEDamos dormido", "hab\xEDamos salido", "hab\xEDamos vivido", "hab\xEDamos pedido", "hab\xEDamos mentido", "hab\xEDamos lucido", "hab\xEDamos distinguido", "hab\xEDamos destruido", "hab\xEDamos sentido", "hab\xEDamos descrito", "hab\xEDamos preferido", "hab\xEDamos escrito"];

//array for vosotros conjugations
var vos = ["hab\xEDais andado", "hab\xEDais bailado", "hab\xEDais cantado", "hab\xEDais estado", "hab\xEDais parado", "hab\xEDais mandado", "hab\xEDais llevado", "hab\xEDais nadado", "hab\xEDais cerrado", "hab\xEDais enviado", "hab\xEDais mostrado", "hab\xEDais graduado", "hab\xEDais dado", "hab\xEDais almorzado", "hab\xEDais comido", "hab\xEDais cre\xEDdo", "hab\xEDais bebido", "hab\xEDais vendido", "hab\xEDais conocido", "hab\xEDais perdido", "hab\xEDais podido", "hab\xEDais tenido", "hab\xEDais escogido", "hab\xEDais hecho", "hab\xEDais puesto", "hab\xEDais visto", "hab\xEDais cabido", "hab\xEDais tra\xEDdo", "hab\xEDais ido", "hab\xEDais dicho", "hab\xEDais dormido", "hab\xEDais salido", "hab\xEDais vivido", "hab\xEDais pedido", "hab\xEDais mentido", "hab\xEDais lucido", "hab\xEDais distinguido", "hab\xEDais destruido", "hab\xEDais sentido", "hab\xEDais descrito", "hab\xEDais preferido", "hab\xEDais escrito"];

//array for ellos conjugations
var ellos = ["hab\xEDan andado", "hab\xEDan bailado", "hab\xEDan cantado", "hab\xEDan estado", "hab\xEDan parado", "hab\xEDan mandado", "hab\xEDan llevado", "hab\xEDan nadado", "hab\xEDan cerrado", "hab\xEDan enviado", "hab\xEDan mostrado", "hab\xEDan graduado", "hab\xEDan dado", "hab\xEDan almorzado", "hab\xEDan comido", "hab\xEDan cre\xEDdo", "hab\xEDan bebido", "hab\xEDan vendido", "hab\xEDan conocido", "hab\xEDan perdido", "hab\xEDan podido", "hab\xEDan tenido", "hab\xEDan escogido", "hab\xEDan hecho", "hab\xEDan puesto", "hab\xEDan visto", "hab\xEDan cabido", "hab\xEDan tra\xEDdo", "hab\xEDan ido", "hab\xEDan dicho", "hab\xEDan dormido", "hab\xEDan salido", "hab\xEDan vivido", "hab\xEDan pedido", "hab\xEDan mentido", "hab\xEDan lucido", "hab\xEDan distinguido", "hab\xEDan destruido", "hab\xEDan sentido", "hab\xEDan descrito", "hab\xEDan preferido", "hab\xEDan escrito"];

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