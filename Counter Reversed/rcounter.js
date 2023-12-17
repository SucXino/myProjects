


let count = 0

let counter = document.getElementById('value');
let myBtnArr = document.querySelectorAll('.btn');

// console.log(myBtn);
// for (profile of myBtnArr){
//     console.log(profile)
// }

// myBtnArr.forEach(function(btn){
    btn.addEventListener("click", function(event){
        let myCounter = event.currentTarget.classList
       
        if(myCounter.contains('increase')){
            count++;
        }else if(myCounter.contains('decrease')){
            count--;
        }else{
            count = 0;
        }
        if(count < 0){
            counter.style.color = "red";
        }
        if(count === 0){
            counter.style.color = "black";
        }
        if(count > 0){
            counter.style.color = "green";
        }
       return counter.textContent = count;
    });
// });


