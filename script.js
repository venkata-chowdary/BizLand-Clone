const questions=document.querySelectorAll(".question")
const navBar=document.querySelector(".nav-ul");
const menuBtn=document.querySelector(".menu-btn");
const dropdown=document.querySelector(".dropdown-")


let valueDisplays=document.querySelectorAll(".number-counter");
let interval=5000;

questions.forEach(question =>{
    question.addEventListener("click",()=>{
        question.classList.toggle("active")
        
    })
})

valueDisplays.forEach((valueDisplay) => {
    let start=0;
    let end=parseInt(valueDisplay.getAttribute("data-value"));

    let duration=Math.floor(interval/end);
    let counter=setInterval( function(){
        start+=1;
        valueDisplay.innerHTML=start;

        if(start==end){
            clearInterval(counter)
        }
    },duration)
})

window.addEventListener("scroll", reveal);

function reveal(){
    var reveals=document.querySelectorAll(".reveal");

    for(var i=0;i<reveals.length;i++){

        var windowHeight=window.innerHeight;
        var revealTop=reveals[i].getBoundingClientRect().top;
        var revealPoint=150;
        if(revealTop<windowHeight-revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}


menuBtn.addEventListener("click",()=>{
    navBar.classList.toggle("nav-bar");
})


dropdown.addEventListener("mousemove",()=>{
    const dropdownContent=document.querySelector(".dropdown-content")
    dropdownContent.classList.toggle("dropdown-content-toggle")
})


