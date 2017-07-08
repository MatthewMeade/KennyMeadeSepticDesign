var questions = document.querySelector("#faq ul");
var faqBackground = document.querySelector("#faqBg");
var faqWindow = document.querySelector("#faq");

(function(){
    questions.addEventListener("click", function(e){
       if(e.target.tagName === "H3"){

           var s = document.querySelector("li.active");
           if(s) s.className = "";

           var parent = e.target.parentNode;
           parent.className = parent.className === "active" ? "" : "active";

       }
    });
})();

(function () {
    faqBackground.addEventListener("click", function(){
       toggleWindow(false);
    });

    document.querySelector("#faqClose").addEventListener("click", function () {
        toggleWindow(false);
    })
})();


function toggleWindow(mode){
    document.body.style.overflow = mode ? "hidden" : "";
    faqBackground.className = mode ? "enabled" : "";
    faqWindow.className = mode ? "enabled" : "";
}
