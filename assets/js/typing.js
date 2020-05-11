var i=1;
var txt = 
"Why can't I see all the color that you see ?                   ";
var tag = document.getElementById("typer");
var sleepTime = 250;

tag.innerHTML=txt.charAt(0);
tag.style.textAlign = "center";
tag.style.fontSize = "small";

function typer() {
  if (i < txt.length) {
    tag.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typer, sleepTime);
  }
  if(i==txt.length){
  	i=1;
    tag.innerHTML=txt.charAt(0);
  }
}