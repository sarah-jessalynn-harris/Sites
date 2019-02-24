
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
return numPicker, numPick;
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
var yo = ["habr\xEDa andado", "habr\xEDa bailado", "habr\xEDa cantado", "habr\xEDa estado", "habr\xEDa parado", "habr\xEDa mandado", "habr\xEDa llevado", "habr\xEDa nadado", "habr\xEDa cerrado", "habr\xEDa enviado", "habr\xEDa mostrado", "habr\xEDa graduado", "habr\xEDa dado", "habr\xEDa almorzado", "habr\xEDa comido", "habr\xEDa cre\xEDdo", "habr\xEDa bebido", "habr\xEDa vendido", "habr\xEDa conocido", "habr\xEDa perdido", "habr\xEDa podido", "habr\xEDa tenido", "habr\xEDa escogido", "habr\xEDa hecho", "habr\xEDa puesto", "habr\xEDa visto", "habr\xEDa cabido", "habr\xEDa tra\xEDdo", "habr\xEDa ido", "habr\xEDa dicho", "habr\xEDa dormido", "habr\xEDa salido", "habr\xEDa vivido", "habr\xEDa pedido", "habr\xEDa mentido", "habr\xEDa lucido", "habr\xEDa distinguido", "habr\xEDa destruido", "habr\xEDa sentido", "habr\xEDa descrito", "habr\xEDa preferido", "habr\xEDa escrito"];

//array for tu conjugations
var tu = ["habr\xEDas andado", "habr\xEDas bailado", "habr\xEDas cantado", "habr\xEDas estado", "habr\xEDas parado", "habr\xEDas mandado", "habr\xEDas llevado", "habr\xEDas nadado", "habr\xEDas cerrado", "habr\xEDas enviado", "habr\xEDas mostrado", "habr\xEDas graduado", "habr\xEDas dado", "habr\xEDas almorzado", "habr\xEDas comido", "habr\xEDas cre\xEDdo", "habr\xEDas bebido", "habr\xEDas vendido", "habr\xEDas conocido", "habr\xEDas perdido", "habr\xEDas podido", "habr\xEDas tenido", "habr\xEDas escogido", "habr\xEDas hecho", "habr\xEDas puesto", "habr\xEDas visto", "habr\xEDas cabido", "habr\xEDas tra\xEDdo", "habr\xEDas ido", "habr\xEDas dicho", "habr\xEDas dormido", "habr\xEDas salido", "habr\xEDas vivido", "habr\xEDas pedido", "habr\xEDas mentido", "habr\xEDas lucido", "habr\xEDas distinguido", "habr\xEDas destruido", "habr\xEDas sentido", "habr\xEDas descrito", "habr\xEDas preferido", "habr\xEDas escrito"];

//array for el conjugations
var el = ["habr\xEDa andado", "habr\xEDa bailado", "habr\xEDa cantado", "habr\xEDa estado", "habr\xEDa parado", "habr\xEDa mandado", "habr\xEDa llevado", "habr\xEDa nadado", "habr\xEDa cerrado", "habr\xEDa enviado", "habr\xEDa mostrado", "habr\xEDa graduado", "habr\xEDa dado", "habr\xEDa almorzado", "habr\xEDa comido", "habr\xEDa cre\xEDdo", "habr\xEDa bebido", "habr\xEDa vendido", "habr\xEDa conocido", "habr\xEDa perdido", "habr\xEDa podido", "habr\xEDa tenido", "habr\xEDa escogido", "habr\xEDa hecho", "habr\xEDa puesto", "habr\xEDa visto", "habr\xEDa cabido", "habr\xEDa tra\xEDdo", "habr\xEDa ido", "habr\xEDa dicho", "habr\xEDa dormido", "habr\xEDa salido", "habr\xEDa vivido", "habr\xEDa pedido", "habr\xEDa mentido", "habr\xEDa lucido", "habr\xEDa distinguido", "habr\xEDa destruido", "habr\xEDa sentido", "habr\xEDa descrito", "habr\xEDa preferido", "habr\xEDa escrito"];

//array for nosotros conjugations
var nos = ["habr\xEDamos andado", "habr\xEDamos bailado", "habr\xEDamos cantado", "habr\xEDamos estado", "habr\xEDamos parado", "habr\xEDamos mandado", "habr\xEDamos llevado", "habr\xEDamos nadado", "habr\xEDamos cerrado", "habr\xEDamos enviado", "habr\xEDamos mostrado", "habr\xEDamos graduado", "habr\xEDamos dado", "habr\xEDamos almorzado", "habr\xEDamos comido", "habr\xEDamos cre\xEDdo", "habr\xEDamos bebido", "habr\xEDamos vendido", "habr\xEDamos conocido", "habr\xEDamos perdido", "habr\xEDamos podido", "habr\xEDamos tenido", "habr\xEDamos escogido", "habr\xEDamos hecho", "habr\xEDamos puesto", "habr\xEDamos visto", "habr\xEDamos cabido", "habr\xEDamos tra\xEDdo", "habr\xEDamos ido", "habr\xEDamos dicho", "habr\xEDamos dormido", "habr\xEDamos salido", "habr\xEDamos vivido", "habr\xEDamos pedido", "habr\xEDamos mentido", "habr\xEDamos lucido", "habr\xEDamos distinguido", "habr\xEDamos destruido", "habr\xEDamos sentido", "habr\xEDamos descrito", "habr\xEDamos preferido", "habr\xEDamos escrito"];

//array for vosotros conjugations
var vos = ["habr\xEDais andado", "habr\xEDais bailado", "habr\xEDais cantado", "habr\xEDais estado", "habr\xEDais parado", "habr\xEDais mandado", "habr\xEDais llevado", "habr\xEDais nadado", "habr\xEDais cerrado", "habr\xEDais enviado", "habr\xEDais mostrado", "habr\xEDais graduado", "habr\xEDais dado", "habr\xEDais almorzado", "habr\xEDais comido", "habr\xEDais cre\xEDdo", "habr\xEDais bebido", "habr\xEDais vendido", "habr\xEDais conocido", "habr\xEDais perdido", "habr\xEDais podido", "habr\xEDais tenido", "habr\xEDais escogido", "habr\xEDais hecho", "habr\xEDais puesto", "habr\xEDais visto", "habr\xEDais cabido", "habr\xEDais tra\xEDdo", "habr\xEDais ido", "habr\xEDais dicho", "habr\xEDais dormido", "habr\xEDais salido", "habr\xEDais vivido", "habr\xEDais pedido", "habr\xEDais mentido", "habr\xEDais lucido", "habr\xEDais distinguido", "habr\xEDais destruido", "habr\xEDais sentido", "habr\xEDais descrito", "habr\xEDais preferido", "habr\xEDais escrito"];

//array for ellos conjugations
var ellos = ["habr\xEDan andado", "habr\xEDan bailado", "habr\xEDan cantado", "habr\xEDan estado", "habr\xEDan parado", "habr\xEDan mandado", "habr\xEDan llevado", "habr\xEDan nadado", "habr\xEDan cerrado", "habr\xEDan enviado", "habr\xEDan mostrado", "habr\xEDan graduado", "habr\xEDan dado", "habr\xEDan almorzado", "habr\xEDan comido", "habr\xEDan cre\xEDdo", "habr\xEDan bebido", "hab\xEDan vendido", "hab\xEDan conocido", "hab\xEDan perdido", "hab\xEDan podido", "hab\xEDan tenido", "hab\xEDan escogido", "habr\xEDan hecho", "habr\xEDan puesto", "habr\xEDan visto", "habr\xEDan cabido", "habr\xEDan tra\xEDdo", "habr\xEDan ido", "habr\xEDan dicho", "habr\xEDan dormido", "habr\xEDan salido", "habr\xEDan vivido", "habr\xEDan pedido", "habr\xEDan mentido", "habr\xEDan lucido", "habr\xEDan distinguido", "habr\xEDan destruido", "habr\xEDan sentido", "habr\xEDan descrito", "habr\xEDan preferido", "habr\xEDan escrito"];

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
