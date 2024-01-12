





let btn = document.querySelector("#btn");
let mydiv = document.querySelector(".mydiv");
 
btn.addEventListener("click", () => {
     btn.classList.toggle('fa-times')
     let btnResult = btn.classList.contains("fa-times")
     if(btnResult){
        mydiv.style.height = "200px"

     }else{
        mydiv.style.height = "0px"

     }
}
)


