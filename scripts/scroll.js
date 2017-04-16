var images = document.querySelectorAll(".pSection .bg");
var header = document.querySelector("header");
var spacer = document.querySelector("#headSpacer");
var pOff = 350;

window.addEventListener("scroll", update);

update();
function update(){

  var pos = window.pageYOffset;


  if(pos > 20){
    header.className = "mini";
    spacer.className = "enabled";
  }else{
    header.className = "";
    spacer.className = "";
  }


  images.forEach(function(elem, i){
    var top = elem.parentElement.getBoundingClientRect().top;
    var bottom = elem.parentElement.getBoundingClientRect().bottom;

    if(top < pOff){
      elem.style.top = -1 * ((pos + pOff) - (top + pos)) + 'px';
    }
  });
}
