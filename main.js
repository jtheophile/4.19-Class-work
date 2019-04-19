// select cat image
const shelly = document.getElementById("shelly").addEventListener("click", displayDate);

const belly = document.getElementById("belly").addEventListener("click", displayDate);
// counter for counting clicks
let counter = 0;

// select the span with id click
const click = document.querySelector("#click");

// set counter into click
click.textContent = counter;

// add click event on cat image
shelly.addEventListener("click", ()=>{
    counter++;
    click.textContent = counter;
})