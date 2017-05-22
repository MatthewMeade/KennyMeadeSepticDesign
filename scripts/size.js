var elem = document.createElement("p");

elem.appendChild(document.createTextNode("0x0"));

elem.style.position = "fixed";
elem.style.top = '-10px'; elem.style.left = 0;
elem.style.padding = "5px";
elem.style.zIndex = 1000;
elem.style.fontFamily = "monospace";
elem.style.opacity = 0.5;


elem.innerHTML = `${window.innerWidth} x ${window.innerHeight}`;

document.body.insertBefore(elem,  document.body.firstChild);

window.addEventListener("resize", (e) => {
  elem.innerHTML = `${window.innerWidth} x ${window.innerHeight}`
});
