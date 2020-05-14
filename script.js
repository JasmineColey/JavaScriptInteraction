var calculateNum = document.getElementById("half-button");
var getFortune = document.getElementById("fortune-b");
var outputFortune = document.getElementById("fortune-output");

getFortune.addEventListener("click", fortune);
calculateNum.addEventListener("click", calculate);
outputFortune.addEventListener("click", restyle);

function calculate(){
  var inputNum = document.getElementById("half-input").value;
  var outputNum = inputNum / 2;
  alert("Half of " + inputNum + " is " + outputNum);
  console.log("Half of " + inputNum + " is " + outputNum);
}


function fortune(){
  var name = document.getElementById("fortune-input").value;
  var fortunes = ["You will eat pizza for dinner",
                  "You will watch Netflix Tonight",
                  "You will call your ex",
                  "You will find momey on the ground today",
                  "Nevermind no fortune found."];
  outputFortune.innerHTML = name + ": " + fortunes[Math.floor(Math.random() * fortunes.length)];
}

function restyle(){
  var color = ["#A93226", "#FADBD8", "#8E44AD", "2E86C1", "#138D75", "#145A32", "#FBEEE6", "#AAB7B8"];
  var size = ["1vh", "2vh", "3vh", "4.5vh", "5vh", "6vh", "7.5vh"];
  var textDecor = ["overline", "line-through", "underline", "underline overline"];

  var colorR = Math.floor(Math.random() * color.length);
  var sizeR = Math.floor(Math.random() * size.length);
  var textDecorR = Math.floor(Math.random() * textDecor.length);

  outputFortune.style.color = color[colorR];
  outputFortune.style.fontSize = size[sizeR];
  outputFortune.style.textDecoration = textDecor[textDecorR];
}
