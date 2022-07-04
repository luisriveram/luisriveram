//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=50; timeIni=50; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=3;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFFFF"; colorButton="#FE4343"; colorText="#000000"; colorSele="#000080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Century Gothic, sans-serif";
var timeOnMessage=5; messageOk="Congratulation!!"; messageTime="Sorry, overtime!!"; messageError="Mistake"; messageErrorG="Mistake"; messageAttempts="Game Over"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UFBFMl8xXw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["","","","","","","",""];
var iL=["<div  align='center'><img src='PPE2_1__resources/media/Una_noche_en_el_museo.png'></div>","<div  align='center'><img src='PPE2_1__resources/media/Guason.png'></div>","<div  align='center'><img src='PPE2_1__resources/media/Coco.png'></div>","<div  align='center'><img src='PPE2_1__resources/media/El_planeta_de_los_simios.png'></div>","<div  align='center'><img src='PPE2_1__resources/media/E.T.png'></div>","<div  align='center'><img src='PPE2_1__resources/media/Kink_kong.png'></div>","<div  align='center'><img src='PPE2_1__resources/media/Madagascar.png'></div>","<div  align='center'><img src='PPE2_1__resources/media/Mi_pobre_angelito.png'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>Coco</p>","<p>El planeta de los simios</p>","<p>Guason</p>","<p>King Konk</p>","<p>Mi pobre angelito</p>","<p>Una noche en el museo</p>","<p>E. T, el extraterrestre</p>","<p>Madagascar</p>"]; ansRL=["NQ==","Mg==","MA==","MQ==","Ng==","Mw==","Nw==","NA=="];
var iR=["","","","","","","",""];
var auR=[3,4,2,6,8,1,5,7];
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
