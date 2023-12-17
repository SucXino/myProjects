





// let btn = document.querySelector("#btn");
 
// btn.addEventListener("click", () => {
//   let btnResult =  btn.classList.contains('fa-bars');
//   if(btnResult){
//     btn.classList.remove("fa-bars")
//     btn.classList.add("fa-times")
//   }
//  else{ 
//     btn.classList.add("fa-bars")
//  }
// console.log(btnResult)
// }
// )


// let navToggle = document.querySelector(".nav-toggle");
// let links = document.querySelector(".links");


// navToggle.addEventListener("click", function(){
//     if(links.classList.contains("show-links")){
//         links.classList.remove("show-links");
//     }else{
//         links.classList.add("show-links");
//     }
//     links.classList.toggle("show-links");
// })






const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", function(){
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
        nav.style.maxHeight = nav.scrollHeight + "px";
    }else{
        nav.removeAttribute("style");
    }
}
 );












