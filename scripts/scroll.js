var images = document.querySelectorAll(".pSection .bg");
var largeHeader = document.querySelector("#largeHeader");
var smallHeader = document.querySelector("#smallHeader");
// var background = document.querySelector("#pageBackground");
var icons = document.querySelectorAll(".pSection+i");
var pOff = 200;

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

  var top0 = icons[0].getBoundingClientRect().top;
  icons[0].style.textShadow = `15px ${Math.min(top0 / 6, 30)}px 10px #BBB`;


  var top1 = icons[1].getBoundingClientRect().top - 200;
  icons[1].style.textShadow = `15px ${Math.min(top1 / 6, 30)}px 10px #BBB`;

  // background.style.top = (pos / 1.5) - 300 + "px";
}
