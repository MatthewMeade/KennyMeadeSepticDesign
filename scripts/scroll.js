var images = document.querySelectorAll(".pSection .bg");
var largeHeader = document.querySelector("#largeHeader");
var smallHeader = document.querySelector("#smallHeader");
var background = document.querySelector("#pageBackground");
var pOff = 400;

window.addEventListener("scroll", update);

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


  images.forEach(function(elem, i){
    var top = elem.parentElement.getBoundingClientRect().top;

    if(top < pOff){
      elem.style.top = -1 * ((pos + pOff) - (top + pos)) + 'px';
    }
  });

  background.style.top = (pos / 1.5) - 300 + "px";
}
