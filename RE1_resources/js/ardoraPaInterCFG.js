//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=13; attempts=0; attemptsMax=1;
var score=0; scoreMax=13; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#7AFCE9"; colorButton="#3600C6"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Good job!!!!"; messageTime="Se ha acabado el tiempo"; messageError="Intentalo de nuevo"; messageErrorG="Intentalo de nuevo"; messageAttempts="Se acabaron las oportunidades"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UkUx"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var points=[["134","38","0","0"],["179","24","0","0"],["201","40","0","0"],["207","90","0","0"],["145","93","0","0"],["144","94","0","0"],["206","26","1","1"],["213","58","1","1"],["230","68","1","1"],["363","45","1","1"],["363","45","1","1"],["214","85","2","2"],["264","74","2","2"],["293","92","2","2"],["295","139","2","2"],["211","138","2","2"],["210","137","2","2"],["521","73","3","3"],["468","126","3","3"],["442","105","3","3"],["440","104","3","3"],["461","127","4","4"],["447","142","4","4"],["376","83","4","4"],["369","77","4","4"],["368","79","4","4"],["207","148","5","5"],["316","139","5","5"],["204","182","5","5"],["207","181","5","5"],["197","188","6","6"],["287","185","6","6"],["299","222","6","6"],["205","229","6","6"],["204","229","6","6"],["201","202","7","7"],["291","199","7","7"],["293","211","7","7"],["206","216","7","7"],["206","214","7","7"],["198","238","8","8"],["295","229","8","8"],["298","247","8","8"],["204","251","8","8"],["204","248","8","8"],["187","287","9","9"],["291","249","9","9"],["219","301","9","9"],["222","300","9","9"],["322","82","10","10"],["327","216","10","10"],["405","249","10","10"],["432","151","10","10"],["321","82","10","10"],["381","37","11","11"],["516","56","11","11"],["504","74","11","11"],["389","55","11","11"],["383","59","11","11"],["376","63","11","11"],["376","63","11","11"],["323","233","12","12"],["236","319","12","12"],["372","279","12","12"],["372","279","12","12"],["77","350","13","13"]];
var backSrc="RE1_resources/media/Mapa de España.jpg";
var Shape = function () {this.x=undefined;this.y=undefined;};
Shape.prototype={fill:function(context){context.save();context.fillStyle=this.fillStyle;this.createPath(context);context.fill();context.restore();},
stroke:function(context){context.save();this.createPath(context);context.stroke();context.restore();},
isPointInPath:function(context,x,y){this.createPath(context);return context.isPointInPath(x, y);},};
var Polygon=function(){this.points = [];this.numInd=0;};Polygon.prototype=new Shape();Polygon.prototype.addPoint=function(x,y){this.points.push(new Point(x,y));};
Polygon.prototype.createPath=function (context) {if (this.points.length === 0)return;context.beginPath();
context.moveTo(this.points[0].x,this.points[0].y);for (var i=0; i < this.points.length; ++i) {context.lineTo(this.points[i].x,this.points[i].y);}context.closePath();};
var Point=function(x,y){this.x=x;this.y=y;};var shapes=[];
var polygonPoints=[[new Point(134,38),new Point(179,24),new Point(201,40),new Point(207,90),new Point(145,93),new Point(144,94)],[new Point(206,26),new Point(213,58),new Point(230,68),new Point(363,45),new Point(363,45)],[new Point(214,85),new Point(264,74),new Point(293,92),new Point(295,139),new Point(211,138),new Point(210,137)],[new Point(521,73),new Point(468,126),new Point(442,105),new Point(440,104)],[new Point(461,127),new Point(447,142),new Point(376,83),new Point(369,77),new Point(368,79)],[new Point(207,148),new Point(316,139),new Point(204,182),new Point(207,181)],[new Point(197,188),new Point(287,185),new Point(299,222),new Point(205,229),new Point(204,229)],[new Point(201,202),new Point(291,199),new Point(293,211),new Point(206,216),new Point(206,214)],[new Point(198,238),new Point(295,229),new Point(298,247),new Point(204,251),new Point(204,248)],[new Point(187,287),new Point(291,249),new Point(219,301),new Point(222,300)],[new Point(322,82),new Point(327,216),new Point(405,249),new Point(432,151),new Point(321,82)],[new Point(381,37),new Point(516,56),new Point(504,74),new Point(389,55),new Point(383,59),new Point(376,63),new Point(376,63)],[new Point(323,233),new Point(236,319),new Point(372,279),new Point(372,279)],[new Point(77,350)]];
var game=[];indexGame=0;
var area=["0","1","2","3","4","5","6","7","8","9","10","11","12"];
var areaSolved=["N","N","N","N","N","N","N","N","N","N","N","N","N"];
var areaWord=["Macizo Galaico","Cordillera Cantábrica","Submeseta Norte","Cordillera Costera Catalana","Depresion del ebro","Sistema Central","Submeseta Sur","Montes de Toledo","Sierra Morena","Depresión del Guadalquivir","Sistema Ibérico","Cordillera Pirenaica","Sistema Bético"];
var areaHelp=["Sistema de sierras y montañas de Galicia y de la zona limítrofe con las provincias de Zamora y León, en España","Constituye una cadena montañosa litoral de más de 400 km, que se extien- de a lo largo del borde norte de la Península Ibérica, entre Galicia y los Pirineos","Una cuenca cerrada y ligeramente inclinada hacia el Oeste","Forma una barrera montañosa que cierra la Cuenca terciaria del rio Ebro. Se extiende en dirección NE-SO","Una amplia región del noreste de la Península Ibérica por donde corre el río Ebro","Es una cordillera que se encuentra en el centro de la Península Ibérica y que tiene una longitud de unos 600 kilómetros","En ella se localizan las cuencas hidrográficas del Tajo y Guadiana","Se extiende al sur de la provincia, limitando, en parte, con Ciudad Real","Comarca situada en el norte de la provincia de Jaén","Llanura triangular de 350 Km de longitud delimitada por Sierra Morena y la Cordillera Subbética","Sistema montañoso de la península ibérica que se extiende en dirección noroeste-sureste entre la depresión del Ebro y la meseta","Una cordillera montañosa situada al norte de la península ibérica, que hace de frontera natural entre España y Francia","Son un sistema montañoso joven, de 620 Km de longitud, y en el que se encuentra la cumbre más alta de toda la Península: el pico Mulhacén"];
var areaWrong=["Intenta de nuevo!","Casi! Prueba otra vez!","Casi! Prueba otra vez!","Casi! Prueba otra vez!","Casi! Prueba otra vez!","Casi! Prueba otra vez!","Casi! Prueba otra vez!","Casi! Prueba otra vez!","Casi! Prueba otra vez!","Casi! Prueba otra vez!","Casi! Prueba otra vez!","Casi! Prueba otra vez!","Casi! Prueba otra vez!"];
var initMessageError="Intentalo de nuevo";
var wordPointX=["134","206","214","521","461","207","197","201","198","187","322","381","323"];
var wordPointY=["38","26","85","73","127","148","188","202","238","287","82","37","233"];
var areaColor=["#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0"];
var pathMedia="RE1_resources/media/"
var auMP3=["","","","","","","","","","","","",""];
var auOGG=["","","","","","","","","","","","",""];
var colorWord="#000000";
