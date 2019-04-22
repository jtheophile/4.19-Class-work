const cat1 = {
    name: "Billy",
    picture: "cat1.jpg",
    clicks: 0
}

const cat2 = {
    name: "Bob",
    picture:"cat2.jpg",
    clicks: 0
}

const cat1Container = document.querySelector('#cat-1');
const cat2Container = document.querySelector('#cat-2');

//add cat names
const cat1Name = document.createElement("h1");
cat1Name.textContent= cat1.name;
cat1Container.appendChild(cat1Name);

const cat2Name= document.createElement("h1");
cat2Name.textContent = cat2.name;
cat2Container.appendChild(cat2Name);

// add cat images
const cat1Image = document.createElement("img");
cat1Image.setAttribute("src", cat1.picture);
cat1Image.setAttribute("alt", "pic of cat");
cat1Container.appendChild(cat1Image);

const cat2Image = document.createElement("img");
cat2Image.setAttribute("src", cat2.picture);
cat2Image.setAttribute("alt", "picture of cat");
cat2Container.appendChild(cat2Image);

// add cat click counters
const cat1Counter = document.createElement("h1");
cat1Counter.textContent = `Clicks: ${cat1.clicks}`;
cat1Container.appendChild(cat1Counter);

const cat2Counter = document.createElement("h1");
cat2Counter.textContent = `Clicks: ${cat2.clicks}`;
cat2Container.appendChild(cat2Counter);


// add cat image event listeners
cat1Image.addEventListener("click", ()=>{
    cat1.clicks++;
    cat1Counter.textContent = `Clicks: ${cat1.clicks}`;
})

cat2Image.addEventListener("click", ()=>{
    cat2.clicks++;
    cat2Counter.textContent = `Clicks: ${cat2.clicks}`;
})



















// // select cat image
// const cat1 = document.querySelector("#cat1-img");
// // counter for counting clicks
// let counter1 = 0;

// // select the span with id click
// const click1 = document.querySelector("#click1");

// // set counter into click
// click1.textContent = counter1;

// // add click event on cat image
// cat1.addEventListener("click1", ()=>{
//     counter1++;
//     click1.textContent = counter1;
// })



// // select cat image #2
// const cat2 = document.querySelector("#cat2-img");
// // counter for counting clicks
// let counter2 = 0;

// // select the span with id click
// const click2 = document.querySelector("#click2");

// // set counter into click
// click2.textContent = counter2;

// // add click event on cat image
// cat2.addEventListener("click2", ()=>{
//     counter2++;
//     click2.textContent = counter2;
// })