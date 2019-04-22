class cat {
    constructor(name, picture, clicks = 0) {
        this.name = name; 
        this.picture = picture;
        this.clicks = clicks;
    }
}

const cat1 = new cat("Billy", "img/cat1.jpg");
const cat2 = new cat("Bob", "img/cat2.jpg");
const cat3 = new cat("Thorton", "img/cat3.jpg");
const cat4 = new cat("Jelly", "img/cat4.jpg");
const cat5 = new cat("Bean", "img/cat5.jpg");

// list of all cats
const cats = [cat1, cat2, cat3, cat4, cat5];

// select left column in dom
const leftColumn = document.querySelector(".col-4");

//construct cat list
const ul = document.createElement("ul");
ul.className = "list-group"
for(let cat of cats) {
    const li = document.createElement("li");
    li.className = "list-group-item"
    li.textContent = cat.name;
    li.addEventListener("click", ()=>{
        )
    ul.appendChild(li);  
}

leftColumn.appendChild(ul);















// const cat1 = {
// name: "Billy",
// picture:"img/cat1.jpg",
// clicks: 0

// const cat2 = {
//     name: "Bob",
//     picture:"img/cat2.jpg",
//     clicks: 0
// }

// const cat3 = {
//     name: "Thorton",
//     picture:"img/cat3.jpg",
//     clicks: 0
// }

// const cat4 = {
//     name: "
//     Jelly",
//     picture:"img/cat4.jpg",
//     clicks: 0
// }

// const cat5 = {
//     name: "Bean",
//     picture:"img/cat5.jpg",
//     clicks: 0
// }


// const cat1Container = document.querySelector('#cat-1');
// const cat2Container = document.querySelector('#cat-2');
// const cat3Container = document.querySelector('#cat-3');
// const cat4Container = document.querySelector('#cat-4');
// const cat4Container = document.querySelector('#cat-5');

// //add cat names
// const cat1Name = document.createElement("h1");
// cat1Name.textContent= cat1.name;
// cat1Container.appendChild(cat1Name);

// const cat2Name= document.createElement("h1");
// cat2Name.textContent = cat2.name;
// cat2Container.appendChild(cat2Name);

// // add cat images
// const cat1Image = document.createElement("img");
// cat1Image.setAttribute("src", cat1.picture);
// cat1Image.setAttribute("alt", "pic of cat");
// cat1Container.appendChild(cat1Image);

// const cat2Image = document.createElement("img");
// cat2Image.setAttribute("src", cat2.picture);
// cat2Image.setAttribute("alt", "picture of cat");
// cat2Container.appendChild(cat2Image);

// // add cat click counters
// const cat1Counter = document.createElement("h1");
// cat1Counter.textContent = `Clicks: ${cat1.clicks}`;
// cat1Container.appendChild(cat1Counter);

// const cat2Counter = document.createElement("h1");
// cat2Counter.textContent = `Clicks: ${cat2.clicks}`;
// cat2Container.appendChild(cat2Counter);


// // add cat image event listeners
// cat1Image.addEventListener("click", ()=>{
//     cat1.clicks++;
//     cat1Counter.textContent = `Clicks: ${cat1.clicks}`;
// })

// cat2Image.addEventListener("click", ()=>{
//     cat2.clicks++;
//     cat2Counter.textContent = `Clicks: ${cat2.clicks}`;
// })



















// // // select cat image
// // const cat1 = document.querySelector("#cat1-img");
// // // counter for counting clicks
// // let counter1 = 0;

// // // select the span with id click
// // const click1 = document.querySelector("#click1");

// // // set counter into click
// // click1.textContent = counter1;

// // // add click event on cat image
// // cat1.addEventListener("click1", ()=>{
// //     counter1++;
// //     click1.textContent = counter1;
// // })



// // // select cat image #2
// // const cat2 = document.querySelector("#cat2-img");
// // // counter for counting clicks
// // let counter2 = 0;

// // // select the span with id click
// // const click2 = document.querySelector("#click2");

// // // set counter into click
// // click2.textContent = counter2;

// // // add click event on cat image
// // cat2.addEventListener("click2", ()=>{
// //     counter2++;
// //     click2.textContent = counter2;
// // })