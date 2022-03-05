//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades, tú respuesta es correcta!"; messageTime="Se termino el tiempo.."; messageError="Error."; messageErrorG="Error."; messageAttempts="se han agotado tus oportunidades.."; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q1JJUFRPLg=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","","","","","","","","Qw==","","","",""],["","Qg==","TA==","Tw==","Qw==","Sw==","Qw==","SA==","QQ==","Tg==","Rw==","RQ==",""],["","SQ==","","","","","","","TA==","","","",""],["","VA==","","","","","","","Sw==","","","",""],["","Qw==","","","","","","","SQ==","","","",""],["","Tw==","","","","","","","Tg==","VA==","Rg==","",""],["","SQ==","","","","","","","","Ug==","","",""],["","Tg==","","","","","","","","QQ==","","",""],["","","","","","","","","","SQ==","","",""],["","","","","","","","","","Tg==","","",""],["","","","","","","","","","SQ==","","",""],["","","","","SA==","Tw==","TA==","RA==","SQ==","Tg==","Rw==","",""],["","","","","","","","","","Rw==","","",""]];
var x1=[2,9,5,9,10,2];
var y1=[2,6,12,1,6,2];
var x2=[12,11,11,9,10,2];
var y2=[2,6,12,6,13,8];
var imaCW=["","","","","",""];
var audioCW=["","","","","",""];
var defCW=["Es un video juego que incluye elementos que utilizan las tecnologías de cadenas de bloques basadas en criptomonedas.","Es un tipo especial de token criptografico que representa algo único.","Sociedad financiera posee la mayoria de acciones y lleva la administración de un conjunto de empresas que se dedican a diversas actividades economicas o industriales.","Es una proyección embotada en una herradura que es forjada a menudo, soldada o soldada fuertemente en el zapato.","Es un programa que ayuda a los empleados a adquirir habilidades especificas para mejorar el desempeño en sus funciones actuales.","Es una criptomoneda y un sistema de pago sin banco central o administrador único."];
var colNum=13;
var rowNum=13;
