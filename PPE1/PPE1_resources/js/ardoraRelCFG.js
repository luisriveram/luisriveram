//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=50; timeIni=50; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFFFF"; colorButton="#4101C5"; colorText="#000000"; colorSele="#80FFFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Congratulation!!!"; messageTime="Sorry, overtime!!"; messageError="Mistake"; messageErrorG="Mistake"; messageAttempts="Game over!!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UFBFMQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["","","","","","","",""];
var iL=["<div  align='center'><img src='PPE1_resources/media/Mulan.png'></div>","<div  align='center'><img src='PPE1_resources/media/Dumbo.png'></div>","<div  align='center'><img src='PPE1_resources/media/Winnie_the_pooh.png'></div>","<div  align='center'><img src='PPE1_resources/media/Lilo_y_Stich.png'></div>","<div  align='center'><img src='PPE1_resources/media/Blanca_nieve_y_los_7_enanitos.png'></div>","<div  align='center'><img src='PPE1_resources/media/La_princesa_y_el_Sapo.png'></div>","<div  align='center'><img src='PPE1_resources/media/La_sirenita.png'></div>","<div  align='center'><img src='PPE1_resources/media/101_Dalmatas.png'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>Lilo y Stich</p>","<p>La princesa y el sapo</p>","<p>Mulan</p>","<p>Dumbo</p>","<p>La sirenita</p>","<p>Winnie the Pooh</p>","<p>Blanca Nieve y los 7 enanitos</p>","<p>101 Dalmatas</p>"]; ansRL=["Mg==","Mw==","NQ==","MA==","Ng==","MQ==","NA==","Nw=="];
var iR=["","","","","","","",""];
var auR=[4,6,1,2,7,3,5,8];
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
