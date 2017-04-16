var elems = document.querySelectorAll(".pSection .bg");
var off = 175;

var marker = document.getElementById("offMarker");

window.addEventListener("scroll", update);
update();

function update(){

  marker.style.top = off + 'px';

  elems.forEach(function(elem, i){
    var top = elem.parentElement.getBoundingClientRect().top;
    var bottom = elem.parentElement.getBoundingClientRect().bottom;
    var imgPos = elem.style.top;
    var pos = window.pageYOffset


    // console.log(`Top: ${top} Off: ${pos + off} Img: ${imgPos}`);
    if(top < off && bottom > off){
      elem.style.top = -1 * ((pos + off) - (top + pos)) + 'px';

    }
  });
}
