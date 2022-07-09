var body = document.body ;
var container = document.createElement("div");
container.setAttribute("class" , "container");
container.setAttribute("id" , "cont");
container.innerHTML = "Stop Watch "
body.appendChild(container);

var cont = document.getElementById("cont");
var timer = document.createElement("div")
timer.setAttribute("class" , "timer");
timer.innerHTML = " 00 : 00 : 00 ";
timer.setAttribute("id" , "timer");

cont.appendChild(timer);


var t ;
var sec = 00 ;
var millisec =00 ;
var minute=00  ;

function startfun(){

  t = setInterval(function(){
    if(sec === 60){
      minute +=1 ; 
      sec=0 ;
    }
    if(millisec ===100){
      sec +=1 ;
      millisec = 0 ;
    }
  millisec +=1 ;
  var str = minute +" : "+ sec +" : " + millisec  ;
  document.getElementById("timer").innerHTML =  str ;

  } , 10)
   
  
}
var flag = false ;

var startBtn = document.createElement("button");
startBtn.setAttribute("id" , "btn1");
startBtn.setAttribute("class" , "btn");
startBtn.innerHTML = "Start";

var resetBtn = document.createElement("button");
resetBtn.setAttribute("id" , "btn2");
resetBtn.setAttribute("class" , "btn");
resetBtn.innerHTML = "Reset";

cont.appendChild(resetBtn);
cont.appendChild(startBtn);

startBtn.addEventListener("click" , function(){
  flag = !flag;
    if(flag){
       startBtn.style.backgroundColor = "rgb(82, 52, 52)";
       startBtn.style.border = "2px solid rgb(82, 52, 52) ";
        startBtn.style.color = "red";
        startBtn.innerHTML = "Stop";
        resetBtn.innerHTML = "Lap";
        startfun();
    }
    else{
        startBtn.style.backgroundColor = "rgb(124, 117, 117)";
        startBtn.style.border = "2px solid rgb(124, 117, 117) ";
        startBtn.style.color = "white";
        startBtn.innerHTML = "Start";
        resetBtn.innerHTML = "Reset";
          clearInterval(t)
    }
}) ;

resetBtn.addEventListener("click" , function(){

  if(flag){
    resetBtn.style.backgroundColor = "rgb(124, 117, 117)";
    resetBtn.style.border = "2px solid rgb(124, 117, 117) ";
    resetBtn.style.color = "white";
    addlap();
  }
  else{
    resetBtn.style.backgroundColor = "rgb(124, 117, 117)";
    resetBtn.style.border = "2px solid rgb(124, 117, 117) ";
    resetBtn.style.color = "white";
    timer.innerHTML = " 00 : 00 : 00 ";
    sec = 0 ;
    millisec =0 ;
    minute=0  ;
    i=1 ;

   while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
  }
})



var list = document.createElement("div");
list.id = "list";
cont.appendChild(list);
var i =1 ;
function addlap(){

  var sublist = document.createElement("p") ;
  sublist.setAttribute("class" , "sublist");

  var html1 = document.createElement("p")
  html1.id = "html1";
  html1.innerHTML = "lap " +i  ;
  var html2 = document.createElement("p")
  html2.id = "html2";
  html2.innerHTML = minute +" : "+ sec +" : " + millisec ;
  sublist.appendChild(html1);
  sublist.appendChild(html2);

  // sublist.innerHTML = "<br";
  list.appendChild(sublist);
  i++ ;
}

