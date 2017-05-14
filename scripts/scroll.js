var images = document.querySelectorAll(".pSection .bg");
var header = document.querySelector("header");
var spacer = document.querySelector("#headSpacer");
var pOff = 400;

window.addEventListener("scroll", update);

update();
function update(){

  var pos = window.pageYOffset;

  header.className = pos > 20 ? "mini" : "";
  spacer.className = pos > 20 ? "enabled" : "";

  images.forEach(function(elem, i){
    var top = elem.parentElement.getBoundingClientRect().top;

    if(top < pOff){
      elem.style.top = -1 * ((pos + pOff) - (top + pos)) + 'px';
    }
  });
}
