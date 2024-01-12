

// let myCounter = document.querySelector('.counter');
// let btn1 = document.querySelector('.decrease');
// let btn2 = document.querySelector('.reset');
// let btn3 = document.querySelector('.increase');


// let count = 0

// btn1.onclick = function(){
//     count--;
//     myCounter.innerHTML = count;
//     myCounter.style.color = "red"
// }

// btn2.onclick = function(){
//     count = 0;
//     myCounter.innerHTML = count;
//     myCounter.style.color = "black";
// }

// btn3.onclick = function(){
//     count++;
//     myCounter.innerHTML = count;
//     myCounter.style.color = "green";
// }

let count = 0

let counter = document.querySelector('#value');
let myBtn = document.querySelectorAll('.btn');


myBtn.forEach(function(btn){
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
});



