//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
paintBoard();for(var i=0;i<polygonPoints.length;++i){var polygon=new Polygon(),points=polygonPoints[i];polygon.numInd=i;
points.forEach( function (point) {polygon.addPoint(point.x, point.y);});shapes.push(polygon);}var canvas=document.getElementById("imaAct");var context=canvas.getContext("2d");
$("#imaAct").click(function (e) {var location=windowToCanvas(e);var ind=0;var sele=-1;shapes.forEach( function (shape) {if (shape.isPointInPath(context,location.x,location.y)) {
sele=shapes[ind].numInd;}ind++;});isCorrect(sele);});paintHelp();
}
function paintHelp(){if (auMP3[game[indexGame]].localeCompare("")!=0 || auOGG[game[indexGame]].localeCompare("")!=0){stopSound();document.getElementById("audio"+game[indexGame]).play();
$("#help").html(imaSound+" <p>"+areaHelp[game[indexGame]]+"</p>");$("#playSound").mousedown(function (e){
document.getElementById("audio"+game[indexGame]).play();});}else{$("#help").html("<p>"+areaHelp[game[indexGame]]+"</p>");}}
function stopSound(){for (i=0;i<auMP3.length;i++){if (auMP3[i].localeCompare("")!=0 || auOGG[i].localeCompare("")!=0){document.getElementById("audio"+parseInt(i)).pause();}}}
function paintBoard(){var canvas=document.getElementById("imaAct");var contexto=canvas.getContext("2d");
var imageObj=new Image();imageObj.onload = function(){contexto.drawImage(this, 0, 0);};imageObj.src = backSrc;}
function windowToCanvas(e){var canvas=document.getElementById("imaAct");var x = e.x || e.clientX,y = e.y || e.clientY,
bbox=canvas.getBoundingClientRect();return { x: x - bbox.left * (canvas.width  / bbox.width),y: y-bbox.top*(canvas.height / bbox.height)};};
function isCorrect(sele){var ind=game[indexGame];var correct=-1;if (sele>-1){if (area[sele].localeCompare(ind)==0 && areaSolved[sele].localeCompare("N")==0){
areaSolved[sele]="Y";paintArea(sele);correct=0;}else{if (area[sele].localeCompare(ind)==0 && areaSolved[sele].localeCompare("Y")==0){correct=1;}}}
if (correct==0){score=score+scoreInc;timeAct=timeAct+timeBon;successes++;var all=true;for (i=0; i<areaSolved.length; i++){if (areaSolved[i].localeCompare("N")==0){all=false;}}
if (all){stopSound();showMessage("Ok");}else{var newArea=true;for (i=0;i<areaSolved.length;i++){if (areaSolved[i].localeCompare("N")==0){if (area[i].localeCompare(ind)==0){newArea=false;}}}if (newArea){indexGame++;paintHelp();}}
}else{if (correct==-1){if (areaWrong[game[indexGame]].localeCompare("")==0){messageError= initMessageError;}else{messageError=areaWrong[game[indexGame]];}
attempts++;score=score-scoreDec;if (tiAttempts){if (attempts>attemptsMax){
showMessage("Attempts");}else{showMessage("Error");}}else{showMessage("Error");}}}}
function paintArea(area){var canvas=document.getElementById("imaAct");var contexto=canvas.getContext("2d");
var fi=true;var sX=-1;var sY=-1;contexto.lineWidth=2;contexto.beginPath();for (i=0;i<points.length;i++){if (points[i][2].localeCompare(area.toString())==0){
if(fi){contexto.moveTo(parseInt(points[i][0]),parseInt(points[i][1]));fi=false;sX=parseInt(points[i][0]);sY=parseInt(points[i][1]);}
else{contexto.lineTo(parseInt(points[i][0]),parseInt(points[i][1]));}}}contexto.lineTo(sX,sY);
contexto.strokeStyle =areaColor[area];contexto.fillStyle =areaColor[area];contexto.closePath();contexto.stroke();
contexto.font = " 10px Verdana, Geneva, sans-serif";
paintWord(contexto,areaWord[area],parseInt(wordPointX[area]),parseInt(wordPointY[area]),area,12);
}
function paintWord(ctx,word,x,y,area,tamaFont) {var h=tamaFont+10;var radius=8;var metrics = ctx.measureText(word);var w = metrics.width+20;
ctx.fillStyle =areaColor[area];
ctx.globalAlpha=1;
ctx.beginPath();ctx.strokeStyle=colorBack;ctx.lineWidth="2";ctx.moveTo(x,y);ctx.lineTo(x+radius,y-radius);
ctx.lineTo(x+(w-3*radius),y-radius);ctx.quadraticCurveTo(x+(w-3*radius)+radius+radius, y-radius-(h/2), x+(w-3*radius), y-radius-h);ctx.lineTo(x-2*radius,y-radius-h);
ctx.quadraticCurveTo(x-4*radius,y-radius-(h/2),x-2*radius,y-radius);ctx.lineTo(x-radius,y-radius);ctx.lineTo(x,y);ctx.shadowColor = "#999";ctx.shadowBlur=8;ctx.shadowOffsetX=2;ctx.shadowOffsetY=2;
ctx.fill();ctx.stroke();ctx.shadowBlur=0;ctx.shadowOffsetX=0;ctx.shadowOffsetY=0;ctx.fillStyle=colorWord;ctx.lineWidth="0";ctx.globalAlpha=1;ctx.fillText(areaWord[area],x-radius,y-radius-5);}
function randomSort(){
var areaGame=[];var ini=0;for (var i=0; i<area.length; i++){if (i.toString().localeCompare(area[i])==0){areaGame.push(area[i]);}}
for (var i=0;i<areaGame.length;i++){ini=Math.floor(Math.random()*areaGame.length);while (areaGame[ini].localeCompare("X")==0){ini++;
if (ini==areaGame.length){ini=0;}}game.push(areaGame[ini]);areaGame[ini]="X";}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
for (var i=0;i<areaSolved.length;i++){paintArea(i);}
}
function paintBack(){}
function PaInterWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
