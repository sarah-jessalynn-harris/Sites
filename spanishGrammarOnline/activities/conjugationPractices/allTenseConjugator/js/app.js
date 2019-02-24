//variable set up for random tense 
var numberPick = 0;

//variable set up for random infinitive
var numPick = 0;

//variable set up for random subject
var numPicker = 0;

//variable set up for answer
var answer = " ";

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

//random number generator for picking tense    
numberPick = Math.round(Math.random()*15);
    
//random number generator for picking infinitive
numPick = Math.round(Math.random()*41);
    
//random number generator for picking subject
numPicker = Math.round(Math.random()*5);

//return values    
return numPick, numPicker, numberPick;
}

//locate  user input box
var input = document.querySelector("#input");
//locate div to output tense
var tenseDisplay = document.querySelector("#tenseDisplay");
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

//array list of tenses
var tense = ["Present Indicative", "Preterite Indicative", "Imperfect Indicative", "Future Indicative", "Conditional Indicative", "Present Subjunctive", "Past Subjunctive (-ra)", "Past Subjunctive (-se)","Present Perfect Indicative", "Preterite Anterior Indicative", "Past Perfect Indicative", "Future Perfect Indicative", "Conditional Perfect Indicative", "Present Perfect Subjunctive", "Past Perfect Subjunctive (-ra)", "Past Perfect Subjunctive (-se)"];

//array list of subjects
var subj = ["yo", "t\xFA", "\xE9l", "nosotros", "vosotros", "ellos"];

//set up variables for future arrays for each tense based on subjects 
var yo = [];
var tu = [];
var el = [];
var nos = [];
var vos = [];
var ellos = [];

//pick tense and corrresponding arrays
tensePick();

//array list of infinitives
var inf = ["andar", "bailar", "cantar", "estar", "parar", "mandar", "llevar", "nadar", "cerrar", "enviar", "mostrar", "graduar", "dar", "almorzar", "comer", "creer", "beber", "vender", "conocer", "perder", "poder", "tener", "escoger", "hacer", "poner", "ver", "caber", "traer", "ir", "decir", "dormir", "salir", "vivir", "pedir", "mentir", "lucir", "distinguir", "destruir", "sentir", "describir", "preferir", "escribir"];

//if statements and arrays to determine the answer based on tense, subject, and verb
function tensePick() { 
    if(numberPick == 0) {   
    //IF THE NUMBER PICKED IS 0, THEN USE PRESENT TENSE ARRAYS
        //array for yo conjugations 
        yo = [ "ando", "bailo", "canto", "estoy", "paro", "mando", "llevo", "nado", "cierro", "env\xEDo", "muestro", "grad\xFAo", "doy", "almuerzo", "como", "creo", "bebo", "vendo", "conozco", "pierdo", "puedo", "tengo", "escojo", "hago", "pongo", "veo", "quepo", "traigo", "voy", "digo", "duermo", "salgo", "vivo", "pido", "miento", "luzco", "distingo", "destruyo", "siento", "describo", "prefiero", "escribo"];

        //array for tu conjugations
        tu = [ "andas", "bailas", "cantas", "est\xE1s", "paras", "mandas", "llevas", "nadas", "cierras", "env\xEDas", "muestras", "grad\xFAas", "das", "almuerzas", "comes", "crees", "bebes", "vendes", "conoces", "pierdes", "puedes", "tienes", "escoges", "haces", "pones", "ves", "cabes", "traes", "vas", "dices", "duermes", "sales", "vives", "pides", "mientes", "luces", "distingues", "destruyes", "sientes", "describes", "prefieres", "escribes"];

        //array for el conjugations
        el = [ "anda", "baila", "canta", "est\xE1", "para", "manda", "lleva", "nada", "cierra", "env\xEDa", "muestra", "grad\xFAa", "da", "almuerza", "come", "cree", "bebe", "vende", "conoce", "pierde", "puede", "tiene", "escoge", "hace", "pone", "ve", "cabe", "trae", "va", "dice", "duerme", "sale", "vive", "pide", "miente", "luce", "distingue", "destruye", "siente", "describe", "prefiere", "escribe"];

        //array for nosotros conjugations
        nos = [ "andamos", "bailamos", "cantamos", "estamos", "paramos", "mandamos", "llevamos", "nadamos", "cerramos", "enviamos", "mostramos", "graduamos", "damos", "almorzamos", "comemos", "creemos", "bebemos", "vendemos", "conocemos", "perdemos", "podemos", "tenemos", "escogemos", "hacemos", "ponemos", "vemos", "cabemos", "traemos", "vamos", "decimos", "dormimos", "salimos", "vivimos", "pedimos", "mentimos", "lucimos", "distinguimos", "destruimos", "sentimos", "describimos", "preferimos", "escribimos"];

        //array for vosotros conjugations
        vos = [ "and\xE1is", "bail\xE1is", "cant\xE1is", "est\xE1is", "par\xE1is", "mand\xE1is", "llev\xE1is", "nad\xE1is", "cerr\xE1is", "envi\xE1is", "mostr\xE1is", "gradu\xE1is", "dais", "almorz\xE1is", "com\xE9is", "cre\xE9is", "beb\xE9is", "vend\xE9is", "conoc\xE9is", "perd\xE9is", "pod\xE9is", "ten\xE9is", "escog\xE9is", "hac\xE9is", "pon\xE9is", "veis", "cab\xE9is", "tra\xE9is", "v\xE1is", "dec\xEDs", "dorm\xEDs", "sal\xEDs", "viv\xEDs", "ped\xEDs", "ment\xEDs", "luc\xEDs", "distingu\xEDs", "destru\xEDs", "sent\xEDs", "describ\xEDs", "prefer\xEDs", "escrib\xEDs"];

        //array for ellos conjugations
        ellos = [ "andan", "bailan", "cantan", "est\xE1n", "paran", "mandan", "llevan", "nadan", "cierran", "env\xEDan", "muestran", "grad\xFAan", "dan", "almuerzan", "comen", "creen", "beben", "venden", "conocen", "pierden", "pueden", "tienen", "escogen", "hacen", "ponen", "ven", "caben", "traen", "van", "dicen", "duermen", "salen", "viven", "piden", "mienten", "lucen", "distinguen", "destruyen", "sienten", "describen", "prefieren", "escriben"];

    } else if (numberPick == 1) {
    //IF THE NUMBER PICKED IS 1, THEN USE PRETERITE TENSE ARRAYS
       //array for yo conjugations
        yo = ["anduve", "bail\xE9", "cant\xE9", "estuve", "par\xE9", "mand\xE9", "llev\xE9", "nad\xE9", "cerr\xE9", "envi\xE9", "mostr\xE9", "gradu\xE9", "di", "almorc\xE9", "com\xED", "cre\xED", "beb\xED", "vend\xED", "conoc\xED", "perd\xED", "pude", "tuve", "escog\xED", "hice", "puse", "vi", "cupe", "traje", "fui", "dije", "dorm\xED", "sal\xED", "viv\xED", "ped\xED", "ment\xED", "luc\xED", "distingu\xED", "destru\xED", "sent\xED", "describ\xED", "prefer\xED", "escrib\xED"];

        //array for tu conjugations
        tu = [ "andaste", "bailaste", "cantaste", "estuviste", "paraste", "mandaste", "llevaste", "nadaste", "cerraste", "enviaste", "mostraste", "graduaste", "diste", "almorzaste", "comiste", "cre\xEDste", "bebiste", "vendis\xED", "conocis\xED", "perdis\xED", "pudiste", "tuviste", "escogiste", "hiciste", "pusiste", "viste", "cupiste", "tra\xEDste", "fuiste", "dijiste", "dormiste", "saliste", "viviste", "pudiste", "mentiste", "luciste", "distinguiste", "destruiste", "sentiste", "describiste", "preferiste", "escribiste"];

        //array for el conjugations
        el = ["anduvo", "bail\xF3", "cant\xF3", "estuvo", "par\xF3", "mand\xF3", "llev\xF3", "nad\xF3", "cerr\xF3", "envi\xF3", "mostr\xF3", "gradu\xF3", "dio", "almorz\xF3", "comi\xF3", "crey\xF3", "bebi\xF3", "vendi\xF3", "conoci\xF3", "perdi\xF3", "pudo", "tuvo", "escogi\xF3", "hizo", "puso", "vio", "cupo", "trajo", "fue", "dijo", "durmi\xF3", "sali\xF3", "vivi\xF3", "pidi\xF3", "minti\xF3", "luci\xF3", "distingui\xF3", "destruy\xF3", "sinti\xF3", "describi\xF3", "prefiri\xF3", "escribi\xF3"];

        //array for nosotros conjugations
        nos = [ "anduvimos", "bailamos", "cantamos", "estamos", "paramos", "mandamos", "llevamos", "nadamos", "cerramos", "enviamos", "mostramos", "graduamos", "dimos", "almorzamos", "comimos", "cre\xEDmos", "bebimos", "vendimos", "conocimos", "perdimos", "pudimos", "tuvimos", "escogimos", "hicimos", "pusimos", "vimos", "cupimos", "trajimos", "fuimos", "dijimos", "dormimos", "salimos", "vivimos", "pedimos", "mentimos", "lucimos", "distinguimos", "destruimos", "sentimos", "describimos", "preferimos", "escribimos"];

        //array for vosotros conjugations
        vos = ["anduvisteis", "bailasteis", "cantasteis", "estuvisteis", "parasteis", "mandasteis", "llevasteis", "nadasteis", "cerrasteis", "enviasteis", "mostrasteis", "graduasteis", "disteis", "almorzasteis", "comisteis", "cre\xEDsteis", "bebisteis", "vendisteis", "conocisteis", "perdisteis", "pudisteis", "tuvisteis", "escogisteis", "hicimos", "pusimos", "visteis", "cupimos", "trajimos", "fuisteis", "dijisteis", "dormisteis", "salisteis", "vivisteis", "pedisteis", "mentisteis", "lucisteis", "distinguisteis", "destruisteis", "sentisteis", "describisteis", "preferisteis", "escribisteis"];

        //array for ellos conjugations
        ellos = ["anduvieron", "bailaron", "cantaron", "estuvieron", "pararon", "mandaron", "llevaron", "nadaron", "cerraron", "enviaron", "mostraron", "graduaron", "dieron", "almorzaron", "comieron", "creyeron", "bebieron", "vendieron", "conocieron", "perdieron", "pudieron", "tuvieron", "escogieron", "hicieron", "pusieron", "vieron", "cupieron", "trajeron", "fueron", "dijeron", "durmieron", "salieron", "vivieron", "pidieron", "mintieron", "lucieron", "distinguieron", "destruyeron", "sintieron", "describieron", "prefirieron", "escribieron"]; 

    } else if (numberPick == 2) {
    //IF THE NUMBER PICKED IS 2, THEN USE IMPERFECT TENSE ARRAYS
        //array for yo conjugations
        yo = ["andaba", "bailaba", "cantaba", "estaba", "paraba", "mandaba", "llevaba", "nadaba", "cerraba", "enviaba", "mostraba", "graduaba", "daba", "almorzaba", "com\xEDa", "cre\xEDa", "beb\xEDa", "vend\xEDa", "conoc\xEDa", "perd\xEDa", "pod\xEDa", "ten\xEDa", "escog\xEDa", "hac\xEDa", "pon\xEDa", "ve\xEDa", "cab\xEDa", "tra\xEDa", "iba", "dec\xEDa", "dorm\xEDa", "sal\xEDa", "viv\xEDa", "ped\xEDa", "ment\xEDa", "luc\xEDa", "distingu\xEDa", "destru\xEDa", "sent\xEDa", "describ\xEDa", "prefer\xEDa", "escrib\xEDa"];

        //array for tu conjugations
        tu = ["andabas", "bailabas", "cantabas", "estabas", "parabas", "mandabas", "llevabas", "nadabas", "cerrabas", "enviabas", "mostrabas", "graduabas", "dabas", "almorzabas", "com\xEDas", "cre\xEDas", "beb\xEDas", "vend\xEDas", "conoc\xEDas", "perd\xEDas", "pod\xEDas", "ten\xEDas", "escog\xEDas", "hac\xEDas", "pon\xEDas", "ve\xEDas", "cab\xEDas", "tra\xEDas", "ibas", "dec\xEDas", "dorm\xEDas", "sal\xEDas", "viv\xEDas", "ped\xEDas", "ment\xEDas", "luc\xEDas", "distingu\xEDas", "destru\xEDas", "sent\xEDas", "describ\xEDas", "prefer\xEDas", "escrib\xEDas"];

        //array for el conjugations
        el = ["andaba", "bailaba", "cantaba", "estaba", "paraba", "mandaba", "llevaba", "nadaba", "cerraba", "enviaba", "mostraba", "graduaba", "daba", "almorzaba", "com\xEDa", "cre\xEDa", "beb\xEDa", "vend\xEDa", "conoc\xEDa", "perd\xEDa", "pod\xEDa", "ten\xEDa", "escog\xEDa", "hac\xEDa", "pon\xEDa", "ve\xEDa", "cab\xEDa", "tra\xEDa", "iba", "dec\xEDa", "dorm\xEDa", "sal\xEDa", "viv\xEDa", "ped\xEDa", "ment\xEDa", "luc\xEDa", "distingu\xEDa", "destru\xEDa", "sent\xEDa", "describ\xEDa", "prefer\xEDa", "escrib\xEDa"];

        //array for nosotros conjugations
        nos = [ "andabamos", "bailabamos", "cantabamos", "estabamos", "parabamos", "mandabamos", "llevabamos", "nadabamos", "cerrabamos", "enviabamos", "mostrabamos", "graduabamos", "dabamos", "almorzabamos", "com\xEDamos", "cre\xEDamos", "beb\xEDamos", "vend\xEDamos", "conoc\xEDamos", "perd\xEDamos", "pod\xEDamos", "ten\xEDamos", "escog\xEDamos", "hac\xEDamos", "pon\xEDamos", "ve\xEDamos", "cab\xEDamos", "tra\xEDamos", "ibamos", "dec\xEDamos", "dorm\xEDamos", "sal\xEDamos", "viv\xEDamos", "ped\xEDamos", "ment\xEDamos", "luc\xEDamos", "distingu\xEDamos", "destru\xEDamos", "sent\xEDamos", "describ\xEDamos", "prefer\xEDamos", "escrib\xEDamos"];

        //array for vosotros conjugations
        vos = ["andabais", "bailabais", "cantabais", "estabais", "parabais", "mandabais", "llevabais", "nadabais", "cerrabais", "enviabais", "mostrabais", "graduabais", "dabais", "almorzabais", "com\xEDais", "cre\xEDais", "beb\xEDais", "vend\xEDais", "conoc\xEDais", "perd\xEDais", "pod\xEDais", "ten\xEDais", "escog\xEDais", "hac\xEDais", "pon\xEDais", "ve\xEDais", "cab\xEDais", "tra\xEDais", "ibais", "dec\xEDais", "dorm\xEDais", "sal\xEDais", "viv\xEDais", "ped\xEDais", "ment\xEDais", "luc\xEDais", "distingu\xEDais", "destru\xEDais", "sent\xEDais", "describ\xEDais", "prefer\xEDais", "escrib\xEDais"];

        //array for ellos conjugations
        ellos = ["andaban", "bailaban", "cantaban", "estaban", "paraban", "mandaban", "llevaban", "nadaban", "cerraban", "enviaban", "mostraban", "graduaban", "daban", "almorzaban", "com\xEDan", "cre\xEDan", "beb\xEDan", "vend\xEDan", "conoc\xEDan", "perd\xEDan", "pod\xEDan", "ten\xEDan", "escog\xEDan", "hac\xEDan", "pon\xEDan", "ve\xEDan", "cab\xEDan", "tra\xEDan", "iban", "dec\xEDan", "dorm\xEDan", "sal\xEDan", "viv\xEDan", "ped\xEDan", "ment\xEDan", "luc\xEDan", "distingu\xEDan", "destru\xEDan", "sent\xEDan", "describ\xEDan", "prefer\xEDan", "escrib\xEDan"];

    } else if (numberPick == 3) {
    //IF THE NUMBER PICKED IS 3, THEN USE FUTURE TENSE ARRAYS
        //array for yo conjugations
        yo = [ "andar\xE9", "bailar\xE9", "cantar\xE9", "estar\xE9", "parar\xE9", "mandar\xE9", "llevar\xE9", "nadar\xE9", "cerrar\xE9", "enviar\xE9", "mostrar\xE9", "graduar\xE9", "dar\xE9", "almorzar\xE9", "comer\xE9", "creer\xE9", "beber\xE9", "vender\xE9", "conocer\xE9", "perder\xE9", "podr\xE9", "tendr\xE9", "escoger\xE9", "har\xE9", "pondr\xE9", "ver\xE9", "cabr\xE9", "traer\xE9", "ir\xE9", "dir\xE9", "dormir\xE9", "saldr\xE9", "vivir\xE9", "pedir\xE9", "mentir\xE9", "lucir\xE9", "distinguir\xE9", "destruir\xE9", "sentir\xE9", "describir\xE9", "preferir\xE9", "escribir\xE9"];

        //array for tu conjugations
        tu = [ "andar\xE1s", "bailar\xE1s", "cantar\xE1s", "estar\xE1s", "parar\xE1s", "mandar\xE1s", "llevar\xE1s", "nadar\xE1s", "cerrar\xE1s", "enviar\xE1s", "mostrar\xE1s", "graduar\xE1s", "dar\xE1s", "almorzar\xE1s", "comer\xE1s", "creer\xE1s", "beber\xE1s", "vender\xE1s", "conocer\xE1s", "perder\xE1s", "podr\xE1s", "tendr\xE1s", "escoger\xE1s", "har\xE1s", "pondr\xE1s", "ver\xE1s", "cabr\xE1s", "traer\xE1s", "ir\xE1s", "dir\xE1s", "dormir\xE1s", "saldr\xE1s", "vivir\xE1s", "pedir\xE1s", "mentir\xE1s", "lucir\xE1s", "distinguir\xE1s", "destruir\xE1s", "sentir\xE1s", "describir\xE1s", "preferir\xE1s", "escribir\xE1s"];

        //array for el conjugations
        el = ["andar\xE1", "bailar\xE1", "cantar\xE1", "estar\xE1", "parar\xE1", "mandar\xE1", "llevar\xE1", "nadar\xE1", "cerrar\xE1", "enviar\xE1", "mostrar\xE1", "graduar\xE1", "dar\xE1", "almorzar\xE1", "comer\xE1", "creer\xE1", "beber\xE1", "vender\xE1", "conocer\xE1", "perder\xE1", "podr\xE1", "tendr\xE1", "escoger\xE1", "har\xE1", "pondr\xE1", "ver\xE1", "cabr\xE1", "traer\xE1", "ir\xE1", "dir\xE1", "dormir\xE1", "saldr\xE1", "vivir\xE1", "pedir\xE1", "mentir\xE1", "lucir\xE1", "distinguir\xE1", "destruir\xE1", "sentir\xE1", "describir\xE1", "preferir\xE1", "escribir\xE1"];

        //array for nosotros conjugations
        nos = ["andaremos", "bailaremos", "cantaremos", "estaremos", "pararemos", "mandaremos", "llevaremos", "nadaremos", "cerraremos", "enviaremos", "mostraremos", "graduaremos", "daremos", "almorzaremos", "comeremos", "creeremos", "beberemos", "venderemos", "conoceremos", "perderemos", "podremos", "tendremos", "escogeremos", "haremos", "pondremos", "veremos", "cabremos", "traeremos", "iremos","diremos", "dormiremos", "saldremos", "viviremos", "pediremos", "mentiremos", "luciremos", "distinguiremos", "destruiremos", "sentiremos", "describiremos", "preferiremos", "escribiremos"];

        //array for vosotros conjugations
        vos = ["andar\xE9is", "bailar\xE9is", "cantar\xE9is", "estar\xE9is", "parar\xE9is", "mandar\xE9is", "llevar\xE9is", "nadar\xE9is", "cerrar\xE9is", "enviar\xE9is", "mostrar\xE9is", "graduar\xE9is", "dar\xE9is", "almorzar\xE9is", "comer\xE9is", "creer\xE9is", "beber\xE9is", "vender\xE9is", "conocer\xE9is", "perder\xE9is", "podr\xE9is", "tendr\xE9is", "escoger\xE9is", "har\xE9is", "pondr\xE9is", "ver\xE9is", "cabr\xE9is", "traer\xE9is", "ir\xE9is", "dir\xE9is", "dormir\xE9is", "saldr\xE9is", "vivir\xE9is", "pedir\xE9is", "mentir\xE9is", "lucir\xE9is", "distinguir\xE9is", "destruir\xE9is", "sentir\xE9is", "describir\xE9is", "preferir\xE9is", "escribir\xE9is"];

        //array for ellos conjugations
        ellos = ["andar\xE1n", "bailar\xE1n", "cantar\xE1n", "estar\xE1n", "parar\xE1n", "mandar\xE1n", "llevar\xE1n", "nadar\xE1n", "cerrar\xE1n", "enviar\xE1n", "mostrar\xE1n", "graduar\xE1n", "dar\xE1n", "almorzar\xE1n", "comer\xE1n", "creer\xE1n", "beber\xE1n", "vender\xE1n", "conocer\xE1n", "perder\xE1n", "podr\xE1n", "tendr\xE1n", "escoger\xE1n", "har\xE1n", "pondr\xE1n", "ver\xE1n", "cabr\xE1n", "traer\xE1n", "ir\xE1n", "dir\xE1n", "dormir\xE1n", "saldr\xE1n", "vivir\xE1n", "pedir\xE1n", "mentir\xE1n", "lucir\xE1n", "distinguir\xE1n", "destruir\xE1n", "sentir\xE1n", "describir\xE1n", "preferir\xE1n", "escribir\xE1n"];

    } else if (numberPick == 4) {
    //IF THE NUMBER PICKED IS 4, THEN USE CONDITIONAL TENSE ARRAYS
        //array for yo conjugations
        yo = ["andar\xEDa", "bailar\xEDa", "cantar\xEDa", "estar\xEDa", "parar\xEDa", "mandar\xEDa", "llevar\xEDa", "nadar\xEDa", "cerrar\xEDa", "enviar\xEDa", "mostrar\xEDa", "graduar\xEDa", "dar\xEDa", "almorzar\xEDa", "comer\xEDa", "creer\xEDa", "beber\xEDa", "vender\xEDa", "conocer\xEDa", "perder\xEDa", "podr\xEDa", "tendr\xEDa", "escoger\xEDa", "har\xEDa", "pondr\xEDa", "ver\xEDa", "cabr\xEDa", "traer\xEDa", "ir\xEDa", "dir\xEDa", "dormir\xEDa", "saldr\xEDa", "vivir\xEDa", "pedir\xEDa", "mentir\xEDa", "lucir\xEDa", "distinguir\xEDa", "destruir\xEDa", "sentir\xEDa", "describir\xEDa", "preferir\xEDa", "escribir\xEDa"];

        //array for tu conjugations
        tu = ["andar\xEDas", "bailar\xEDas", "cantar\xEDas", "estar\xEDas", "parar\xEDas", "mandar\xEDas", "llevar\xEDas", "nadar\xEDas", "cerrar\xEDas", "enviar\xEDas", "mostrar\xEDas", "graduar\xEDas", "dar\xEDas", "almorzar\xEDas", "comer\xEDas", "creer\xEDas", "beber\xEDas", "vender\xEDas", "conocer\xEDas", "perder\xEDas", "podr\xEDas", "tendr\xEDas", "escoger\xEDas", "har\xEDas", "pondr\xEDas", "ver\xEDas", "cabr\xEDas", "traer\xEDas", "ir\xEDas", "dir\xEDas", "dormir\xEDas", "saldr\xEDas", "vivir\xEDas", "pedir\xEDas", "mentir\xEDas", "lucir\xEDas", "distinguir\xEDas", "destruir\xEDas", "sentir\xEDas", "describir\xEDas", "preferir\xEDas", "escribir\xEDas"];

        //array for el conjugations
        el = ["andar\xEDa", "bailar\xEDa", "cantar\xEDa", "estar\xEDa", "parar\xEDa", "mandar\xEDa", "llevar\xEDa", "nadar\xEDa", "cerrar\xEDa", "enviar\xEDa", "mostrar\xEDa", "graduar\xEDa", "dar\xEDa", "almorzar\xEDa", "comer\xEDa", "creer\xEDa", "beber\xEDa", "vender\xEDa", "conocer\xEDa", "perder\xEDa", "podr\xEDa", "tendr\xEDa", "escoger\xEDa", "har\xEDa", "pondr\xEDa", "ver\xEDa", "cabr\xEDa", "traer\xEDa", "ir\xEDa", "dir\xEDa", "dormir\xEDa", "saldr\xEDa", "vivir\xEDa", "pedir\xEDa", "mentir\xEDa", "lucir\xEDa", "distinguir\xEDa", "destruir\xEDa", "sentir\xEDa", "describir\xEDa", "preferir\xEDa", "escribir\xEDa"];

        //array for nosotros conjugations
        nos = ["andar\xEDamos", "bailar\xEDamos", "cantar\xEDamos", "estar\xEDamos", "parar\xEDamos", "mandar\xEDamos", "llevar\xEDamos", "nadar\xEDamos", "cerrar\xEDamos", "enviar\xEDamos", "mostrar\xEDamos", "graduar\xEDamos", "dar\xEDamos", "almorzar\xEDamos", "comer\xEDamos", "creer\xEDamos", "beber\xEDamos", "vender\xEDamos", "conocer\xEDamos", "perder\xEDamos", "podr\xEDamos", "tendr\xEDamos", "escoger\xEDamos", "har\xEDamos", "pondr\xEDamos", "ver\xEDamos", "cabr\xEDamos", "traer\xEDamos", "ir\xEDamos", "dir\xEDamos", "dormir\xEDamos", "saldr\xEDamos", "vivir\xEDamos", "pedir\xEDamos", "mentir\xEDamos", "lucir\xEDamos", "distinguir\xEDamos", "destruir\xEDamos", "sentir\xEDamos", "describir\xEDamos", "preferir\xEDamos", "escribir\xEDamos"];

        //array for vosotros conjugations
        vos = ["andar\xEDais", "bailar\xEDais", "cantar\xEDais", "estar\xEDais", "parar\xEDais", "mandar\xEDais", "llevar\xEDais", "nadar\xEDais", "cerrar\xEDais", "enviar\xEDais", "mostrar\xEDais", "graduar\xEDais", "dar\xEDais", "almorzar\xEDais", "comer\xEDais", "creer\xEDais", "beber\xEDais", "vender\xEDais", "conocer\xEDais", "perder\xEDais", "podr\xEDais", "tendr\xEDais", "escoger\xEDais", "har\xEDais", "pondr\xEDais", "ver\xEDais", "cabr\xEDais", "traer\xEDais", "ir\xEDais", "dir\xEDais", "dormir\xEDais", "saldr\xEDais", "vivir\xEDais", "pedir\xEDais", "mentir\xEDais", "lucir\xEDais", "distinguir\xEDais", "destruir\xEDais", "sentir\xEDais", "describir\xEDais", "preferir\xEDais", "escribir\xEDais"];

        //array for ellos conjugations
        ellos = ["andar\xEDan", "bailar\xEDan", "cantar\xEDan", "estar\xEDan", "parar\xEDan", "mandar\xEDan", "llevar\xEDan", "nadar\xEDan", "cerrar\xEDan", "enviar\xEDan", "mostrar\xEDan", "graduar\xEDan", "dar\xEDan", "almorzar\xEDan", "comer\xEDan", "creer\xEDan", "beber\xEDan", "vender\xEDan", "conocer\xEDan", "perder\xEDan", "podr\xEDan", "tendr\xEDan", "escoger\xEDan", "har\xEDan", "pondr\xEDan", "ver\xEDan", "cabr\xEDan", "traer\xEDan", "ir\xEDan", "dir\xEDan", "dormir\xEDan", "saldr\xEDan", "vivir\xEDan", "pedir\xEDan", "mentir\xEDan", "lucir\xEDan", "distinguir\xEDan", "destruir\xEDan", "sentir\xEDan", "describir\xEDan", "preferir\xEDan", "escribir\xEDan"];    

    } else if (numberPick == 5) {
    //IF THE NUMBER PICKED IS 5, THEN USE PRESENT SUBJUNCTIVE TENSE ARRAYS
        //array for yo conjugations
        yo = ["ande", "baile", "cante", "est\xE9", "pare", "mande", "lleve", "nade", "cierre", "env\xEDe", "muestre", "grad\xFAe", "d\xE9", "almuerce", "coma", "crea", "beba", "venda", "conozca", "pierda", "pueda", "tenga", "escoja", "haga", "ponga", "vea", "quepa", "traiga", "vaya", "diga", "duerma", "salga", "viva", "pida", "mienta", "luzca", "distinga", "destruya", "sienta", "describa", "prefiera", "escriba"];

        //array for tu conjugations
        tu = ["andes", "bailes", "cantes", "est\xE9s", "pares", "mandes", "lleves", "nades", "cierres", "env\xEDes", "muestres", "grad\xFAes", "des", "almuerces", "comas", "creas", "bebas", "vendas", "conozcas", "pierdas", "puedas", "tengas", "escojas", "hagas", "pongas", "veas", "quepas", "traigas", "vayas", "digas", "duermas", "salgas", "vivas", "pidas", "mientas", "luzcas", "distingas", "destruyas", "sientas", "describas", "prefieras", "escribas"];

        //array for el conjugations
        el = ["ande", "baile", "cante", "est\xE9", "pare", "mande", "lleve", "nade", "cierre", "env\xEDe", "muestre", "grad\xFAe", "d\xE9", "almuerce", "coma", "crea", "beba", "venda", "conozca", "pierda", "pueda", "tenga", "escoja", "haga", "ponga", "vea", "quepa", "traiga", "vaya", "diga", "duerma", "salga", "viva", "pida", "mienta", "luzca", "distinga", "destruya", "sienta", "describa", "prefiera", "escriba"];

        //array for nosotros conjugations
        nos = ["andemos", "bailemos", "cantemos", "estemos", "paremos", "mandemos", "llevemos", "nademos", "cerremos", "enviemos", "mostremos", "graduemos", "demos", "almorcemos", "comamos", "creamos", "bebamos", "vendamos", "conozcamos", "perdamos", "podamos", "tengamos", "escojamos", "hagamos", "pongamos", "veamos", "quepamos", "traigamos", "vayamos", "digamos", "durmamos", "salgamos", "vivamos", "pidamos", "mintamos", "luzcamos", "distingamos", "destruyamos", "sintamos", "describamos", "prefiramos", "escribamos"];

        //array for vosotros conjugations
        vos = ["and\xE9is", "bail\xE9is", "cant\xE9is", "est\xE9is", "par\xE9is", "mand\xE9is", "llev\xE9is", "nad\xE9is", "cerr\xE9is", "envi\xE9is", "mostr\xE9is", "gradu\xE9is", "deis", "almorc\xE9is", "com\xE1is", "cre\xE1is", "beb\xE1is", "vend\xE1is", "conozc\xE1is", "perd\xE1is", "pod\xE1is", "teng\xE1is", "escoj\xE1is", "hag\xE1is", "pong\xE1is", "ve\xE1is", "quep\xE1is", "traig\xE1is", "vay\xE1is", "dig\xE1is", "durm\xE1is", "salg\xE1is", "viv\xE1is", "pid\xE1is", "mint\xE1is", "luzc\xE1is", "disting\xE1is", "destruy\xE1is", "sint\xE1is", "describ\xE1is", "prefir\xE1is", "escrib\xE1is"];

        //array for ellos conjugations
        ellos = ["anden", "bailen", "canten", "est\xE9n", "paren", "manden", "lleven", "naden", "cierren", "env\xEDen", "muestren", "grad\xFAen", "den", "almuercen", "coman", "crean", "beban", "vendan", "conozcan", "pierdan", "puedan", "tengan", "escojan", "hagan", "pongan", "vean", "quepan", "traigan", "vayan", "digan", "duerman", "salgan", "vivan", "pidan", "mientan", "luzcan", "distingan", "destruyan", "sientan", "describan", "prefieran", "escriban"];

    } else if (numberPick == 6) {
    //IF THE NUMBER PICKED IS 6, THEN USE PAST SUBJUNCTIVE (-RA) TENSE ARRAYS
       //array for yo conjugations
        yo = ["anduviera", "bailara", "cantara", "estuviera", "parara", "mandara", "llevara", "nadara", "cerrara", "enviara", "mostrara", "graduara", "diera", "almorzara", "comiera", "creyera", "bebiera", "vendiera", "conociera", "perdiera", "pudiera", "tuviera", "escogiera", "hiciera", "pusiera", "viera", "cupiera", "trajera", "fuera", "dijera", "durmiera", "saliera", "viviera", "pidiera", "mintiera", "luciera", "distinguiera", "destruyera", "sintiera", "describiera", "prefiriera", "escribiera"];

        //array for tu conjugations
        tu = ["anduvieras", "bailaras", "cantaras", "estuvieras", "pararas", "mandaras", "llevaras", "nadaras", "cerraras", "enviaras", "mostraras", "graduaras", "dieras", "almorzaras", "comieras", "creyeras", "bebieras", "vendieras", "conocieras", "perdieras", "pudieras", "tuvieras", "escogieras", "hicieras", "pusieras", "vieras", "cupieras", "trajeras", "fueras", "dijeras", "durmieras", "salieras", "vivieras", "pidieras", "mintieras", "lucieras", "distinguieras", "destruyeras", "sintieras", "describieras", "prefirieras", "escribieras"];

        //array for el conjugations
        el = ["anduviera", "bailara", "cantara", "estuviera", "parara", "mandara", "llevara", "nadara", "cerrara", "enviara", "mostrara", "graduara", "diera", "almorzara", "comiera", "creyera", "bebiera", "vendiera", "conociera", "perdiera", "pudiera", "tuviera", "escogiera", "hiciera", "pusiera", "viera", "cupiera", "trajera", "fuera", "dijera", "durmiera", "saliera", "viviera", "pidiera", "mintiera", "luciera", "distinguiera", "destruyera", "sintiera", "describiera", "prefiriera", "escribiera"];

        //array for nosotros conjugations
        nos = ["anduvi\xE9ramos", "bail\xE1ramos", "cant\xE1ramos", "estuvi\xE9ramos", "par\xE1ramos", "mand\xE1ramos", "llev\xE1ramos", "nad\xE1ramos", "cerr\xE1ramos", "envi\xE1ramos", "mostr\xE1ramos", "gradu\xE1ramos", "di\xE9ramos", "almorz\xE1ramos", "comi\xE9ramos", "crey\xE9ramos", "bebi\xE9ramos", "vendi\xE9ramos", "conoci\xE9ramos", "perdi\xE9ramos", "pudi\xE9ramos", "tuvi\xE9ramos", "escogi\xE9ramos", "hici\xE9ramos", "pusi\xE9ramos", "vi\xE9ramos", "cupi\xE9ramos", "traj\xE9ramos", "fu\xE9ramos", "dij\xE9ramos", "durmi\xE9ramos", "sali\xE9ramos", "vivi\xE9ramos", "pidi\xE9ramos", "minti\xE9ramos", "luci\xE9ramos", "distingui\xE9ramos", "destruy\xE9ramos", "sinti\xE9ramos", "describi\xE9ramos", "prefiri\xE9ramos", "escribi\xE9ramos"];

        //array for vosotros conjugations
        vos = ["anduvierais", "bailarais", "cantarais", "estuvierais", "pararais", "mandarais", "llevarais", "nadarais", "cerrarais", "enviarais", "mostrarais", "graduarais", "dierais", "almorzarais", "comierais", "creyerais", "bebierais", "vendierais", "conocierais", "perdierais", "pudierais", "tuvierais", "escogierais", "hicierais", "pusierais", "vierais", "cupierais", "trajerais", "fuerais", "dijerais", "durmierais", "salierais", "vivierais", "pidierais", "mintierais", "lucierais", "distinguierais", "destruyerais", "sintierais", "describierais", "prefirierais", "escribierais"];

        //array for ellos conjugations
        ellos = ["anduvieran", "bailaran", "cantaran", "estuvieran", "pararan", "mandaran", "llevaran", "nadaran", "cerraran", "enviaran", "mostraran", "graduaran", "dieran", "almorzaran", "comieran", "creyeran", "bebieran", "vendiera", "conociera", "perdiera", "pudiera", "tuviera", "escogiera", "hiciera", "pusiera", "viera", "cupieran", "trajeran", "fueran", "dijeran", "durmieran", "salieran", "vivieran", "pidieran", "mintieran", "lucieran", "distinguieran", "destruyeran", "sintieran", "describieran", "prefirieran", "escribieran"]; 

    } else if (numberPick == 7) {
    //IF THE NUMBER PICKED IS 7, THEN USE PAST SUBJUNCTIVE (-SE) TENSE ARRAYS
        //array for yo conjugations
        yo = ["anduviese", "bailase", "cantase", "estuviese", "parase", "mandase", "llevase", "nadase", "cerrase", "enviase", "mostrase", "graduase", "diese", "almorzase", "comiese", "creyese", "bebiese", "vendiese", "conociese", "perdiese", "pudiese", "tuviese", "escogiese", "hiciese", "pusiese", "viese", "cupiese", "trajese", "fuese", "dijese", "durmiese", "saliese", "viviese", "pidiese", "mintiese", "luciese", "distinguiese", "destruyese", "sintiese", "describiese", "prefiriese", "escribiese"];

        //array for tu conjugations
        tu = ["anduvieses", "bailases", "cantases", "estuvieses", "parases", "mandases", "llevases", "nadases", "cerrases", "enviases", "mostrases", "graduases", "dieses", "almorzases", "comieses", "creyeses", "bebieses", "vendieses", "conocieses", "perdieses", "pudieses", "tuvieses", "escogieses", "hicieses", "pusieses", "vieses", "cupieses", "trajeses", "fueses", "dijeses", "durmieses", "salieses", "vivieses", "pidieses", "mintieses", "lucieses", "distinguieses", "destruyeses", "sintieses", "describieses", "prefirieses", "escribieses"];

        //array for el conjugations
        el = ["anduviese", "bailase", "cantase", "estuviese", "parase", "mandase", "llevase", "nadase", "cerrase", "enviase", "mostrase", "graduase", "diese", "almorzase", "comiese", "creyese", "bebiese", "vendiese", "conociese", "perdiese", "pudiese", "tuviese", "escogiese", "hiciese", "pusiese", "viese", "cupiese", "trajese", "fuese", "dijese", "durmiese", "saliese", "viviese", "pidiese", "mintiese", "luciese", "distinguiese", "destruyese", "sintiese", "describiese", "prefiriese", "escribiese"];

        //array for nosotros conjugations
        nos = ["anduvi\xE9semos", "bail\xE1semos", "cant\xE1semos", "estuvi\xE9semos", "par\xE1semos", "mand\xE1semos", "llev\xE1semos", "nad\xE1semos", "cerr\xE1semos", "envi\xE1semos", "mostr\xE1semos", "gradu\xE1semos", "di\xE9semos", "almorz\xE1semos", "comi\xE9semos", "crey\xE9semos", "bebi\xE9semos", "vendi\xE9semos", "conoci\xE9semos", "perdi\xE9semos", "pudi\xE9semos", "tuvi\xE9semos", "escogi\xE9semos", "hici\xE9semos", "pusi\xE9semos", "vi\xE9semos", "cupi\xE9semos", "traj\xE9semos", "fu\xE9semos", "dij\xE9semos", "durmi\xE9semos", "sali\xE9semos", "vivi\xE9semos", "pidi\xE9semos", "minti\xE9semos", "luci\xE9semos", "distingui\xE9semos", "destruy\xE9semos", "sinti\xE9semos", "describi\xE9semos", "prefiri\xE9semos", "escribi\xE9semos"];

        //array for vosotros conjugations
        vos = ["anduvieseis", "bailaseis", "cantaseis", "estuvieseis", "paraseis", "mandaseis", "llevaseis", "nadaseis", "cerraseis", "enviaseis", "mostraseis", "graduaseis", "dieseis", "almorzaseis", "comieseis", "creyeseis", "bebieseis", "vendieseis", "conocieseis", "perdieseis", "pudieseis", "tuvieseis", "escogieseis", "hicieseis", "pusieseis", "vieseis", "cupieseis", "trajeseis", "fueseis", "dijeseis", "durmieseis", "salieseis", "vivieseis", "pidieseis", "mintieseis", "lucieseis", "distinguieseis", "destruyeseis", "sintieseis", "describieseis", "prefirieseis", "escribieseis"];

        //array for ellos conjugations
        ellos = ["anduviesen", "bailasen", "cantasen", "estuviesen", "parasen", "mandasen", "llevasen", "nadasen", "cerrasen", "enviasen", "mostrasen", "graduasen", "diesen", "almorzasen", "comiesen", "creyesen", "bebiesen", "vendiesen", "conociesen", "perdiesen", "pudiesen", "tuviesen", "escogiesen", "hiciesen", "pusiesen", "viesen", "cupiesen", "trajesen", "fuesen", "dijesen", "durmiesen", "saliesen", "viviesen", "pidiesen", "mintiesen", "luciesen", "distinguiesen", "destruyesen", "sintiesen", "describiesen", "prefiriesen", "escribiesen"];
        
    } else if (numberPick == 8) {
    //IF THE NUMBER PICKED IS 8, THEN USE PRESENT PERFECT TENSE ARRAYS
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
        
    } else if (numberPick == 9) {
    //IF THE NUMBER PICKED IS 9, THEN USE PRETERITE ANTERIOR TENSE ARRAYS
       //array for yo conjugations
        yo = [ "hube andado", "hube bailado", "hube cantado", "hube estado", "hube parado", "hube mandado", "hube llevado", "hube nadado", "hube cerrado", "hube enviado", "hube mostrado", "hube graduado", "hube dado", "hube almorzado", "hube comido", "hube cre\xEDdo", "hube bebido", "hube vendido", "hube conocido", "hube perdido", "hube podido", "hube tenido", "hube escogido", "hube hecho", "hube puesto", "hube visto", "hube cabido", "hube tra\xEDdo", "hube ido", "hube dicho", "hube dormido", "hube salido", "hube vivido", "hube pedido", "hube mentido", "hube lucido", "hube distinguido", "hube destruido", "hube sentido", "hube descrito", "hube preferido", "hube escrito"];

        //array for tu conjugations
        tu = ["hubiste andado", "hubiste bailado", "hubiste cantado", "hubiste estado", "hubiste parado", "hubiste mandado", "hubiste llevado", "hubiste nadado", "hubiste cerrado", "hubiste enviado", "hubiste mostrado", "hubiste graduado", "hubiste dado", "hubiste almorzado", "hubiste comido", "hubiste cre\xEDdo", "hubiste bebido", "hubiste vendido", "hubiste conocido", "hubiste perdido", "hubiste podido", "hubiste tenido", "hubiste escogido", "hubiste hecho", "hubiste puesto", "hubiste visto", "hubiste cabido", "hubiste tra\xEDdo", "hubiste ido", "hubiste dicho", "hubiste dormido", "hubiste salido", "hubiste vivido", "hubiste pedido", "hubiste mentido", "hubiste lucido", "hubiste distinguido", "hubiste destruido", "hubiste sentido", "hubiste descrito", "hubiste preferido", "hubiste escrito"];

        //array for el conjugations
        el = [ "hubo andado", "hubo bailado", "hubo cantado", "hubo estado", "hubo parado", "hubo mandado", "hubo llevado", "hubo nadado", "hubo cerrado", "hubo enviado", "hubo mostrado", "hubo graduado", "hubo dado", "hubo almorzado", "hubo comido", "hubo cre\xEDdo", "hubo bebido", "hubo vendido", "hubo conocido", "hubo perdido", "hubo podido", "hubo tenido", "hubo escogido", "hubo hecho", "hubo puesto", "hubo visto", "hubo cabido", "hubo tra\xEDdo", "hubo ido", "hubo dicho", "hubo dormido", "hubo salido", "hubo vivido", "hubo pedido", "hubo mentido", "hubo lucido", "hubo distinguido", "hubo destruido", "hubo sentido", "hubo descrito", "hubo preferido", "hubo escrito"];

        //array for nosotros conjugations
        nos = [ "hubimos andado", "hubimos bailado", "hubimos cantado", "hubimos estado", "hubimos parado", "hubimos mandado", "hubimos llevado", "hubimos nadado", "hubimos cerrado", "hubimos enviado", "hubimos mostrado", "hubimos graduado", "hubimos dado", "hubimos almorzado", "hubimos comido", "hubimos cre\xEDdo", "hubimos bebido", "hubimos vendido", "hubimos conocido", "hubimos perdido", "hubimos podido", "hubimos tenido", "hubimos escogido", "hubimos hecho", "hubimos puesto", "hubimos visto", "hubimos cabido", "hubimos tra\xEDdo", "hubimos ido", "hubimos dicho", "hubimos dormido", "hubimos salido", "hubimos vivido", "hubimos pedido", "hubimos mentido", "hubimos lucido", "hubimos distinguido", "hubimos destruido", "hubimos sentido", "hubimos descrito", "hubimos preferido", "hubimos escrito"];

        //array for vosotros conjugations
        vos = ["hubisteis andado", "hubisteis bailado", "hubisteis cantado", "hubisteis estado", "hubisteis parado", "hubisteis mandado", "hubisteis llevado", "hubisteis nadado", "hubisteis cerrado", "hubisteis enviado", "hubisteis mostrado", "hubisteis graduado", "hubisteis dado", "hubisteis almorzado", "hubisteis comido", "hubisteis cre\xEDdo", "hubisteis bebido", "hubisteis vendido", "hubisteis conocido", "hubisteis perdido", "hubisteis podido", "hubisteis tenido", "hubisteis escogido", "hubisteis hecho", "hubisteis puesto", "hubisteis visto", "hubisteis cabido", "hubisteis tra\xEDdo", "hubisteis ido", "hubisteis dicho", "hubisteis dormido", "hubisteis salido", "hubisteis vivido", "hubisteis pedido", "hubisteis mentido", "hubisteis lucido", "hubisteis distinguido", "hubisteis destruido", "hubisteis sentido", "hubisteis descrito", "hubisteis preferido", "hubisteis escrito"];

        //array for ellos conjugations
        ellos = ["hubieron andado", "hubieron bailado", "hubieron cantado", "hubieron estado", "hubieron parado", "hubieron mandado", "hubieron llevado", "hubieron nadado", "hubieron cerrado", "hubieron enviado", "hubieron mostrado", "hubieron graduado", "hubieron dado", "hubieron almorzado", "hubieron comido", "hubieron cre\xEDdo", "hubieron bebido", "hubieron vendido", "hubieron conocido", "hubieron perdido", "hubieron podido", "hubieron tenido", "hubieron escogido", "hubieron hecho", "hubieron puesto", "hubieron visto", "hubieron cabido", "hubieron tra\xEDdo", "hubieron ido", "hubieron dicho", "hubieron dormido", "hubieron salido", "hubieron vivido", "hubieron pedido", "hubieron mentido", "hubieron lucido", "hubieron distinguido", "hubieron destruido", "hubieron sentido", "hubieron descrito", "hubieron preferido", "hubieron escrito"]; 
        
    } else if (numberPick == 10) {    
    //IF THE NUMBER PICKED IS 10, THEN USE PAST PERFECT TENSE ARRAYS
        //array for yo conjugations
        yo = ["hab\xEDa andado", "hab\xEDa bailado", "hab\xEDa cantado", "hab\xEDa estado", "hab\xEDa parado", "hab\xEDa mandado", "hab\xEDa llevado", "hab\xEDa nadado", "hab\xEDa cerrado", "hab\xEDa enviado", "hab\xEDa mostrado", "hab\xEDa graduado", "hab\xEDa dado", "hab\xEDa almorzado", "hab\xEDa comido", "hab\xEDa cre\xEDdo", "hab\xEDa bebido", "hab\xEDa vendido", "hab\xEDa conocido", "hab\xEDa perdido", "hab\xEDa podido", "hab\xEDa tenido", "hab\xEDa escogido", "hab\xEDa hecho", "hab\xEDa puesto", "hab\xEDa visto", "hab\xEDa cabido", "hab\xEDa tra\xEDdo", "hab\xEDa ido", "hab\xEDa dicho", "hab\xEDa dormido", "hab\xEDa salido", "hab\xEDa vivido", "hab\xEDa pedido", "hab\xEDa mentido", "hab\xEDa lucido", "hab\xEDa distinguido", "hab\xEDa destruido", "hab\xEDa sentido", "hab\xEDa descrito", "hab\xEDa preferido", "hab\xEDa escrito"];

        //array for tu conjugations
        tu = ["hab\xEDas andado", "hab\xEDas bailado", "hab\xEDas cantado", "hab\xEDas estado", "hab\xEDas parado", "hab\xEDas mandado", "hab\xEDas llevado", "hab\xEDas nadado", "hab\xEDas cerrado", "hab\xEDas enviado", "hab\xEDas mostrado", "hab\xEDas graduado", "hab\xEDas dado", "hab\xEDas almorzado", "hab\xEDas comido", "hab\xEDas cre\xEDdo", "hab\xEDas bebido", "hab\xEDas vendido", "hab\xEDas conocido", "hab\xEDas perdido", "hab\xEDas podido", "hab\xEDas tenido", "hab\xEDas escogido", "hab\xEDas hecho", "hab\xEDas puesto", "hab\xEDas visto", "hab\xEDas cabido", "hab\xEDas tra\xEDdo", "hab\xEDas ido", "hab\xEDas dicho", "hab\xEDas dormido", "hab\xEDas salido", "hab\xEDas vivido", "hab\xEDas pedido", "hab\xEDas mentido", "hab\xEDas lucido", "hab\xEDas distinguido", "hab\xEDas destruido", "hab\xEDas sentido", "hab\xEDas descrito", "hab\xEDas preferido", "hab\xEDas escrito"];

        //array for el conjugations
        el = ["hab\xEDa andado", "hab\xEDa bailado", "hab\xEDa cantado", "hab\xEDa estado", "hab\xEDa parado", "hab\xEDa mandado", "hab\xEDa llevado", "hab\xEDa nadado", "hab\xEDa cerrado", "hab\xEDa enviado", "hab\xEDa mostrado", "hab\xEDa graduado", "hab\xEDa dado", "hab\xEDa almorzado", "hab\xEDa comido", "hab\xEDa cre\xEDdo", "hab\xEDa bebido", "hab\xEDa vendido", "hab\xEDa conocido", "hab\xEDa perdido", "hab\xEDa podido", "hab\xEDa tenido", "hab\xEDa escogido", "hab\xEDa hecho", "hab\xEDa puesto", "hab\xEDa visto", "hab\xEDa cabido", "hab\xEDa tra\xEDdo", "hab\xEDa ido", "hab\xEDa dicho", "hab\xEDa dormido", "hab\xEDa salido", "hab\xEDa vivido", "hab\xEDa pedido", "hab\xEDa mentido", "hab\xEDa lucido", "hab\xEDa distinguido", "hab\xEDa destruido", "hab\xEDa sentido", "hab\xEDa descrito", "hab\xEDa preferido", "hab\xEDa escrito"];

        //array for nosotros conjugations
        nos = ["hab\xEDamos andado", "hab\xEDamos bailado", "hab\xEDamos cantado", "hab\xEDamos estado", "hab\xEDamos parado", "hab\xEDamos mandado", "hab\xEDamos llevado", "hab\xEDamos nadado", "hab\xEDamos cerrado", "hab\xEDamos enviado", "hab\xEDamos mostrado", "hab\xEDamos graduado", "hab\xEDamos dado", "hab\xEDamos almorzado", "hab\xEDamos comido", "hab\xEDamos cre\xEDdo", "hab\xEDamos bebido", "hab\xEDamos vendido", "hab\xEDamos conocido", "hab\xEDamos perdido", "hab\xEDamos podido", "hab\xEDamos tenido", "hab\xEDamos escogido", "hab\xEDamos hecho", "hab\xEDamos puesto", "hab\xEDamos visto", "hab\xEDamos cabido", "hab\xEDamos tra\xEDdo", "hab\xEDamos ido", "hab\xEDamos dicho", "hab\xEDamos dormido", "hab\xEDamos salido", "hab\xEDamos vivido", "hab\xEDamos pedido", "hab\xEDamos mentido", "hab\xEDamos lucido", "hab\xEDamos distinguido", "hab\xEDamos destruido", "hab\xEDamos sentido", "hab\xEDamos descrito", "hab\xEDamos preferido", "hab\xEDamos escrito"];

        //array for vosotros conjugations
        vos = ["hab\xEDais andado", "hab\xEDais bailado", "hab\xEDais cantado", "hab\xEDais estado", "hab\xEDais parado", "hab\xEDais mandado", "hab\xEDais llevado", "hab\xEDais nadado", "hab\xEDais cerrado", "hab\xEDais enviado", "hab\xEDais mostrado", "hab\xEDais graduado", "hab\xEDais dado", "hab\xEDais almorzado", "hab\xEDais comido", "hab\xEDais cre\xEDdo", "hab\xEDais bebido", "hab\xEDais vendido", "hab\xEDais conocido", "hab\xEDais perdido", "hab\xEDais podido", "hab\xEDais tenido", "hab\xEDais escogido", "hab\xEDais hecho", "hab\xEDais puesto", "hab\xEDais visto", "hab\xEDais cabido", "hab\xEDais tra\xEDdo", "hab\xEDais ido", "hab\xEDais dicho", "hab\xEDais dormido", "hab\xEDais salido", "hab\xEDais vivido", "hab\xEDais pedido", "hab\xEDais mentido", "hab\xEDais lucido", "hab\xEDais distinguido", "hab\xEDais destruido", "hab\xEDais sentido", "hab\xEDais descrito", "hab\xEDais preferido", "hab\xEDais escrito"];

        //array for ellos conjugations
        ellos = ["hab\xEDan andado", "hab\xEDan bailado", "hab\xEDan cantado", "hab\xEDan estado", "hab\xEDan parado", "hab\xEDan mandado", "hab\xEDan llevado", "hab\xEDan nadado", "hab\xEDan cerrado", "hab\xEDan enviado", "hab\xEDan mostrado", "hab\xEDan graduado", "hab\xEDan dado", "hab\xEDan almorzado", "hab\xEDan comido", "hab\xEDan cre\xEDdo", "hab\xEDan bebido", "hab\xEDan vendido", "hab\xEDan conocido", "hab\xEDan perdido", "hab\xEDan podido", "hab\xEDan tenido", "hab\xEDan escogido", "hab\xEDan hecho", "hab\xEDan puesto", "hab\xEDan visto", "hab\xEDan cabido", "hab\xEDan tra\xEDdo", "hab\xEDan ido", "hab\xEDan dicho", "hab\xEDan dormido", "hab\xEDan salido", "hab\xEDan vivido", "hab\xEDan pedido", "hab\xEDan mentido", "hab\xEDan lucido", "hab\xEDan distinguido", "hab\xEDan destruido", "hab\xEDan sentido", "hab\xEDan descrito", "hab\xEDan preferido", "hab\xEDan escrito"];
        
    } else if (numberPick == 11) {
    //IF THE NUMBER PICKED IS 11, THEN USE FUTURE PERFECT TENSE ARRAYS
       //array for yo conjugations
        yo = ["habr\xE9 andado", "habr\xE9 bailado", "habr\xE9 cantado", "habr\xE9 estado", "habr\xE9 parado", "habr\xE9 mandado", "habr\xE9 llevado", "habr\xE9 nadado", "habr\xE9 cerrado", "habr\xE9 enviado", "habr\xE9 mostrado", "habr\xE9 graduado", "habr\xE9 dado", "habr\xE9 almorzado", "habr\xE9 comido", "habr\xE9 cre\xEDdo", "habr\xE9 bebido", "habr\xE9 vendido", "habr\xE9 conocido", "habr\xE9 perdido", "habr\xE9 podido", "habr\xE9 tenido", "habr\xE9 escogido", "habr\xE9 hecho", "habr\xE9 puesto", "habr\xE9 visto", "habr\xE9 cabido", "habr\xE9 tra\xEDdo", "habr\xE9 ido", "habr\xE9 dicho", "habr\xE9 dormido", "habr\xE9 salido", "habr\xE9 vivido", "habr\xE9 pedido", "habr\xE9 mentido", "habr\xE9 lucido", "habr\xE9 distinguido", "habr\xE9 destruido", "habr\xE9 sentido", "habr\xE9 descrito", "habr\xE9 preferido", "habr\xE9 escrito"];

        //array for tu conjugations
        tu = ["habr\xE1s andado", "habr\xE1s bailado", "habr\xE1s cantado", "habr\xE1s estado", "habr\xE1s parado", "habr\xE1s mandado", "habr\xE1s llevado", "habr\xE1s nadado", "habr\xE1s cerrado", "habr\xE1s enviado", "habr\xE1s mostrado", "habr\xE1s graduado", "habr\xE1s dado", "habr\xE1s almorzado", "habr\xE1s comido", "habr\xE1s cre\xEDdo", "habr\xE1s bebido", "habr\xE1s vendido", "habr\xE1s conocido", "habr\xE1s perdido", "habr\xE1s podido", "habr\xE1s tenido", "habr\xE1s escogido", "habr\xE1s hecho", "habr\xE1s puesto", "habr\xE1s visto", "habr\xE1s cabido", "habr\xE1s tra\xEDdo", "habr\xE1s ido", "habr\xE1s dicho", "habr\xE1s dormido", "habr\xE1s salido", "habr\xE1s vivido", "habr\xE1s pedido", "habr\xE1s mentido", "habr\xE1s lucido", "habr\xE1s distinguido", "habr\xE1s destruido", "habr\xE1s sentido", "habr\xE1s descrito", "habr\xE1s preferido", "habr\xE1s escrito"];

        //array for el conjugations
        el = ["habr\xE1 andado", "habr\xE1 bailado", "habr\xE1 cantado", "habr\xE1 estado", "habr\xE1 parado", "habr\xE1 mandado", "habr\xE1 llevado", "habr\xE1 nadado", "habr\xE1 cerrado", "habr\xE1 enviado", "habr\xE1 mostrado", "habr\xE1 graduado", "habr\xE1 dado", "habr\xE1 almorzado", "habr\xE1 comido", "habr\xE1 cre\xEDdo", "habr\xE1 bebido", "habr\xE1 vendido", "habr\xE1 conocido", "habr\xE1 perdido", "habr\xE1 podido", "habr\xE1 tenido", "habr\xE1 escogido", "habr\xE1 hecho", "habr\xE1 puesto", "habr\xE1 visto", "habr\xE1 cabido", "habr\xE1 tra\xEDdo", "habr\xE1 ido", "habr\xE1 dicho", "habr\xE1 dormido", "habr\xE1 salido", "habr\xE1 vivido", "habr\xE1 pedido", "habr\xE1 mentido", "habr\xE1 lucido", "habr\xE1 distinguido", "habr\xE1 destruido", "habr\xE1 sentido", "habr\xE1 descrito", "habr\xE1 preferido", "habr\xE1 escrito"];

        //array for nosotros conjugations
        nos = ["habremos andado", "habremos bailado", "habremos cantado", "habremos estado", "habremos parado", "habremos mandado", "habremos llevado", "habremos nadado", "habremos cerrado", "habremos enviado", "habremos mostrado", "habremos graduado", "habremos dado", "habremos almorzado", "habremos comido", "habremos cre\xEDdo", "habremos bebido", "habremos vendido", "habremos conocido", "habremos perdido", "habremos podido", "habremos tenido", "habremos escogido", "habremos hecho", "habremos puesto", "habremos visto", "habremos cabido", "habremos tra\xEDdo", "habremos ido", "habremos dicho", "habremos dormido", "habremos salido", "habremos vivido", "habremos pedido", "habremos mentido", "habremos lucido", "habreamos distinguido", "habre\xEDamos destruido", "habremos sentido", "habremos descrito", "habremos preferido", "habremos escrito"];

        //array for vosotros conjugations
        vos = ["habr\xE9is andado", "habr\xE9is bailado", "habr\xE9is cantado", "habr\xE9is estado", "habr\xE9is parado", "habr\xE9is mandado", "habr\xE9is llevado", "habr\xE9is nadado", "habr\xE9is cerrado", "habr\xE9is enviado", "habr\xE9is mostrado", "habr\xE9is graduado", "habr\xE9is dado", "habr\xE9is almorzado", "habr\xE9is comido", "habr\xE9is cre\xEDdo", "habr\xE9is bebido", "habr\xE9is vendido", "habr\xE9is conocido", "habr\xE9is perdido", "habr\xE9is podido", "habr\xE9is tenido", "habr\xE9is escogido", "habr\xE9is hecho", "habr\xE9is puesto", "habr\xE9is visto", "habr\xE9is cabido", "habr\xE9is tra\xEDdo", "habr\xE9is ido", "habr\xE9is dicho", "habr\xE9is dormido", "habr\xE9is salido", "habr\xE9is vivido", "habr\xE9is pedido", "habr\xE9is mentido", "habr\xE9is lucido", "habr\xE9is distinguido", "habr\xE9is destruido", "habr\xE9is sentido", "habr\xE9is descrito", "habr\xE9is preferido", "habr\xE9is escrito"];

        //array for ellos conjugations
        ellos = ["habr\xE1n andado", "habr\xE1n bailado", "habr\xE1n cantado", "habr\xE1n estado", "habr\xE1n parado", "habr\xE1n mandado", "habr\xE1n llevado", "habr\xE1n nadado", "habr\xE1n cerrado", "habr\xE1n enviado", "habr\xE1n mostrado", "habr\xE1n graduado", "habr\xE1n dado", "habr\xE1n almorzado", "habr\xE1n comido", "habr\xE1n cre\xEDdo", "habr\xE1n bebido", "habr\xE1n vendido", "habr\xE1n conocido", "habr\xE1n perdido", "habr\xE1n podido", "habr\xE1n tenido", "habr\xE1n escogido", "habr\xE1n hecho", "habr\xE1n puesto", "habr\xE1n visto", "habr\xE1n cabido", "habr\xE1n tra\xEDdo", "habr\xE1n ido", "habr\xE1n dicho", "habr\xE1n dormido", "habr\xE1n salido", "habr\xE1n vivido", "habr\xE1n pedido", "habr\xE1n mentido", "habr\xE1n lucido", "habr\xE1n distinguido", "habr\xE1n destruido", "habr\xE1n sentido", "habr\xE1n descrito", "habr\xE1n preferido", "habr\xE1n escrito"]; 
        
    } else if (numberPick == 12) {
    //IF THE NUMBER PICKED IS 12, THEN USE CONDITIONAL PERFECT TENSE ARRAYS
        //array for yo conjugations
        yo = ["habr\xEDa andado", "habr\xEDa bailado", "habr\xEDa cantado", "habr\xEDa estado", "habr\xEDa parado", "habr\xEDa mandado", "habr\xEDa llevado", "habr\xEDa nadado", "habr\xEDa cerrado", "habr\xEDa enviado", "habr\xEDa mostrado", "habr\xEDa graduado", "habr\xEDa dado", "habr\xEDa almorzado", "habr\xEDa comido", "habr\xEDa cre\xEDdo", "habr\xEDa bebido", "habr\xEDa vendido", "habr\xEDa conocido", "habr\xEDa perdido", "habr\xEDa podido", "habr\xEDa tenido", "habr\xEDa escogido", "habr\xEDa hecho", "habr\xEDa puesto", "habr\xEDa visto", "habr\xEDa cabido", "habr\xEDa tra\xEDdo", "habr\xEDa ido", "habr\xEDa dicho", "habr\xEDa dormido", "habr\xEDa salido", "habr\xEDa vivido", "habr\xEDa pedido", "habr\xEDa mentido", "habr\xEDa lucido", "habr\xEDa distinguido", "habr\xEDa destruido", "habr\xEDa sentido", "habr\xEDa descrito", "habr\xEDa preferido", "habr\xEDa escrito"];

        //array for tu conjugations
        tu = ["habr\xEDas andado", "habr\xEDas bailado", "habr\xEDas cantado", "habr\xEDas estado", "habr\xEDas parado", "habr\xEDas mandado", "habr\xEDas llevado", "habr\xEDas nadado", "habr\xEDas cerrado", "habr\xEDas enviado", "habr\xEDas mostrado", "habr\xEDas graduado", "habr\xEDas dado", "habr\xEDas almorzado", "habr\xEDas comido", "habr\xEDas cre\xEDdo", "habr\xEDas bebido", "habr\xEDas vendido", "habr\xEDas conocido", "habr\xEDas perdido", "habr\xEDas podido", "habr\xEDas tenido", "habr\xEDas escogido", "habr\xEDas hecho", "habr\xEDas puesto", "habr\xEDas visto", "habr\xEDas cabido", "habr\xEDas tra\xEDdo", "habr\xEDas ido", "habr\xEDas dicho", "habr\xEDas dormido", "habr\xEDas salido", "habr\xEDas vivido", "habr\xEDas pedido", "habr\xEDas mentido", "habr\xEDas lucido", "habr\xEDas distinguido", "habr\xEDas destruido", "habr\xEDas sentido", "habr\xEDas descrito", "habr\xEDas preferido", "habr\xEDas escrito"];

        //array for el conjugations
        el = ["habr\xEDa andado", "habr\xEDa bailado", "habr\xEDa cantado", "habr\xEDa estado", "habr\xEDa parado", "habr\xEDa mandado", "habr\xEDa llevado", "habr\xEDa nadado", "habr\xEDa cerrado", "habr\xEDa enviado", "habr\xEDa mostrado", "habr\xEDa graduado", "habr\xEDa dado", "habr\xEDa almorzado", "habr\xEDa comido", "habr\xEDa cre\xEDdo", "habr\xEDa bebido", "habr\xEDa vendido", "habr\xEDa conocido", "habr\xEDa perdido", "habr\xEDa podido", "habr\xEDa tenido", "habr\xEDa escogido", "habr\xEDa hecho", "habr\xEDa puesto", "habr\xEDa visto", "habr\xEDa cabido", "habr\xEDa tra\xEDdo", "habr\xEDa ido", "habr\xEDa dicho", "habr\xEDa dormido", "habr\xEDa salido", "habr\xEDa vivido", "habr\xEDa pedido", "habr\xEDa mentido", "habr\xEDa lucido", "habr\xEDa distinguido", "habr\xEDa destruido", "habr\xEDa sentido", "habr\xEDa descrito", "habr\xEDa preferido", "habr\xEDa escrito"];

        //array for nosotros conjugations
        nos = ["habr\xEDamos andado", "habr\xEDamos bailado", "habr\xEDamos cantado", "habr\xEDamos estado", "habr\xEDamos parado", "habr\xEDamos mandado", "habr\xEDamos llevado", "habr\xEDamos nadado", "habr\xEDamos cerrado", "habr\xEDamos enviado", "habr\xEDamos mostrado", "habr\xEDamos graduado", "habr\xEDamos dado", "habr\xEDamos almorzado", "habr\xEDamos comido", "habr\xEDamos cre\xEDdo", "habr\xEDamos bebido", "habr\xEDamos vendido", "habr\xEDamos conocido", "habr\xEDamos perdido", "habr\xEDamos podido", "habr\xEDamos tenido", "habr\xEDamos escogido", "habr\xEDamos hecho", "habr\xEDamos puesto", "habr\xEDamos visto", "habr\xEDamos cabido", "habr\xEDamos tra\xEDdo", "habr\xEDamos ido", "habr\xEDamos dicho", "habr\xEDamos dormido", "habr\xEDamos salido", "habr\xEDamos vivido", "habr\xEDamos pedido", "habr\xEDamos mentido", "habr\xEDamos lucido", "habr\xEDamos distinguido", "habr\xEDamos destruido", "habr\xEDamos sentido", "habr\xEDamos descrito", "habr\xEDamos preferido", "habr\xEDamos escrito"];

        //array for vosotros conjugations
        vos = ["habr\xEDais andado", "habr\xEDais bailado", "habr\xEDais cantado", "habr\xEDais estado", "habr\xEDais parado", "habr\xEDais mandado", "habr\xEDais llevado", "habr\xEDais nadado", "habr\xEDais cerrado", "habr\xEDais enviado", "habr\xEDais mostrado", "habr\xEDais graduado", "habr\xEDais dado", "habr\xEDais almorzado", "habr\xEDais comido", "habr\xEDais cre\xEDdo", "habr\xEDais bebido", "habr\xEDais vendido", "habr\xEDais conocido", "habr\xEDais perdido", "habr\xEDais podido", "habr\xEDais tenido", "habr\xEDais escogido", "habr\xEDais hecho", "habr\xEDais puesto", "habr\xEDais visto", "habr\xEDais cabido", "habr\xEDais tra\xEDdo", "habr\xEDais ido", "habr\xEDais dicho", "habr\xEDais dormido", "habr\xEDais salido", "habr\xEDais vivido", "habr\xEDais pedido", "habr\xEDais mentido", "habr\xEDais lucido", "habr\xEDais distinguido", "habr\xEDais destruido", "habr\xEDais sentido", "habr\xEDais descrito", "habr\xEDais preferido", "habr\xEDais escrito"];

        //array for ellos conjugations
        ellos = ["habr\xEDan andado", "habr\xEDan bailado", "habr\xEDan cantado", "habr\xEDan estado", "habr\xEDan parado", "habr\xEDan mandado", "habr\xEDan llevado", "habr\xEDan nadado", "habr\xEDan cerrado", "habr\xEDan enviado", "habr\xEDan mostrado", "habr\xEDan graduado", "habr\xEDan dado", "habr\xEDan almorzado", "habr\xEDan comido", "habr\xEDan cre\xEDdo", "habr\xEDan bebido", "hab\xEDan vendido", "hab\xEDan conocido", "hab\xEDan perdido", "hab\xEDan podido", "hab\xEDan tenido", "hab\xEDan escogido", "habr\xEDan hecho", "habr\xEDan puesto", "habr\xEDan visto", "habr\xEDan cabido", "habr\xEDan tra\xEDdo", "habr\xEDan ido", "habr\xEDan dicho", "habr\xEDan dormido", "habr\xEDan salido", "habr\xEDan vivido", "habr\xEDan pedido", "habr\xEDan mentido", "habr\xEDan lucido", "habr\xEDan distinguido", "habr\xEDan destruido", "habr\xEDan sentido", "habr\xEDan descrito", "habr\xEDan preferido", "habr\xEDan escrito"];
        
    } else if (numberPick == 13) {
    //IF THE NUMBER PICKED IS 13, THEN USE PRESENT PERFECT SUBJUNCTIVE TENSE ARRAYS
       //array for yo conjugations
        yo = ["haya andado", "haya bailado", "haya cantado", "haya estado", "haya parado", "haya mandado", "haya llevado", "haya nadado", "haya cerrado", "haya enviado", "haya mostrado", "haya graduado", "haya dado", "haya almorzado", "haya comido", "haya cre\xEDdo", "haya bebido", "haya vendido", "haya conocido", "haya perdido", "haya podido", "haya tenido", "haya escogido", "haya hecho", "haya puesto", "haya visto", "haya cabido", "haya tra\xEDdo", "haya ido", "haya dicho", "haya dormido", "haya salido", "haya vivido", "haya pedido", "haya mentido", "haya lucido", "haya distinguido", "haya destruido", "haya sentido", "haya descrito", "haya preferido", "haya escrito"];

        //array for tu conjugations
        tu = ["hayas andado", "hayas bailado", "hayas cantado", "hayas estado", "hayas parado", "hayas mandado", "hayas llevado", "hayas nadado", "hayas cerrado", "hayas enviado", "hayas mostrado", "hayas graduado", "hayas dado", "hayas almorzado", "hayas comido", "hayas cre\xEDdo", "hayas bebido", "hayas vendido", "hayas conocido", "hayas perdido", "hayas podido", "hayas tenido", "hayas escogido", "hayas hecho", "hayas puesto", "hayas visto", "hayas cabido", "hayas tra\xEDdo", "hayas ido", "hayas dicho", "hayas dormido", "hayas salido", "hayas vivido", "hayas pedido", "hayas mentido", "hayas lucido", "hayas distinguido", "hayas destruido", "hayas sentido", "hayas descrito", "hayas preferido", "hayas escrito"];

        //array for el conjugations
        el = ["haya andado", "haya bailado", "haya cantado", "haya estado", "haya parado", "haya mandado", "haya llevado", "haya nadado", "haya cerrado", "haya enviado", "haya mostrado", "haya graduado", "haya dado", "haya almorzado", "haya comido", "haya cre\xEDdo", "haya bebido", "haya vendido", "haya conocido", "haya perdido", "haya podido", "haya tenido", "haya escogido", "haya hecho", "haya puesto", "haya visto", "haya cabido", "haya tra\xEDdo", "haya ido", "haya dicho", "haya dormido", "haya salido", "haya vivido", "haya pedido", "haya mentido", "haya lucido", "haya distinguido", "haya destruido", "haya sentido", "haya descrito", "haya preferido", "haya escrito"];

        //array for nosotros conjugations
        nos = ["hayamos andado", "hayamos bailado", "hayamos cantado", "hayamos estado", "hayamos parado", "hayamos mandado", "hayamos llevado", "hayamos nadado", "hayamos cerrado", "hayamos enviado", "hayamos mostrado", "hayamos graduado", "hayamos dado", "hayamos almorzado", "hayamos comido", "hayamos cre\xEDdo", "hayamos bebido", "hayamos vendido", "hayamos conocido", "hayamos perdido", "hayamos podido", "hayamos tenido", "hayamos escogido", "hayamos hecho", "hayamos puesto", "hayamos visto", "hayamos cabido", "hayamos tra\xEDdo", "hayamos ido", "hayamos dicho", "hayamos dormido", "hayamos salido", "hayamos vivido", "hayamos pedido", "hayamos mentido", "hayamos lucido", "hayamos distinguido", "hayamos destruido", "hayamos sentido", "hayamos descrito", "hayamos preferido", "hayamos escrito"];

        //array for vosotros conjugations
        vos = ["hay\xE1is andado", "hay\xE1is bailado", "hay\xE1is cantado", "hay\xE1is estado", "hay\xE1is parado", "hay\xE1is mandado", "hay\xE1is llevado", "hay\xE1is nadado", "hay\xE1is cerrado", "hay\xE1is enviado", "hay\xE1is mostrado", "hay\xE1is graduado", "hay\xE1is dado", "hay\xE1is almorzado", "hay\xE1is comido", "hay\xE1is cre\xEDdo", "hay\xE1is bebido", "hay\xE1is vendido", "hay\xE1is conocido", "hay\xE1is perdido", "hay\xE1is podido", "hay\xE1is tenido", "hay\xE1is escogido", "hay\xE1is hecho", "hay\xE1is puesto", "hay\xE1is visto", "hay\xE1is cabido", "hay\xE1is tra\xEDdo", "hay\xE1is ido", "hay\xE1is dicho", "hay\xE1is dormido", "hay\xE1is salido", "hay\xE1is vivido", "hay\xE1is pedido", "hay\xE1is mentido", "hay\xE1is lucido", "hay\xE1is distinguido", "hay\xE1is destruido", "hay\xE1is sentido", "hay\xE1is descrito", "hay\xE1is preferido", "hay\xE1is escrito"];

        //array for ellos conjugations
        ellos = ["hayan andado", "hayan bailado", "hayan cantado", "hayan estado", "hayan parado", "hayan mandado", "hayan llevado", "hayan nadado", "hayan cerrado", "hayan enviado", "hayan mostrado", "hayan graduado", "hayan dado", "hayan almorzado", "hayan comido", "hayan cre\xEDdo", "hayan bebido", "hayan vendido", "hayan conocido", "hayan perdido", "hayan podido", "hayan tenido", "hayan escogido", "hayan hecho", "hayan puesto", "hayan visto", "hayan cabido", "hayan tra\xEDdo", "hayan ido", "hayan dicho", "hayan dormido", "hayan salido", "hayan vivido", "hayan pedido", "hayan mentido", "hayan lucido", "hayan distinguido", "hayan destruido", "hayan sentido", "hayan descrito", "hayan preferido", "hayan escrito"]; 
        
    } else if (numberPick == 14) {
    //IF THE NUMBER PICKED IS 14, THEN USE PAST PERFECT SUBJUNCTIVE (-RA) TENSE ARRAYS
        //array for yo conjugations
        yo = ["hubiera andado", "hubiera bailado", "hubiera cantado", "hubiera estado", "hubiera parado", "hubiera mandado", "hubiera llevado", "hubiera nadado", "hubiera cerrado", "hubiera enviado", "hubiera mostrado", "hubiera graduado", "hubiera dado", "hubiera almorzado", "hubiera comido", "hubiera cre\xEDdo", "hubiera bebido", "hubiera vendido", "hubiera conocido", "hubiera perdido", "hubiera podido", "hubiera tenido", "hubiera escogido", "hubiera hecho", "hubiera puesto", "hubiera visto", "hubiera cabido", "hubiera tra\xEDdo", "hubiera ido", "hubiera dicho", "hubiera dormido", "hubiera salido", "hubiera vivido", "hubiera pedido", "hubiera mentido", "hubiera lucido", "hubiera distinguido", "hubiera destruido", "hubiera sentido", "hubiera descrito", "hubiera preferido", "hubiera escrito"];

        //array for tu conjugations
        tu = ["hubieras andado", "hubieras bailado", "hubieras cantado", "hubieras estado", "hubieras parado", "hubieras mandado", "hubieras llevado", "hubieras nadado", "hubieras cerrado", "hubieras enviado", "hubieras mostrado", "hubieras graduado", "hubieras dado", "hubieras almorzado", "hubieras comido", "hubieras cre\xEDdo", "hubieras bebido", "hubieras vendido", "hubieras conocido", "hubieras perdido", "hubieras podido", "hubieras tenido", "hubieras escogido", "hubieras hecho", "hubieras puesto", "hubieras visto", "hubieras cabido", "hubieras tra\xEDdo", "hubieras ido", "hubieras dicho", "hubieras dormido", "hubieras salido", "hubieras vivido", "hubieras pedido", "hubieras mentido", "hubieras lucido", "hubieras distinguido", "hubieras destruido", "hubieras sentido", "hubieras descrito", "hubieras preferido", "hubieras escrito"];

        //array for el conjugations
        el = ["hubiera andado", "hubiera bailado", "hubiera cantado", "hubiera estado", "hubiera parado", "hubiera mandado", "hubiera llevado", "hubiera nadado", "hubiera cerrado", "hubiera enviado", "hubiera mostrado", "hubiera graduado", "hubiera dado", "hubiera almorzado", "hubiera comido", "hubiera cre\xEDdo", "hubiera bebido", "hubiera vendido", "hubiera conocido", "hubiera perdido", "hubiera podido", "hubiera tenido", "hubiera escogido", "hubiera hecho", "hubiera puesto", "hubiera visto", "hubiera cabido", "hubiera tra\xEDdo", "hubiera ido", "hubiera dicho", "hubiera dormido", "hubiera salido", "hubiera vivido", "hubiera pedido", "hubiera mentido", "hubiera lucido", "hubiera distinguido", "hubiera destruido", "hubiera sentido", "hubiera descrito", "hubiera preferido", "hubiera escrito"];

        //array for nosotros conjugations
        nos = ["hubi\xE9ramos andado", "hubi\xE9ramos bailado", "hubi\xE9ramos cantado", "hubi\xE9ramos estado", "hubi\xE9ramos parado", "hubi\xE9ramos mandado", "hubi\xE9ramos llevado", "hubi\xE9ramos nadado", "hubi\xE9ramos cerrado", "hubi\xE9ramos enviado", "hubi\xE9ramos mostrado", "hubi\xE9ramos graduado", "hubi\xE9ramos dado", "hubi\xE9ramos almorzado", "hubi\xE9ramos comido", "hubi\xE9ramos cre\xEDdo", "hubi\xE9ramos bebido", "hubi\xE9ramos vendido", "hubi\xE9ramos conocido", "hubi\xE9ramos perdido", "hubi\xE9ramos podido", "hubi\xE9ramos tenido", "hubi\xE9ramos escogido", "hubi\xE9ramos hecho", "hubi\xE9ramos puesto", "hubi\xE9ramos visto", "hubi\xE9ramos cabido", "hubi\xE9ramos tra\xEDdo", "hubi\xE9ramos ido", "hubi\xE9ramos dicho", "hubi\xE9ramos dormido", "hubi\xE9ramos salido", "hubi\xE9ramos vivido", "hubi\xE9ramos pedido", "hubi\xE9ramos mentido", "hubi\xE9ramos lucido", "hubi\xE9ramos distinguido", "hubi\xE9ramos destruido", "hubi\xE9ramos sentido", "hubi\xE9ramos descrito", "hubi\xE9ramos preferido", "hubi\xE9ramos escrito"];

        //array for vosotros conjugations
        vos = ["hubierais andado", "hubierais bailado", "hubierais cantado", "hubierais estado", "hubierais parado", "hubierais mandado", "hubierais llevado", "hubierais nadado", "hubierais cerrado", "hubierais enviado", "hubierais mostrado", "hubierais graduado", "hubierais dado", "hubierais almorzado", "hubierais comido", "hubierais cre\xEDdo", "hubierais bebido", "hubierais vendido", "hubierais conocido", "hubierais perdido", "hubierais podido", "hubierais tenido", "hubierais escogido", "hubierais hecho", "hubierais puesto", "hubierais visto", "hubierais cabido", "hubierais tra\xEDdo", "hubierais ido", "hubierais dicho", "hubierais dormido", "hubierais salido", "hubierais vivido", "hubierais pedido", "hubierais mentido", "hubierais lucido", "hubierais distinguido", "hubierais destruido", "hubierais sentido", "hubierais descrito", "hubierais preferido", "hubierais escrito"];

        //array for ellos conjugations
        ellos = ["hubieran andado", "hubieran bailado", "hubieran cantado", "hubieran estado", "hubieran parado", "hubieran mandado", "hubieran llevado", "hubieran nadado", "hubieran cerrado", "hubieran enviado", "hubieran mostrado", "hubieran graduado", "hubieran dado", "hubieran almorzado", "hubieran comido", "hubieran cre\xEDdo", "hubieran bebido", "hubieran vendido", "hubieran conocido", "hubieran perdido", "hubieran podido", "hubieran tenido", "hubieran escogido", "hubieran hecho", "hubieran puesto", "hubieran visto", "hubieran cabido", "hubieran tra\xEDdo", "hubieran ido", "hubieran dicho", "hubieran dormido", "hubieran salido", "hubieran vivido", "hubieran pedido", "hubieran mentido", "hubieran lucido", "hubieran distinguido", "hubieran destruido", "hubieran sentido", "hubieran descrito", "hubieran preferido", "hubieran escrito"];
        
    } else if (numberPick == 15) {
    //IF THE NUMBER PICKED IS 15, THEN USE PAST PERFECT SUBJUNCTIVE (-SE) TENSE ARRAYS
        //array for yo conjugations
        yo = ["hubiese andado", "hubiese bailado", "hubiese cantado", "hubiese estado", "hubiese parado", "hubiese mandado", "hubiese llevado", "hubiese nadado", "hubiese cerrado", "hubiese enviado", "hubiese mostrado", "hubiese graduado", "hubiese dado", "hubiese almorzado", "hubiese comido", "hubiese cre\xEDdo", "hubiese bebido", "hubiese vendido", "hubiese conocido", "hubiese perdido", "hubiese podido", "hubiese tenido", "hubiese escogido", "hubiese hecho", "hubiese puesto", "hubiese visto", "hubiese cabido", "hubiese tra\xEDdo", "hubiese ido", "hubiese dicho", "hubiese dormido", "hubiese salido", "hubiese vivido", "hubiese pedido", "hubiese mentido", "hubiese lucido", "hubiese distinguido", "hubiese destruido", "hubiese sentido", "hubiese descrito", "hubiese preferido", "hubiese escrito"];

        //array for tu conjugations
        tu = ["hubieses andado", "hubieses bailado", "hubieses cantado", "hubieses estado", "hubieses parado", "hubieses mandado", "hubieses llevado", "hubieses nadado", "hubieses cerrado", "hubieses enviado", "hubieses mostrado", "hubieses graduado", "hubieses dado", "hubieses almorzado", "hubieses comido", "hubieses cre\xEDdo", "hubiese bebido", "hubieses vendido", "hubieses conocido", "hubieses perdido", "hubieses podido", "hubieses tenido", "hubieses escogido", "hubieses hecho", "hubieses puesto", "hubieses visto", "hubieses cabido", "hubieses tra\xEDdo", "hubieses ido", "hubieses dicho", "hubieses dormido", "hubieses salido", "hubieses vivido", "hubieses pedido", "hubieses mentido", "hubieses lucido", "hubieses distinguido", "hubieses destruido", "hubieses sentido", "hubieses descrito", "hubieses preferido", "hubieses escrito"];

        //array for el conjugations
        el = ["hubiese andado", "hubiese bailado", "hubiese cantado", "hubiese estado", "hubiese parado", "hubiese mandado", "hubiese llevado", "hubiese nadado", "hubiese cerrado", "hubiese enviado", "hubiese mostrado", "hubiese graduado", "hubiese dado", "hubiese almorzado", "hubiese comido", "hubiese cre\xEDdo", "hubiese bebido", "hubiese vendido", "hubiese conocido", "hubiese perdido", "hubiese podido", "hubiese tenido", "hubiese escogido", "hubiese hecho", "hubiese puesto", "hubiese visto", "hubiese cabido", "hubiese tra\xEDdo", "hubiese ido", "hubiese dicho", "hubiese dormido", "hubiese salido", "hubiese vivido", "hubiese pedido", "hubiese mentido", "hubiese lucido", "hubiese distinguido", "hubiese destruido", "hubiese sentido", "hubiese descrito", "hubiese preferido", "hubiese escrito"];

        //array for nosotros conjugations
        nos = ["hubi\xE9semos andado", "hubi\xE9semos bailado", "hubi\xE9semos cantado", "hubi\xE9semos estado", "hubi\xE9semos parado", "hubi\xE9semos mandado", "hubi\xE9semos llevado", "hubi\xE9semos nadado", "hubi\xE9semos cerrado", "hubi\xE9semos enviado", "hubi\xE9semos mostrado", "hubi\xE9semos graduado", "hubi\xE9semos dado", "hubi\xE9semos almorzado", "hubi\xE9semos comido", "hubi\xE9semos cre\xEDdo", "hubi\xE9semos bebido", "hubi\xE9semos vendido", "hubi\xE9semos conocido", "hubi\xE9semos perdido", "hubi\xE9semos podido", "hubi\xE9semos tenido", "hubi\xE9semos escogido", "hubi\xE9semos hecho", "hubi\xE9semos puesto", "hubi\xE9semos visto", "hubi\xE9semos cabido", "hubi\xE9semos tra\xEDdo", "hubi\xE9semos ido", "hubi\xE9semos dicho", "hubi\xE9semos dormido", "hubi\xE9semos salido", "hubi\xE9semos vivido", "hubi\xE9semos pedido", "hubi\xE9semos mentido", "hubi\xE9semos lucido", "hubi\xE9semos distinguido", "hubi\xE9semos destruido", "hubi\xE9semos sentido", "hubi\xE9semos descrito", "hubi\xE9semos preferido", "hubi\xE9semos escrito"];

        //array for vosotros conjugations
        vos = ["hubieseis andado", "hubieseis bailado", "hubieseis cantado", "hubieseis estado", "hubieseis parado", "hubieseis mandado", "hubieseis llevado", "hubieseis nadado", "hubieseis cerrado", "hubieseis enviado", "hubieseis mostrado", "hubieseis graduado", "hubieseis dado", "hubieseis almorzado", "hubieseis comido", "hubieseis cre\xEDdo", "hubieseis bebido", "hubieseis vendido", "hubieseis conocido", "hubieseis perdido", "hubieseis podido", "hubieseis tenido", "hubieseis escogido", "hubieseis hecho", "hubieseis puesto", "hubieseis visto", "hubieseis cabido", "hubieseis tra\xEDdo", "hubieseis ido", "hubieseis dicho", "hubieseis dormido", "hubieseis salido", "hubieseis vivido", "hubieseis pedido", "hubieseis mentido", "hubieseis lucido", "hubieseis distinguido", "hubieseis destruido", "hubieseis sentido", "hubieseis descrito", "hubieseis preferido", "hubieseis escrito"];

        //array for ellos conjugations
        ellos = ["hubiesen andado", "hubiesen bailado", "hubiesen cantado", "hubiesen estado", "hubiesen parado", "hubiesen mandado", "hubiesen llevado", "hubiesen nadado", "hubiesen cerrado", "hubiesen enviado", "hubiesen mostrado", "hubiesen graduado", "hubiesen dado", "hubiesen almorzado", "hubiesen comido", "hubiesen cre\xEDdo", "hubiesen bebido", "hubiesen vendido", "hubiesen conocido", "hubiesen perdido", "hubiesen podido", "hubiesen tenido", "hubiesen escogido", "hubiesen hecho", "hubiesen puesto", "hubiesen visto", "hubiesen cabido", "hubiesen tra\xEDdo", "hubiesen ido", "hubiesen dicho", "hubiesen dormido", "hubiesen salido", "hubiesen vivido", "hubiesen pedido", "hubiesen mentido", "hubiesen lucido", "hubiesen distinguido", "hubiesen destruido", "hubiesen sentido", "hubiesen descrito", "hubiesen preferido", "hubiesen escrito"];   
        
    }
}

//find answer
answerFind();
        
//display answer for teacher to grade
console.log(answer);

//display a random tense for user
tenseDisplay.innerHTML = tense[numberPick];

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
        
    //if the subject is t\xFA...    
    } else if (numPicker == 1){

    //...answer is t\xFA in  array    
        answer = tu[numPick];
    
    //return the answer out of function 
        return answer;    

    //if the subject is \xE9l...    
    } else if (numPicker == 2){

    //...answer is \xE9l in  array 
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
        document.querySelector("#input").value = "";

        //add to correct attempts and overall attempts
        correct += 1;
        rounds += 1;
        
        //update table of scores
        right.innerHTML = correct;
        round.innerHTML = rounds;
        
        //generate new infinitive and subject
        game();
        
        //find tense and corresponding arrays
        tensePick();
        
        //find answer
        answerFind();
        
        //display answer for teacher to grade
        console.log(answer);
        
        //display a random tense for user
        tenseDisplay.innerHTML = tense[numberPick];
        
        //display a random infinitive for user
        infDisplay.innerHTML = inf[numPick];

        //display a random subject for user
        subjDisplay.innerHTML = subj[numPicker];
    
    //if it doesn't match answer...    
    } else {
        
        //...let user know the correct answer
        output.innerHTML = "Incorrect. The answer was " +  answer + ".";
        
        //clear input for next conjugation
        document.querySelector("#input").value = "";

        //add to incorrect attempts and overall attempts
        incorrect += 1;
        rounds += 1;
        
        //update table of scores
        wrong.innerHTML = incorrect;
        round.innerHTML = rounds;
        
        //generate new infinitive and subject
        game();
        
        //find tense and corresponding arrays
        tensePick();
        
        //find answer
        answerFind();
        
        //display answer for teacher to grade
        console.log(answer);
        
        //display a random tense for user
        tenseDisplay.innerHTML = tense[numberPick];
        
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
