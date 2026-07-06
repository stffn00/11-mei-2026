function showPage(pageId){

    let pages=document.querySelectorAll(".page");

    pages.forEach(function(page){

        page.classList.remove("active");

    });

    document.getElementById(pageId).classList.add("active");

}

window.onload=function(){

    showPage("home");

}
// FAQ Accordion

const faq=document.querySelectorAll(".faq-item");

faq.forEach(item=>{

    item.querySelector(".faq-question").addEventListener("click",()=>{

        item.classList.toggle("activeFaq");

        const answer=item.querySelector(".faq-answer");

        const plus=item.querySelector(".plus");

        if(item.classList.contains("activeFaq")){

            answer.style.maxHeight=answer.scrollHeight+"px";

            plus.innerHTML="-";

        }

        else{

            answer.style.maxHeight=null;

            plus.innerHTML="+";

        }

    });

});