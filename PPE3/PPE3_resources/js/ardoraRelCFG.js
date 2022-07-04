//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
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
var colorBack="#FFFDFD"; colorButton="#0000FF"; colorText="#000000"; colorSele="#FF0013";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Century Gothic, sans-serif";
var timeOnMessage=5; messageOk="Congratulation!!!"; messageTime="Sorry, TimeOver"; messageError="Mistake"; messageErrorG="Mistake"; messageAttempts="GameOver!!!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UFBFMw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["","","","","","","",""];
var iL=["<div  align='center'><img src='PPE3_resources/media/Sherk.png'></div>","<div  align='center'><img src='PPE3_resources/media/Los_juegos_del_hambre.png'></div>","<div  align='center'><img src='PPE3_resources/media/Star_Wars.png'></div>","<div  align='center'><img src='PPE3_resources/media/Un_lugar_en_silencio.png'></div>","<div  align='center'><img src='PPE3_resources/media/Soy_leyenda.png'></div>","<div  align='center'><img src='PPE3_resources/media/Interestelar.png'></div>","<div  align='center'><img src='PPE3_resources/media/Space_Jam.png'></div>","<div  align='center'><img src='PPE3_resources/media/Sonic.png'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>Star Wars</p>","<p>Sherk</p>","<p>Un lugar en silencio</p>","<p>Soy Leyenda</p>","<p>Interestelar</p>","<p>Los juegos del hambre</p>","<p>Space Jam</p>","<p>Sonic</p>"]; ansRL=["MQ==","NQ==","MA==","Mg==","Mw==","NA==","Ng==","Nw=="];
var iR=["","","","","","","",""];
var auR=[3,1,4,5,6,2,7,8];
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
