

let navtoggle = document.querySelector(".nav-toggle");
let sidebar = document.querySelector(".sidebar");

navtoggle.addEventListener("click", () => {
    let test = navtoggle.firstElementChild.classList.contains("fa-bars")
    let itest = navtoggle.firstElementChild.classList
    switch(test){
        // case itest:
        //     itest.replace("fa-bars", "fa-times");
        //     break;

        // case  itest:
        //     itest.replace("fa-times", "fa-bars")
        //     break;

        default:
            sidebar.classList.toggle("show-sidebar");
            break;  
        }
    })
//     else{
//         navtoggle.firstElementChild.classList.replace("fa-times", "fa-bars");
//     }
//     sidebar.classList.toggle("show-sidebar");
// })