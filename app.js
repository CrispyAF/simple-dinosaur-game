var char = document.getElementById("char");
var block = document.getElementById("block");
var counter = 0;

function jump(){
  if (char.classList == "animate"){return}
    char.classList.add("animate");
  setTimeout(function(){
    char.classList.remove("animate");
  },300);
}

var checkDead = setInterval(function(){
  var charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if (blockLeft < 100 && blockLeft>-100 && charTop>=300){
    block.style.animation = "none";
    block.style.display = "none";
    alert("Game Over. Your Score: "+Math.floor(counter/60));
    counter = 0;
    window.location.reload();
  }
  else{
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter/60);
  }
},10);