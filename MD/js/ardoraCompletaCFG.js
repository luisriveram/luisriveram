//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=40; timeIni=40; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=1;
var score=0; scoreMax=7; scoreInc=1; scoreDec=1
var typeGame=1;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Empezar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#72B06A";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=1; scoOkDo=1; scoWrongDo=0; scoMessage="Hasta aqui tus intentos :("; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades, lo lograste <3!"; messageTime="Lo siento se acabo tu tiempo =/"; messageError="sorry no se puede :("; messageAttempts="uy se te acabaron "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>El marketing digital es la <select name="item1" id="item1" class="ardoraCombo"></select> de las <select name="item2" id="item2" class="ardoraCombo"></select> de <select name="item3" id="item3" class="ardoraCombo"></select> llevadas a cabo en los medios <select name="item4" id="item4" class="ardoraCombo"></select>. Todas las <select name="item5" id="item5" class="ardoraCombo"></select> del mundo <select name="item6" id="item6" class="ardoraCombo"></select> son imitadas y traducidas a un nuevo mundo, el mundo <select name="item7" id="item7" class="ardoraCombo"></select>. </p><p> </p>'];
var b=["Mw==","Mg==","MTU=","Nw==","Ng==","MTg=","MTA=","Ng==","NA==","MjY=","MTE=","MTQ=","NQ==","MTk=","Mw==","Nw==","Mg==","MjI=","MjM=","Mjc=","MQ=="];
var c=[16,11,9,8,9,6,10,8,9,8,11,16,8,8,16,6,11,6,9,10,10];
var answers=["comercialización","estrategias","digitales","tecnicas","digitales","online","aplicacion","off-line","digitales","off-line","estrategias","comercializacion","técnicas","tecnicas","comercializacion","online","estrategias","online","digitales","aplicacion","aplicación"];
var a=["3","2","4","2","2","5","3","6","4","7","3","4","5","5","1","7","1","6","6","7","1"];
var itemCorr=["0","0","0","0","0","0","0"];
var itemHelp=["","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="TWFya2V0aW5fRGlnaXRhbA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
var textBNext="";
var fHelp="Verdana, Geneva, sans-serif";
