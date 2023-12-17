



let navtoggle = document.querySelector(".nav-toggle");
let sidebar = document.querySelector(".sidebar");

navtoggle.addEventListener("click", function(){
    if(navtoggle.firstElementChild.classList.contains("fa-bars")){
        navtoggle.firstElementChild.classList.replace("fa-bars", "fa-times");
    }
    else{
        navtoggle.firstElementChild.classList.replace("fa-times", "fa-bars");
    }
    sidebar.classList.toggle("show-sidebar");
})