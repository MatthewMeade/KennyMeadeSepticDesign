var images = document.querySelectorAll(".pSection .bg");
var largeHeader = document.querySelector("#largeHeader");
var smallHeader = document.querySelector("#smallHeader");
var background = document.querySelector("#pageBackground");
// var icons = document.querySelectorAll(".pSection+i");
var pOff = 250;

window.addEventListener("scroll", update);

var bgStart = [];
background.style.backgroundPosition.split(",").forEach(function(e){
 bgStart.push([parseInt(e), parseInt(e.slice(-4))]);
});

update();
function update(){

  var pos = window.pageYOffset;


  if(pos > 90){
    largeHeader.className = "disabled";
    smallHeader.className = "enabled";
  }

  if(pos < 20){
    largeHeader.className = "enabled";
    smallHeader.className = "disabled";
  }


  ///images.forEach(function(elem, i){ IE, please stop
  for(var i = 0; i < images.length; i++){
    var top = images[i].parentElement.getBoundingClientRect().top;

    // if(top < pOff){
    //   elem.style.top = -1 * ((pos + pOff) - (top + pos)) + 'px';
    // }

    images[i].style.top = -pos * 0.75 + 'px';

  };

  // var top0 = icons[0].getBoundingClientRect().top;
  // icons[0].style.textShadow = `5px ${Math.min(top0 / 25, 25)}px 25px #BBB`;
  //
  //
  // var top1 = icons[1].getBoundingClientRect().top - 200;
  // icons[1].style.textShadow = `5px ${Math.min(top1 / 25, 25)}px 25px #BBB`;

  var newBPos = "";
  bgStart.forEach(function(e){
    // newBPos += `${e[0]}% ${e[1] + (pos / 30)}%,`;  Stupid IE...
    newBPos += e[0]+"% "+e[1] + (pos / 30)+"%,";
  });

  newBPos = newBPos.slice(0, newBPos.length - 1)

  // console.log(newBPos);

  background.style.backgroundPosition = newBPos;
}
