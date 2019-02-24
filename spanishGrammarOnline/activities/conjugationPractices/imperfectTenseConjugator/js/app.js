
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
var yo = ["andaba", "bailaba", "cantaba", "estaba", "paraba", "mandaba", "llevaba", "nadaba", "cerraba", "enviaba", "mostraba", "graduaba", "daba", "almorzaba", "com\xEDa", "cre\xEDa", "beb\xEDa", "vend\xEDa", "conoc\xEDa", "perd\xEDa", "pod\xEDa", "ten\xEDa", "escog\xEDa", "hac\xEDa", "pon\xEDa", "ve\xEDa", "cab\xEDa", "tra\xEDa", "iba", "dec\xEDa", "dorm\xEDa", "sal\xEDa", "viv\xEDa", "ped\xEDa", "ment\xEDa", "luc\xEDa", "distingu\xEDa", "destru\xEDa", "sent\xEDa", "describ\xEDa", "prefer\xEDa", "escrib\xEDa"];

//array for tu conjugations
var tu = ["andabas", "bailabas", "cantabas", "estabas", "parabas", "mandabas", "llevabas", "nadabas", "cerrabas", "enviabas", "mostrabas", "graduabas", "dabas", "almorzabas", "com\xEDas", "cre\xEDas", "beb\xEDas", "vend\xEDas", "conoc\xEDas", "perd\xEDas", "pod\xEDas", "ten\xEDas", "escog\xEDas", "hac\xEDas", "pon\xEDas", "ve\xEDas", "cab\xEDas", "tra\xEDas", "ibas", "dec\xEDas", "dorm\xEDas", "sal\xEDas", "viv\xEDas", "ped\xEDas", "ment\xEDas", "luc\xEDas", "distingu\xEDas", "destru\xEDas", "sent\xEDas", "describ\xEDas", "prefer\xEDas", "escrib\xEDas"];

//array for el conjugations
var el = ["andaba", "bailaba", "cantaba", "estaba", "paraba", "mandaba", "llevaba", "nadaba", "cerraba", "enviaba", "mostraba", "graduaba", "daba", "almorzaba", "com\xEDa", "cre\xEDa", "beb\xEDa", "vend\xEDa", "conoc\xEDa", "perd\xEDa", "pod\xEDa", "ten\xEDa", "escog\xEDa", "hac\xEDa", "pon\xEDa", "ve\xEDa", "cab\xEDa", "tra\xEDa", "iba", "dec\xEDa", "dorm\xEDa", "sal\xEDa", "viv\xEDa", "ped\xEDa", "ment\xEDa", "luc\xEDa", "distingu\xEDa", "destru\xEDa", "sent\xEDa", "describ\xEDa", "prefer\xEDa", "escrib\xEDa"];

//array for nosotros conjugations
var nos = [ "andabamos", "bailabamos", "cantabamos", "estabamos", "parabamos", "mandabamos", "llevabamos", "nadabamos", "cerrabamos", "enviabamos", "mostrabamos", "graduabamos", "dabamos", "almorzabamos", "com\xEDamos", "cre\xEDamos", "beb\xEDamos", "vend\xEDamos", "conoc\xEDamos", "perd\xEDamos", "pod\xEDamos", "ten\xEDamos", "escog\xEDamos", "hac\xEDamos", "pon\xEDamos", "ve\xEDamos", "cab\xEDamos", "tra\xEDamos", "ibamos", "dec\xEDamos", "dorm\xEDamos", "sal\xEDamos", "viv\xEDamos", "ped\xEDamos", "ment\xEDamos", "luc\xEDamos", "distingu\xEDamos", "destru\xEDamos", "sent\xEDamos", "describ\xEDamos", "prefer\xEDamos", "escrib\xEDamos"];

//array for vosotros conjugations
var vos = ["andabais", "bailabais", "cantabais", "estabais", "parabais", "mandabais", "llevabais", "nadabais", "cerrabais", "enviabais", "mostrabais", "graduabais", "dabais", "almorzabais", "com\xEDais", "cre\xEDais", "beb\xEDais", "vend\xEDais", "conoc\xEDais", "perd\xEDais", "pod\xEDais", "ten\xEDais", "escog\xEDais", "hac\xEDais", "pon\xEDais", "ve\xEDais", "cab\xEDais", "tra\xEDais", "ibais", "dec\xEDais", "dorm\xEDais", "sal\xEDais", "viv\xEDais", "ped\xEDais", "ment\xEDais", "luc\xEDais", "distingu\xEDais", "destru\xEDais", "sent\xEDais", "describ\xEDais", "prefer\xEDais", "escrib\xEDais"];

//array for ellos conjugations
var ellos = ["andaban", "bailaban", "cantaban", "estaban", "paraban", "mandaban", "llevaban", "nadaban", "cerraban", "enviaban", "mostraban", "graduaban", "daban", "almorzaban", "com\xEDan", "cre\xEDan", "beb\xEDan", "vend\xEDan", "conoc\xEDan", "perd\xEDan", "pod\xEDan", "ten\xEDan", "escog\xEDan", "hac\xEDan", "pon\xEDan", "ve\xEDan", "cab\xEDan", "tra\xEDan", "iban", "dec\xEDan", "dorm\xEDan", "sal\xEDan", "viv\xEDan", "ped\xEDan", "ment\xEDan", "luc\xEDan", "distingu\xEDan", "destru\xEDan", "sent\xEDan", "describ\xEDan", "prefer\xEDan", "escrib\xEDan"];

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