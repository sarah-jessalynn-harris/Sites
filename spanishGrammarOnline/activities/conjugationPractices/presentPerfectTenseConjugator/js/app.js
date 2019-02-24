
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
        yo = [ "he andado", "he bailado", "he cantado", "he estado", "he parado", "he mandado", "he llevado", "he nadado", "he cerrado", "he enviado", "he mostrado", "he graduado", "he dado", "he almorzado", "he comido", "he cre\xEDdo", "he bebido", "he vendido", "he conocido", "he perdido", "he podido", "he tenido", "he escogido", "he hecho", "he puesto", "he visto", "he cabido", "he tra\xEDdo", "he ido", "he dicho", "he dormido", "he salido", "he vivido", "he pedido", "he mentido", "he lucido", "he distinguido", "he destruido", "he sentido", "he descrito", "he preferido", "he escrito"];

        //array for tu conjugations
        tu = ["has andado", "has bailado", "has cantado", "has estado", "has parado", "has mandado", "has llevado", "has nadado", "has cerrado", "has enviado", "has mostrado", "has graduado", "has dado", "has almorzado", "has comido", "has cre\xEDdo", "has bebido", "has vendido", "has conocido", "has perdido", "has podido", "has tenido", "has escogido", "has hecho", "has puesto", "has visto", "has cabido", "has tra\xEDdo", "has ido", "has dicho", "has dormido", "has salido", "has vivido", "has pedido", "has mentido", "has lucido", "has distinguido", "has destruido", "has sentido", "has descrito", "has preferido", "has escrito"];

        //array for el conjugations
        el = ["ha andado", "ha bailado", "ha cantado", "ha estado", "ha parado", "ha mandado", "ha llevado", "ha nadado", "ha cerrado", "ha enviado", "ha mostrado", "ha graduado", "ha dado", "ha almorzado", "ha comido", "ha cre\xEDdo", "ha bebido", "ha vendido", "ha conocido", "ha perdido", "ha podido", "ha tenido", "ha escogido", "ha hecho", "ha puesto", "ha visto", "ha cabido", "ha tra\xEDdo", "ha ido", "ha dicho", "ha dormido", "ha salido", "ha vivido", "ha pedido", "ha mentido", "ha lucido", "ha distinguido", "ha destruido", "ha sentido", "ha descrito", "ha preferido", "ha escrito"];

        //array for nosotros conjugations
        nos = [ "hemos andado", "hemos bailado", "hemos cantado", "hemos estado", "hemos parado", "hemos mandado", "hemos llevado", "hemos nadado", "hemos cerrado", "hemos enviado", "hemos mostrado", "hemos graduado", "hemos dado", "hemos almorzado", "hemos comido", "hemos cre\xEDdo", "hemos bebido", "hemos vendido", "hemos conocido", "hemos perdido", "hemos podido", "hemos tenido", "hemos escogido", "hemos hecho", "hemos puesto", "hemos visto", "hemos cabido", "hemos tra\xEDdo", "hemos ido", "hemos dicho", "hemos dormido", "hemos salido", "hemos vivido", "hemos pedido", "hemos mentido", "hemos lucido", "hemos distinguido", "hemos destruido", "hemos sentido", "hemos descrito", "hemos preferido", "hemos escrito"];

        //array for vosotros conjugations
        vos = ["hab\xE9is andado", "hab\xE9is bailado", "hab\xE9is cantado", "hab\xE9is estado", "hab\xE9is parado", "hab\xE9is mandado", "hab\xE9is llevado", "hab\xE9is nadado", "hab\xE9is cerrado", "hab\xE9is enviado", "hab\xE9is mostrado", "hab\xE9is graduado", "hab\xE9is dado", "hab\xE9is almorzado", "hab\xE9is comido", "hab\xE9is cre\xEDdo", "hab\xE9is bebido", "hab\xE9is vendido", "hab\xE9is conocido", "hab\xE9is perdido", "hab\xE9is podido", "hab\xE9is tenido", "hab\xE9is escogido", "hab\xE9is hecho", "hab\xE9is puesto", "hab\xE9is visto", "hab\xE9is cabido", "hab\xE9is tra\xEDdo", "hab\xE9is ido", "hab\xE9is dicho", "hab\xE9is dormido", "hab\xE9is salido", "hab\xE9is vivido", "hab\xE9is pedido", "hab\xE9is mentido", "hab\xE9is lucido", "hab\xE9is distinguido", "hab\xE9is destruido", "hab\xE9is sentido", "hab\xE9is descrito", "hab\xE9is preferido", "hab\xE9is escrito"];

        //array for ellos conjugations
        ellos = ["han andado", "han bailado", "han cantado", "han estado", "han parado", "han mandado", "han llevado", "han nadado", "han cerrado", "han enviado", "han mostrado", "han graduado", "han dado", "han almorzado", "han comido", "han cre\xEDdo", "han bebido", "han vendido", "han conocido", "han perdido", "han podido", "han tenido", "han escogido", "han hecho", "han puesto", "han visto", "han cabido", "han tra\xEDdo", "han ido", "han dicho", "han dormido", "han salido", "han vivido", "han pedido", "han mentido", "han lucido", "han distinguido", "han destruido", "han sentido", "han descrito", "han preferido", "han escrito"];
        

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