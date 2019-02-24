//variable to set for picking array
var arrayPicker = 0;

//variable to set for picking within array
var verbPicker = 0;

//variable set up for correct answers
var correct = 0;

//variable set up for incorrect answers
var incorrect = 0;

//variable set up for rounds
var rounds = 0;

//set up verb 
numPicker();

//function to randomly generate which array to choose as well as a random number to choose within the arrays 
function numPicker() {

    //random number to choose array
    arrayPicker = Math.round(Math.random()*14);

    //random number to choose within array
    verbPicker =
    Math.round(Math.random()*89);
    
    //return values
    return arrayPicker, verbPicker;
}

//array for present indicative
var presentI = ["ando",	"como", "voy", "bailo", "creo", "digo", "canto", "bebo", "duermo", "estoy", "tengo", "salgo", "paro", "conozco", "vivo", "andas", "comes", "ves", "bailas", "crees", "dices", "cantas", "bebes", "duermes", "est&aacute;s", "tienes", "sales", "paras", "conoces", "vives", "anda",	"come", "va", "baila", "cree", "dice", "canta", "bebe", "duerme", "est&aacute;", "tiene", "sale", "para", "conoce", "vive", "andamos", "comemos", "vamos", "bailamos",	"creemos", "decimos", "cantamos", "bebemos", "dormimos", "estamos", "tenemos", "salimos", "paramos", "conocemos", "vivimos", "and&aacute;is", "com&eacute;is", "vais", "bail&aacute;is", "cre&eacute;is", "dec&iacute;s", "cant&aacute;is", "beb&eacute;is", "dorm&iacute;s", "est&aacute;is", "ten&eacute;is", "sal&iacute;s", "par&aacute;is", "conoc&eacute;is", "viv&iacute;s","andan", "comen", "van", "bailan", "creen", "dicen", "cantan", "beben", "duermen", "est&aacute;n", "tienen", "salen", "paran", "conocen", "viven"];

//array for preteritve indicative
var preteriteI = [ "anduve", "com&iacute;", "fui", "bail&eacute;", "cre&iacute;", "dije", "cant&eacute;", "beb&iacute;", "dorm&iacute;", "estuve", "tuve", "sal&iacute;", "par&eacute;", "conoc&iacute;", "viv&iacute;", "anduviste", "comiste", "fuiste", "bailaste", "creíste", "dijiste", "cantaste", "bebiste", "dormiste", "estuviste", "tuviste", "saliste", "paraste", "conociste", "viviste", "anduvo", "comi&oacute;", "fue", "bail&oacute;", "crey&oacute;", "dijo", "cant&oacute;", "bebi&oacute;", "durmi&oacute;", "estuvo", "tuvo", "sali&oacute;", "par&oacute;", "conoci&oacute;", "vivi&oacute;", "andamos", "comimos", "fuimos", "bailamos", "cre&iacute;mos", "dijimos", "cantamos", "bebimos", "dormimos", "estamos", "tuvimos", "salimos", "paramos", "conocimos", "vivimos", "anduvisteis", "comisteis", "fuisteis", "bailasteis", "creisteis", "dijisteis", "cantasteis", "bebisteis", "dormisteis", "estuvisteis", "tuvisteis", "salisteis", "parasteis", "conocisteis", "vivisteis", "anduvieron","comieron", "fueron", "bailaron", "creyeron", "dijeron", "cantaron", "bebieron", "durmieron", "estuvieron", "tuvieron", "salieron", "pararon", "conocieron", "vivieron"];

//array for imperfect indicative
var imperfectI = [
"andaba", "com&iacute;a", "iba", "bailaba", "cre&iacute;a",	"dec&iacute;a", "cantaba", "beb&iacute;a", "dorm&iacute;a", "estaba", "ten&iacute;a", "sal&iacute;a", "paraba", "conoc&iacute;a", "viv&iacute;a", "andabas", "com&iacute;as", "ibas", "bailabas", "cre&iacute;as", "dec&iacute;as", "cantabas", "beb&iacute;as", "dorm&iacute;as", "estabas", "ten&iacute;as", "sal&iacute;as", "parabas", "andaba", "com&iacute;a", "iba", "bailaba", "cre&iacute;a",	"dec&iacute;a", "cantaba", "beb&iacute;a", "dorm&iacute;a", "estaba", "ten&iacute;a", "sal&iacute;a", "paraba", "conoc&iacute;a", "viv&iacute;a", "conoc&iacute;as", "viv&iacute;as", "and&aacute;bamos", "com&iacute;amos", "&iacute;bamos", "bail&aacute;bamos", "cre&iacute;amos", "dec&iacute;amos", "cant&aacute;bamos", "beb&iacute;amos", "dorm&iacute;amos", "est&aacute;bamos", "ten&iacute;amos", "sal&iacute;amos", "par&aacute;bamos", "conoc&iacute;amos", "viv&iacute;amos", "andabais", "com&iacute;ais", "ibais", "bailabais", "cre&iacute;ais", "dec&iacute;ais", "cantabais", "beb&iacute;ais", "dorm&iacute;ais", "estabais", "ten&iacute;ais", "sal&iacute;ais", "parabais", "conoc&iacute;ais", "viv&iacute;ais", "andaban", "com&iacute;an", "iban", "bailaban", "cre&iacute;an", "dec&iacute;an", "cantaban", "beb&iacute;an", "dorm&iacute;an", "estaban", "ten&iacute;an", "sal&iacute;an", "paraban", "conoc&iacute;an", "viv&iacute;an"]; 

//array for future indicative
var futureI = [ "andar&eacute;", "comer&eacute;", "ir&eacute;", "bailar&eacute;", "creer&eacute;", "dir&eacute;", "cantar&eacute;",	"beber&eacute;", "dormir&eacute;", "estar&eacute;", "tendr&eacute;", "saldr&eacute;", "parar&eacute;", "conocer&eacute;", "vivir&eacute;", "andar&aacute;s", "comer&aacute;s", "ir&aacute;s", "bailar&aacute;s", "creer&aacute;s", "dir&aacute;s", "cantar&aacute;s", "beber&aacute;s", "dormir&aacute;s", "estar&aacute;s", "tendr&aacute;s", "saldr&aacute;s", "parar&aacute;s", "conocer&aacute;s", "vivir&aacute;s", "andar&aacute;", "comer&aacute;", "ir&aacute;", "bailar&aacute;", "creer&aacute;", "dir&aacute;", "cantar&aacute;", "beber&aacute;", "dormir&aacute;", "estar&aacute;", "tendr&aacute;", "saldr&aacute;", "parar&aacute;", "conocer&aacute;", "vivir&aacute;", "andaremos", "comeremos", "iremos", "bailaremos", "creeremos", "diremos", "cantaremos", "beberemos", "dormiremos", "estaremos", "tendremos", "saldremos", "pararemos", "conoceremos", "viviremos", "andar&eacute;is", "comer&eacute;is", "ir&eacute;is", "bailar&eacute;is", "creer&eacute;is", "dir&eacute;is", "cantar&eacute;is", "beber&eacute;is",	"dormir&eacute;is", "estar&eacute;is", "tendr&eacute;is", "saldr&eacute;is", "parar&eacute;is",	"conocer&eacute;is", "vivir&eacute;is", "andar&aacute;n", "comer&aacute;n",	"ir&aacute;n", "bailar&aacute;n", "creer&aacute;n",	"dir&aacute;n", "cantar&aacute;n", "beber&aacute;n", "dormir&aacute;n", "estar&aacute;n", "tendr&aacute;n", "saldr&aacute;n", "parar&aacute;n",	"conocer&aacute;n", "vivir&aacute;n"];

//array for conditional indicative
var conditionalI = ["andar&iacute;a", "comer&iacute;a",	"ir&iacute;a", "bailar&iacute;a", "creer&iacute;a",	"dir&iacute;a", "cantar&iacute;a", "beber&iacute;a", "dormir&iacute;a", "estar&iacute;a", "tendr&iacute;a",	"saldr&iacute;a", "parar&iacute;a",	"conocer&iacute;a", "vivir&iacute;a", "andar&iacute;as", "comer&iacute;as",	"ir&iacute;as", "bailar&iacute;as", "creer&iacute;as", "dir&iacute;as", "cantar&iacute;as",	"beber&iacute;as", "dormir&iacute;as",
"estar&iacute;as", "tendr&iacute;as", "saldr&iacute;as", "parar&iacute;as",	"conocer&iacute;as", "vivir&iacute;as", "andar&iacute;a", "comer&iacute;a",	"ir&iacute;a", "bailar&iacute;a", "creer&iacute;a",	"dir&iacute;a", "cantar&iacute;a", "beber&iacute;a", "dormir&iacute;a", "estar&iacute;a", "tendr&iacute;a",	"saldr&iacute;a", "parar&iacute;a",	"conocer&iacute;a", "vivir&iacute;a", "andar&iacute;amos", "comer&iacute;amos", "ir&iacute;amos", "bailar&iacute;amos", "creer&iacute;amos", "dir&iacute;amos", "cantar&iacute;amos",	"beber&iacute;amos", "dormir&iacute;amos", "estar&iacute;amos",	"tendr&iacute;amos", "saldr&iacute;amos", "parar&iacute;amos", "conocer&iacute;amos", "vivir&iacute;amos", "andar&iacute;ais", "comer&iacute;ais", "ir&iacute;ais", "bailar&iacute;ais", "creer&iacute;ais", "dir&iacute;ais", "cantar&iacute;ais", "beber&iacute;ais",	"dormir&iacute;ais", "estar&iacute;ais", "tendr&iacute;ais", "saldr&iacute;ais", "parar&iacute;ais", "conocer&iacute;ais", "vivir&iacute;ais", "andar&iacute;an", "comer&iacute;an", "ir&iacute;an", "bailar&iacute;an", "creer&iacute;an", "dir&iacute;an", "cantar&iacute;an", "beber&iacute;an", "dormir&iacute;an", "estar&iacute;an", "tendr&iacute;an", "saldr&iacute;an", "parar&iacute;an", "conocer&iacute;an", "vivir&iacute;an"];

//array for present perfect indicative
var presentPI = ["he andado", "he comido", "he ido", "he bailado", "he cre&iacute;do", "he dicho", "he cantado", "he bebido", "he dormido", "he estado", "he vendido", "he salido", "he parado", "he conocido", "he vivido", "has andado", "has comido", "has ido", "has bailado", "has cre&iacute;do", "has dicho", "has cantado", "has bebido", "has dormido", "has estado", "has vendido", "has salido", "has parado", "has conocido", "has vivido", "ha andado", "ha comido", "ha ido", "ha bailado", "ha cre&iacute;do", "ha dicho", "ha cantado",	"ha bebido", "ha dormido", "ha estado", "ha vendido", "ha salido", "ha parado", "ha conocido", "ha vivido", "hemos andado", "hemos comido", "hemos ido", "hemos bailado", "hemos cre&iacute;do", "hemos dicho", "hemos cantado", "hemos bebido", "hemos dormido", "hemos estado", "hemos vendido", "hemos salido", "hemos parado", "hemos conocido", "hemos vivido", "hab&eacute;is andado", "hab&eacute;is comido", "hab&eacute;is ido", "hab&eacute;is bailado", "hab&eacute;is cre&iacute;do", "hab&eacute;is dicho", "hab&eacute;is cantado", "hab&eacute;is bebido", "hab&eacute;is dormido", "hab&eacute;is estado", "hab&eacute;is vendido", "hab&eacute;is salido", "hab&eacute;is parado", "hab&eacute;is conocido", "hab&eacute;is vivido", "han andado", "han comido", "han ido", "han bailado", "han cre&iacute;do", "han dicho", "han cantado", "han bebido", "han dormido", "han estado", "han vendido", "han salido", "han parado", "han conocido", "han vivido"];

//array for preteritve perfect indicative
var preteriteA = ["hube andado", "hube comido",	"hube ido", "hube bailado",	"hube cre&iacute;do", "hube dicho", "hube cantado", "hube bebido", "hube dormido", "hube estado", "hube vendido", "hube salido", "hube parado", "hube conocido", "hube vivido", "hubiste andado", "hubiste comido", "hubiste ido", "hubiste bailado", "hubiste cre&iacute;do", "hubiste dicho", "hubiste cantado", "hubiste bebido", "hubiste dormido", "hubiste estado", "hubiste vendido", "hubiste salido", "hubiste parado", "hubiste conocido", "hubiste vivido", "hubo andado", "hubo comido", "hubo ido", "hubo bailado", "hubo cre&iacute;do", "hubo dicho", "hubo cantado", "hubo bebido", "hubo dormido", "hubo estado", "hubo vendido", "hubo salido", "hubo parado", "hubo conocido", "hubo vivido", "hubimos andado", "hubimos comido", "hubimos ido", "hubimos bailado", "hubimos cre&iacute;do", "hubimos dicho", "hubimos cantado", "hubimos bebido", "hubimos dormido", "hubimos estado", "hubimos vendido", "hubimos salido", "hubimos parado", "hubimos conocido", "hubimos vivido", "hubisteis andado", "hubisteis comido", "hubisteis ido", "hubisteis bailado", "hubisteis cre&iacute;do", "hubisteis dicho", "hubisteis cantado", "hubisteis bebido", "hubisteis dormido", "hubisteis estado", "hubisteis vendido", "hubisteis salido", "hubisteis parado", "hubisteis conocido", "hubisteis vivido", "hubieron andado", "hubieron comido", "hubieron ido", "hubieron bailado", "hubieron cre&iacute;do", "hubieron dicho", "hubieron cantado", "hubieron bebido", "hubieron dormido", "hubieron estado", "hubieron vendido", "hubieron salido", "hubieron parado", "hubieron conocido", "hubieron vivido" ];

//array for imperfect perfect indicative
var pastperfectI = ["hab&iacute;a andado", "hab&iacute;a comido", "hab&iacute;a ido", "hab&iacute;a bailado", "hab&iacute;a cre&iacute;do", "hab&iacute;a dicho", "hab&iacute;a cantado",	"hab&iacute;a bebido",	"hab&iacute;a dormido", "hab&iacute;a estado",	"hab&iacute;a vendido",	"hab&iacute;a salido", "hab&iacute;a parado", "hab&iacute;a conocido", "hab&iacute;a vivido", "hab&iacute;as andado", "hab&iacute;as comido", "hab&iacute;as ido", "hab&iacute;as bailado",	"hab&iacute;as cre&iacute;do", "hab&iacute;as dicho", "hab&iacute;as cantado", "hab&iacute;as bebido", "hab&iacute;as dormido", "hab&iacute;as estado",	"hab&iacute;as vendido", "hab&iacute;as salido", "hab&iacute;a andado", "hab&iacute;a comido", "hab&iacute;a ido", "hab&iacute;a bailado", "hab&iacute;a cre&iacute;do", "hab&iacute;a dicho", "hab&iacute;a cantado",	"hab&iacute;a bebido",	"hab&iacute;a dormido", "hab&iacute;a estado",	"hab&iacute;a vendido",	"hab&iacute;a salido", "hab&iacute;a parado", "hab&iacute;a conocido", "hab&iacute;a vivido", "hab&iacute;amos andado", "hab&iacute;amos comido", "hab&iacute;amos ido", "hab&iacute;amos bailado", "hab&iacute;amos cre&iacute;do",	"hab&iacute;amos dicho", "hab&iacute;amos cantado", "hab&iacute;amos bebido",	"hab&iacute;amos dormido", "hab&iacute;amos estado", "hab&iacute;amos vendido",	"hab&iacute;amos salido", "hab&iacute;amos parado",	"hab&iacute;amos conocido",	"hab&iacute;amos vivido", "hab&iacute;ais andado", "hab&iacute;ais comido", "hab&iacute;ais ido", "hab&iacute;ais bailado",	"hab&iacute;ais cre&iacute;do",	"hab&iacute;ais dicho", "hab&iacute;ais cantado", "hab&iacute;ais bebido",	"hab&iacute;ais dormido", "hab&iacute;ais estado", "hab&iacute;ais vendido", "hab&iacute;ais salido", "hab&iacute;ais parado", "hab&iacute;ais conocido", "hab&iacute;ais vivido", "hab&iacute;an andado",	"hab&iacute;an comido",	"hab&iacute;an ido", "hab&iacute;an bailado", "hab&iacute;an cre&iacute;do", "hab&iacute;an dicho", "hab&iacute;an cantado", "hab&iacute;an bebido", "hab&iacute;an dormido", "hab&iacute;an estado", "hab&iacute;an vendido", "hab&iacute;an salido", "hab&iacute;an parado", "hab&iacute;an conocido", "hab&iacute;an vivido", "hab&iacute;an parado", "hab&iacute;an conocido", "hab&iacute;an vivido"];

//array for future perfect indicative
var futurePI = ["habr&eacute; andado", "habr&eacute; comido", "habr&eacute; ido", "habr&eacute; bailado", "habr&eacute; cre&iacute;do",	"habr&eacute; dicho", "habr&eacute; cantado	habr&eacute;", "bebido	habr&eacute; dormido", "habr&eacute; estado", "habr&eacute; vendido", "habr&eacute; salido", "habr&eacute; parado", "habr&eacute; conocido", "habr&eacute; vivido", "habr&aacute;s andado", "habr&aacute;s comido", "habr&aacute;s ido", "habr&aacute;s bailado", "habr&aacute;s cre&iacute;do", "habr&aacute;s dicho", "habr&aacute;s cantado", "habr&aacute;s bebido", "habr&aacute;s dormido", "habr&aacute;s estado", "habr&aacute;s vendido", "habr&aacute;s salido", "habr&aacute;s parado", "habr&aacute;s conocido", "habr&aacute;s vivido", "habr&aacute; andado", "habr&aacute; comido", "habr&aacute; ido", "habr&aacute; bailado", "habr&aacute; cre&iacute;do", "habr&aacute; dicho", "habr&aacute; cantado", "habr&aacute; bebido", "habr&aacute; dormido", "habr&aacute; estado", "habr&aacute; vendido", "habr&aacute; salido", "habr&aacute; parado", "habr&aacute; conocido", "habr&aacute; vivido", "habremos andado", "habremos comido", "habremos ido", "habremos bailado", "habremos cre&iacute;do", "habremos dicho", "habremos cantado", "habremos bebido", "habremos dormido", "habremos estado", "habremos vendido", "habremos salido", "habremos parado", "habremos conocido", "habremos vivido", "habr&eacute;is andado", "habr&eacute;is comido", "habr&eacute;is ido", "habr&eacute;is bailado", "habr&eacute;is cre&iacute;do", "habr&eacute;is dicho", "habr&eacute;is cantado", "habr&eacute;is bebido", "habr&eacute;is dormido", "habr&eacute;is estado", "habr&eacute;is vendido", "habr&eacute;is salido", "habr&eacute;is parado", "habr&eacute;is conocido", "habr&eacute;is vivido", "habr&aacute;n andado", "habr&aacute;n comido", "habr&aacute;n ido", "habr&aacute;n bailado", "habr&aacute;n cre&iacute;do", "habr&aacute;n dicho", "habr&aacute;n cantado", "habr&aacute;n bebido", "habr&aacute;n dormido", "habr&aacute;n estado", "habr&aacute;n vendido", "habr&aacute;n salido", "habr&aacute;n parado", "habr&aacute;n conocido", "habr&aacute;n cantado", "habr&aacute;n vivido"];

//array for conditional perfect indicative
var conditionalPI = ["habr&iacute;a andado", "habr&iacute;a comido", "habr&iacute;a ido", "habr&iacute;a bailado", "habr&iacute;a cre&iacute;do", "habr&iacute;a dicho", "habr&iacute;a cantado", "habr&iacute;a bebido", "habr&iacute;a dormido", "habr&iacute;a estado", "habr&iacute;a vendido", "habr&iacute;a salido", "habr&iacute;a parado", "habr&iacute;a conocido", "habr&iacute;a vivido", "habr&iacute;as andado", "habr&iacute;as comido", "habr&iacute;as ido", "habr&iacute;as bailado", "habr&iacute;as cre&iacute;do", "habr&iacute;as dicho", "habr&iacute;as cantado", "habr&iacute;as bebido", "habr&iacute;as dormido", "habr&iacute;as estado", "habr&iacute;as vendido", "habr&iacute;as salido", "habr&iacute;as parado", "habr&iacute;as conocido", "habr&iacute;as vivido", "habr&iacute;a andado", "habr&iacute;a comido", "habr&iacute;a ido", "habr&iacute;a bailado", "habr&iacute;a cre&iacute;do", "habr&iacute;a dicho", "habr&iacute;a cantado", "habr&iacute;a bebido", "habr&iacute;a dormido", "habr&iacute;a estado", "habr&iacute;a vendido", "habr&iacute;a salido", "habr&iacute;a parado", "habr&iacute;a conocido", "habr&iacute;a vivido", "habr&iacute;amos andado", "habr&iacute;amos comido", "habr&iacute;amos ido", "habr&iacute;amos bailado", "habr&iacute;amos cre&iacute;do", "habr&iacute;amos dicho", "habr&iacute;amos cantado", "habr&iacute;amos bebido", "habr&iacute;amos dormido", "habr&iacute;amos estado", "habr&iacute;amos vendido", "habr&iacute;amos salido", "habr&iacute;amos parado", "habr&iacute;amos conocido", "habr&iacute;amos vivido", "habr&iacute;ais andado", "habr&iacute;ais comido", "habr&iacute;ais ido", "habr&iacute;ais bailado", "habr&iacute;ais cre&iacute;do", "habr&iacute;ais dicho", "habr&iacute;ais cantado", "habr&iacute;ais bebido", "habr&iacute;ais dormido", "habr&iacute;ais estado", "habr&iacute;ais vendido", "habr&iacute;ais salido", "habr&iacute;ais parado", "habr&iacute;ais conocido", "habr&iacute;ais vivido", "habr&iacute;an andado", "habr&iacute;an comido", "habr&iacute;an ido", "habr&iacute;an bailado", "habr&iacute;an cre&iacute;do", "habr&iacute;an dicho", "habr&iacute;an cantado", "habr&iacute;an bebido", "habr&iacute;an dormido", "habr&iacute;an estado", "habr&iacute;an vendido", "habr&iacute;an salido", "habr&iacute;an parado", "habr&iacute;an conocido", "habr&iacute;an vivido"];


//array for present subjunctive
var presentS = ["ande", "coma", "vaya", "baile", "crea", "diga", "cante", "beba", "duerma",
"est&eacute;",	"tenga", "salga", "pare", "conozca", "viva", "andes", "comas", "vayas", "bailes", "creas", "digas", "cantes", "bebas", "duermas", "est&eacute;s", "tengas", "salgas", "pares", "conozcas", "vivas", "ande", "coma", "vaya", "baile", "crea", "diga", "cante", "beba", "duerma", "est&eacute;",	"tenga", "salga", "pare", "conozca", "viva", "andemos", "comamos", "vayamos", "bailemos", "creamos", "digamos", "cantemos", "bebamos", "durmamos", "estemos", "tengamos", "salgamos", "paremos", "conozcamos", "vivamos", "and&eacute;is", "com&aacute;is", "vay&aacute;is", "bail&eacute;is", "cre&aacute;is", "dig&aacute;is", "cant&eacute;is", "beb&aacute;is", "durm&aacute;is", "est&eacute;is", "teng&aacute;is", "salg&aacute;is", "par&eacute;is", "conozc&aacute;is", "viv&aacute;is", "anden", "coman", "vayan", "bailen", "crean", "digan", "canten", "beban", "duerman", "est&eacute;n", "tengan", "salgan", "paren", "conozcan", "vivan"];

//array for present perfect subjunctive
var presentPS = ["haya andado", "haya comido", "haya ido", "haya bailado", "haya cre&iacute;do", "haya dicho", "haya cantado", "haya bebido", "haya dormido", "haya estado", "haya vendido", "haya salido", "haya parado", "haya conocido", "haya vivido", "hayas andado", "hayas comido", "hayas ido", "hayas bailado", "hayas cre&iacute;do", "hayas dicho", "hayas cantado", "hayas bebido", "hayas dormido", "hayas estado", "hayas vendido", "hayas salido", "hayas parado", "hayas conocido", "hayas vivido", "haya andado", "haya comido", "haya ido", "haya bailado", "haya cre&iacute;do", "haya dicho", "haya cantado", "haya bebido", "haya dormido", "haya estado",	"haya vendido", "haya salido", "haya parado", "haya conocido", "haya vivido", "hayamos andado", "hayamos comido", "hayamos ido", "hayamos bailado", "hayamos cre&iacute;do", "hayamos dicho", "hayamos cantado", "hayamos bebido", "hayamos dormido", "hayamos estado", "hayamos vendido", "hayamos salido", "hayamos parado", "hayamos conocido", "hayamos vivido", "hay&aacute;is andado", "hay&aacute;is comido", "hay&aacute;is ido", "hay&aacute;is bailado", "hay&aacute;is cre&iacute;do", "hay&aacute;is dicho", "hay&aacute;is cantado", "hay&aacute;is bebido", "hay&aacute;is dormido", "hab&eacute;is estado", "hab&eacute;is vendido", "hab&eacute;is salido", "hab&eacute;is parado", "hay&aacute;is conocido", "hay&aacute;is vivido", "hayan andado", "hayan comido", "hayan ido", "hayan bailado", "hayan cre&iacute;do", "hayan dicho", "hayan cantado", "hayan bebido", "hayan dormido", "hayan estado", "hayan vendido", "hayan salido", "hayan parado", "hayan conocido", "hayan vivido"]; 

//array for past subjunctive
var pastS= [ "anduviera", "comiera", "viera", "bailara", "creyera", "dijera", "cantara", "bebiera", "durmiera", "estuviera", "tuviera", "saliera", "parara", "conociera", "viviera", "anduvieras", "comieras", "vieras", "bailaras", "creyeras", "dijeras", "cantaras", "bebieras", "durmieras", "estuvieses", "tuvieses", "salieses", "parases", "conocieses", "vivieses", "anduviese", "comiese", "viese", "bailase", "creyese", "dijese", "cantase", "bebiese", "durmiese", "estuviese", "tuviese", "saliese", "parase", "conociese", "viviese", "anduvi&eacute;semos", "comi&eacute;semos", "vi&eacute;semos", "bail&aacute;semos",	"crey&eacute;semos", "dij&eacute;semos", "cant&aacute;semos", "bebi&eacute;semos", "durmi&eacute;semos", "estuvi&eacute;ramos",	"tuvi&eacute;ramos", "sali&eacute;ramos", "par&aacute;ramos", "conoci&eacute;ramos", "vivi&eacute;ramos", "anduvierais", "comierais", "vierais", "bailarais", "creyerais", "dijerais", "cantarais",	"bebierais", "durmierais", "estuvieseis", "tuvieseis", "salieseis", "paraseis", "conocieseis", "vivieseis", "anduviesen", "comiesen", "viesen", "bailasen", "creyesen", "dijesen", "cantasen", "bebiesen", "durmiesen", "estuvieran", "tuvieran", "salieran", "pararan", "conocieran", "vivieran"]; 

//array for past perfect subjunctive
var pastPS = [ "hubiera andado", "hubiera comido", "hubiera ido", "hubiera bailado", "hubiera cre&iacute;do", "hubiera dicho", "hubiera cantado", "hubiera bebido", "hubiera dormido", "hubiera estado", "hubiera vendido", "hubiera salido", "hubiera parado",	"hubiera conocido",	"hubiera vivido", "hubieras andado", "hubieras comido",	"hubieras ido", "hubieras bailado",	"hubieras cre&iacute;do", "hubieras dicho", "hubieras cantado",	"hubieras bebido", "hubieras dormido", "hubieses estado", "hubieses vendido", "hubieses salido", "hubieses parado",	"hubieses conocido", "hubieses vivido", "hubiese andado", "hubiese comido", "hubiese ido", "hubiese bailado", "hubiese cre&iacute;do", "hubiese dicho", "hubiese cantado", "hubiese bebido", "hubiese dormido", "hubiese estado", "hubiese vendido", "hubiese salido", "hubiese parado", "hubiese conocido", "hubiese vivido", "hubi&eacute;ramos andado", "hubi&eacute;ramos comido", "hubi&eacute;ramos ido", "hubi&eacute;ramos bailado", "hubi&eacute;ramos cre&iacute;do", "hubi&eacute;ramos dicho", "hubi&eacute;ramos cantado",	"hubi&eacute;ramos bebido",	"hubi&eacute;ramos dormido", "hubi&eacute;semos estado", "hubi&eacute;semos vendido", "hubi&eacute;semos salido", "hubi&eacute;semos parado", "hubi&eacute;semos conocido",	"hubi&eacute;semos vivido", "hubieseis andado", "hubieseis comido",	"hubieseis ido", "hubieseis bailado", "hubieseis cre&iacute;do", "hubieseis dicho", "hubieseis cantado", "hubieseis bebido", "hubieseis dormido", "hubierais estado", "hubierais vendido", "hubierais salido", "hubierais parado",	"hubierais conocido", "hubierais vivido", "hubieran andado", "hubieran comido",	"hubieran ido", "hubieran bailado",	"hubieran cre&iacute;do", "hubieran dicho", "hubieran cantado",	"hubieran bebido", "hubieran dormido", "hubiesen estado", "hubiesen vendido", "hubiesen salido", "hubiesen parado",	"hubiesen conocido", "hubiesen vivido"]; 

//array for imperatives
var imperative = [ "&iexcl;anda!", "&iexcl;come!", "&iexcl;va!", "&iexcl;baila!", "&iexcl;cree!",	"&iexcl;diga!", "&iexcl;canta!", "&iexcl;bebe!", "&iexcl;duerme!", "&iexcl;est&aacute;!", "&iexcl;ten!", "&iexcl;salga!", "&iexcl;para!", "&iexcl;conoce!", "&iexcl;vive!", "&iexcl;no andes!", "&iexcl;no comas!", "&iexcl;no veas!", "&iexcl;no bailes!", "&iexcl;no creas!", "&iexcl;no digas!", "&iexcl;no cantes!", "&iexcl;no bebas!", "&iexcl;no duermas!", "&iexcl;no est&eacute;s!", "&iexcl;no tengas!", "&iexcl;no salgas!", "&iexcl;no pares!", "&iexcl;no conozcas!", "&iexcl;no vivas!", "&iexcl;ande!", "&iexcl;no coma!", "&iexcl;vaya!", "&iexcl;no baile!", "&iexcl;crea!", "&iexcl;no diga!", "&iexcl;cante!", "&iexcl;no beba!", "&iexcl;no duerma!", "&iexcl;no est&eacute;!", "&iexcl;tenga!", "&iexcl;salga!", "&iexcl;pare!", "&iexcl;no conozca!", "&iexcl;no viva!", "&iexcl;no anden!", "&iexcl;coman!", "&iexcl;vayan!", "&iexcl;bailen!", "&iexcl;no crean!",	"&iexcl;no digan!", "&iexcl;no canten!", "&iexcl;beban!",	"&iexcl;duerman!", "&iexcl;est&eacute;n!", "&iexcl;no tengan!", "&iexcl;no salgan!", "&iexcl;no pen!", "&iexcl;conozcan!", "&iexcl;vivan!", "&iexcl;andad!", "&iexcl;no com&aacute;is!", "&iexcl;no veis!", "&iexcl;no bail&eacute;is!", "&iexcl;creed!", "&iexcl;decid!", "&iexcl;cantad!", "&iexcl;no beb&aacute;s!", "&iexcl;no durm&aacute;is!", "&iexcl;no est&eacute;is!", "&iexcl;tened!", "&iexcl;salid!", "&iexcl;parad!", "&iexcl;no conoc&aacute;is!", "&iexcl;no viv&aacute;is!", "&iexcl;no andemos!", "&iexcl;comamos!", "&iexcl;vamos!", "&iexcl;bailemos!",	"&iexcl;no creamos!", "&iexcl;no digamos!", "&iexcl;no cantemos!", "&iexcl;bebamos!", "&iexcl;durmamos!", "&iexcl;estemos!", "&iexcl;no tengamos!",	"&iexcl;no salgamos!", "&iexcl;no paremos!", "&iexcl;conozcamos!", "&iexcl;viven!"];  

//array for arrays
var arrays = [presentI, preteriteI, imperfectI, futureI, conditionalI, presentPI, preteriteA, pastperfectI, futurePI, conditionalPI, presentS, presentPS, pastS, pastPS, imperative]; 

//array for array names
var arrayName = ["Present Indicative", "Preterite Indicative", "Imperfect Indicative","Future Indicative", "Conditional Indicative", "Present Perfect Indicative", "Preterite Anterior Indicative", "Past Perfect Indicative", "Future Perfect Indicative", "Conditional Perfect Indicative", "Present Subjunctive", "Present Perfect Subjunctive", "Past Subjunctive", "Past Perfect Subjunctive", "Imperative (Commands)"]; 

//locate div to output verb
var verbOut = document.querySelector("#verb");

//locate div to output restults
var results = document.querySelector("#results");

//locate table for outputting scores
var right = document.querySelector("#right");
var wrong = document.querySelector("#wrong");
var round = document.querySelector("#round");

//declare array picked
var arrayPicked = arrays[arrayPicker];

//output the verb to user
verbOut.innerHTML = arrayPicked[verbPicker];

//show answer to grader in console log
grader();

//display answer to grader in console log
function grader() {
console.log(arrayName[arrayPicker]);
}

//when user makes a selection and submits
function check() {

    //get user input depending on which option was chosen
    if (document.querySelector("#presentI").checked) {
        
        var answer = document.querySelector("#presentI").value;
        
    } else if (document.querySelector("#preteriteI").checked) {
        
        var answer = document.querySelector("#preteriteI").value;
        
    } else if (document.querySelector("#imperfectI").checked) {
        
        var answer = document.querySelector("#imperfectI").value;
        
    } else if (document.querySelector("#futureI").checked) {
        
        var answer = document.querySelector("#futureI").value;
        
    } else if (document.querySelector("#conditionalI").checked) {
        
        var answer = document.querySelector("#conditionalI").value;
        
    } else if (document.querySelector("#presentPI").checked) {
        
        var answer = document.querySelector("#presentPI").value;
        
    } else if (document.querySelector("#preteriteA").checked) {
        
        var answer = document.querySelector("#preteriteA").value;
        
    } else if (document.querySelector("#pastperfectI").checked) {
        
        var answer = document.querySelector("#pastperfectI").value;
        
    } else if (document.querySelector("#futurePI").checked) {
        
        var answer = document.querySelector("#futurePI").value;
        
    } else if (document.querySelector("#conditionalPI").checked) {
        
        var answer = document.querySelector("#conditionalPI").value;
        
    } else if (document.querySelector("#presentS").checked) {
        
        var answer = document.querySelector("#presentS").value;
        
    } else if (document.querySelector("#presentPS").checked) {
        
        var answer = document.querySelector("#presentPS").value;
        
    } else if (document.querySelector("#pastS").checked) {
        
        var answer = document.querySelector("#pastS").value;
        
    } else if (document.querySelector("#pastPS").checked) {
        
        var answer = document.querySelector("#pastPS").value;
        
    } else if (document.querySelector("#imperative").checked) {
        
        var answer = document.querySelector("#imperative").value;
        
    }   

    //if the value of user input matches the array value
    if (answer == arrayPicker) {
        
        //the user is correct
        results.innerHTML = "Correct!";
        
        //add to correct attempts and overall attempts
        correct += 1;
        rounds += 1;
        
        //update table of scores
        right.innerHTML = correct;
        round.innerHTML = rounds;
        
        //reset game
        numPicker();
        arrayPicked = arrays[arrayPicker];
        
        //show answer to grader in console log
        grader();
        
        //output the new verb to user
        verbOut.innerHTML = arrayPicked[verbPicker];

    } else {
        
        //if not the user is wrong, show answer
        results.innerHTML = "Incorrect. The answer was " + arrayName[arrayPicker];
        
        //add to incorrect attempts and overall attempts
        incorrect += 1;
        rounds += 1;
        
        //update table of scores
        wrong.innerHTML = incorrect;
        round.innerHTML = rounds;
        
        //reset game
        numPicker();
        arrayPicked = arrays[arrayPicker];
        
        //show answer to grader in console log
        grader();
        
        //output the new verb to user
        verbOut.innerHTML = arrayPicked[verbPicker];

    }
    
}