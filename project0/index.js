// document.getElementById("count-el").innerText = 5;

// intialze the count as 0
// listen for clicks on the increment button
// increment the count variable when buttion is clicked
// change the count-el in the html to reflect the new count.

// let cnt = 0;
// function increment(){
//     cnt++;
//     document.getElementById("count-el").innerText = cnt;
// }

let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr; // Append the current count to the existing content
    countEl.textContent = 0;
    count = 0;
}