//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#9FD7D6"; colorButton="#82398C"; colorText="#000000"; colorSele="#37F906";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Ahora sabes un poco más de electronica. Good job!!!"; messageTime="El tiempo se ha acabado, tu puedes!!"; messageError="Respuesta incorrecta"; messageErrorG="Respuesta incorrecta"; messageAttempts="Se han acabado tus intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q0VM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Ug==","RQ==","Uw==","SQ==","Uw==","VA==","RQ==","Tg==","Qw==","SQ==","QQ=="],["","","","","","Ug==","","","Tw==","",""],["","","","","","QQ==","","","Tg==","",""],["","","","","","Tg==","","","RA==","",""],["","","","","","Uw==","","TA==","RQ==","RA==",""],["","","","","","SQ==","","","Tg==","",""],["","","","","","VA==","","","Uw==","",""],["","","","","","Tw==","","","QQ==","",""],["","","","TA==","RA==","Ug==","","","RA==","",""],["","","","","","","","","Tw==","",""],["","","","","","","","","Ug==","",""]];
var x1=[1,8,4,6,9];
var y1=[1,5,9,1,1];
var x2=[11,10,6,6,9];
var y2=[1,5,9,9,11];
var imaCW=["CEL_resources/media/resistencia-electrica-2.jpg","CEL_resources/media/Led.jpg","CEL_resources/media/LDR.jpeg","CEL_resources/media/Transitor.jpg","CEL_resources/media/codensador.jpeg"];
var audioCW=["","","","",""];
var defCW=["Es una medida de la oposición al flujo de corriente en un circuito eléctrico.","“Diodo Emisor de Luz'' es un elemento capaz de recibir una corriente eléctrica moderada y emitir una radiación electromagnética transformada en luz","Es un componente electrónico pasivo, que disminuye su resistencia con el aumento de intensidad de luz incidente.","Es un dispositivo electrónico semiconductor utilizado para entregar una señal de salida en respuesta a una señal de entrada","Es un elemento utilizado en electricidad y electrónica, con dos terminales, capaz de almacenar energía eléctrica"];
var colNum=11;
var rowNum=11;
