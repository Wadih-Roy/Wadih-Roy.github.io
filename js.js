$(window).on("scroll", function(){
    if($(this).scrollTop() > 100){
        $("header").addClass("scrolledHeader");
    }
    else{
        $("header").removeClass("scrolledHeader");
    }
});
//slide right
function slideRight(){
    var reveals = document.querySelectorAll(".slide-right")
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", slideRight);

//slide left
function slideLeft(){
    var reveals = document.querySelectorAll(".slide-left")
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", slideLeft);

//slide down
function slideDown(){
    var reveals = document.querySelectorAll(".slide-down")
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", slideDown);

//slide up
function slideUp(){
    var reveals = document.querySelectorAll(".slide-up")
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", slideUp);
document.addEventListener('scroll', () =>{
    const header = document.querySelector('header');
    if(window.scrollY > 0){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
})