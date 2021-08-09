
const menuToggle = document.querySelector("#menu-toggle");
const activeElements = document.querySelectorAll(".active-element");

menuToggle.addEventListener('click', function(){
    for(let active =0; active < activeElements.length; active++){
        activeElements[active].classList.toggle("active");
    }

    const navBtnIcon = menuToggle.childNodes[1];

    navBtnIcon.classList.toggle("fa-times");

    const pageBg = document.querySelector(".main-container");

    if(navBtnIcon.classList.contains("fa-times")){
        pageBg.style.filter = "blur(3px)";
    }else{
        setTimeout(function(){
            pageBg.style.filter = "blur(0)";

        }, 500)
    }

    const listItem = document.querySelectorAll(".main-nav-list a");
    listItem.forEach(function(item, index){

        item.style.transition = `all 0.5s linear ${index * 0.3}s`;
    });
});
