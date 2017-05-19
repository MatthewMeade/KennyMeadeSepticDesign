var questions = document.querySelector("#faq ul");
var background = document.querySelector("#faqBg");
var faqWindow = document.querySelector("#faq");

(function(){
    questions.addEventListener("click", function(e){
       if(e.srcElement.tagName === "H3"){

           var s = document.querySelector("li.active");
           if(s) s.className = "";

           var parent = e.srcElement.parentNode;
           parent.className = parent.className === "active" ? "" : "active";

       }
    });
})();

(function () {
    background.addEventListener("click", function(){
       toggleWindow(false);
    });

    document.querySelector("#faqClose").addEventListener("click", function () {
        toggleWindow(false);
    })
})();


function toggleWindow(mode){
    document.body.style.overflow = mode ? "hidden" : "";
    background.className = mode ? "enabled" : "";
    faqWindow.className = mode ? "enabled" : "";
}
