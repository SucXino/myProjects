



let reviews = [{
        id: 1,    
        name: "Susan Smith",
        job: "WEB DEVELOPER",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },

    {
        id: 2,
        name: "Anna Johnson",
        job: "WEB DESIGNER",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },

    {
        id: 3,
        name: "Peter Jones",
        job: "INTERN",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.", 
    },

    {
        id: 4,
        name: "Bill Anderson",
        job: "THE BOSS",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",      
    },

    {
        id: 5,
        name: "Matomi Ezekiel",
        job: "BLOGGER, MENTOR AND MOBILE UI/UX DESIGNER",
        img: "https://images.ctfassets.net/ifut9sl2nx9t/7LH7DEqbv36vGLFxq8wTVF/540be9d8fe135c1a33a8e85bc62338e1/img_2193.jpg?w=1366&h=1821&q=50&fm=webp",
        text: "I'm a Software developer and tech enthusiast versed with a lot of programming languages and tools. I share knowledge about Web programming, mostly HTML, CSS, Javascript, React Hooks, Node Js, GraphQL with various folks and a mentor at Codeyourfuture students South Africa group 2021.",
    }        

]



let img = document.getElementById("person-img");
let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");

let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let randomBtn = document.querySelector(".random-btn");


let currentItem = 0;


window.addEventListener("DOMContentLoaded", function(){
    showPerson();
});


function showPerson() {
    let item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};


nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson()
});


prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
});



randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);

    showPerson();
})






