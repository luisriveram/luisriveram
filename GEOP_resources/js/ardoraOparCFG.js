//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Good Job!!"; messageTime="Se ha acabado el tiempo."; messageError="Error!! "; messageErrorG="Error!! "; messageAttempts="Ya no tienes más intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="R0VPUA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="GEOP_resources/media/";
var indexG=0;
var words1G=["VGFqbyAoVmVydGllbnRlIEF0bGFudGljYSk=","RWJybyAoVmVydGllbnRlIE1lZGl0ZXJyw6FuZWEp","RHVlcm8gKFZlcnRpZW50ZSBBbHRsYW50aWNhKQ==","R3VhZGlhbmEgKFZlcnRpZW50ZSBBbHRhbGFudGljYSk=","R3VhZGFscXVpdmlyICggVmVydGllbnRlIEF0bGFudGljYSk=","SnVjYXIgKFZlcnRpZW50ZSBNZWRpdGVycsOhbmVhKQ=="];
var words2G=[];
var words3G=[];
var c1=[26,29,28,32,35,30];
var c2=[];
var c3=[];
