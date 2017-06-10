var headings, button;
var nameInput, subjectInput;
var form;

(function(){
  document.querySelector("form").addEventListener("submit", OnFormSubmit);
  headings = document.querySelectorAll("#contact h2");
  button = document.querySelector("#submitButton");

  nameInput = document.querySelector("#name");
  subjectInput = document.querySelector("#subject");

  form = document.querySelector("#contactForm");
})();


function OnFormSubmit(event){
  event.preventDefault();

  toggleHeader();

  var http = new XMLHttpRequest();
  var url = "https://formspree.io/kennydmeade@gmail.com";

  subjectInput.value += nameInput.value;

  var formData = new FormData(form);

  http.open("POST", url, true);

  http.setRequestHeader('accept', 'application/json');

  http.onreadystatechange = function() {
      if(http.readyState === 4) {
          setTimeout(toggleHeader, 1000);
          form.reset();
      }
  };

  button.value = "Sending...";
  http.send(formData);

}

function toggleHeader(){
  if(headings[0].className === ""){
    headings[0].className = "hidden";
    headings[1].className = "";

    button.value = "Thank you";
  }else{
    headings[0].className = "";
    headings[1].className = "hidden";
    button.value = "Submit";
  }

  button.className = headings[0].className;


}
