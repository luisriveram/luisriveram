//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=90; timeIni=90; timeBon=1;
var successes=0; successesMax=4; attempts=0; attemptsMax=2;
var score=0; scoreMax=8; scoreInc=2; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=4; messageOk="¡¡¡Felicidades!!!"; messageTime="¡¡Se terminó el tiempo!!"; messageError="Error...!!"; messageErrorG="Error...!!"; messageAttempts="Se agotaron tus oportunidades! :("; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="U2NyYXRjaA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["Q09OVFJPTA==","TU9WSU1JRU5UTw==","T1BFUkFET1JFUw==","U09OSURP","","","","","",""];imaW=["0_0_Captura_de_pantalla_2022-03-04_211515.png","0_0_descarga.png","0_WhatsApp_Image_2022-03-05_at_1.30.03_PM.jpeg","0_WhatsApp_Image_2022-03-05_at_1.35.51_PM.jpeg","","","","","",""];queW=["Los bloques de código a continuación son un ejemplo de qué tipo de acción:","Los bloques de código en color azul que aparecen en la siguiente imagen son de:","Los bloques de de código en color verde que aparecen en la siguiente imagen son de:","Los bloques de código a continuación son un ejemplo de qué tipo de acción:","","","","","",""];var wordsL=[7,10,10,6,"","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="Scratch_resources/media/"; textBNext="Siguiente.";
