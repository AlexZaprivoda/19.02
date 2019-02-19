// const ROOT = document.querySelector("div#root");
// const ROOT = document.querySelector("ul");
// // console.log(ROOT);
// var T = document.querySelector(".time");

// setInterval(function () {
//     var t = new Date().toLocaleTimeString();
//     T.innerHTML = t;
// }, 1000);

// function createAlert(container, text, lvl) {
//     // let el = `<div data-lvl=${lvl}>${text}</div>`;
//     // container.innerHTML += el;

//     let el = document.createElement("div");
//     el.innerText = text;

//     el.className = "alert";
//     el.style.top = "100px";
//     el.style.left = "100px";


//     container.appendChild(el);
//     setTimeout(() => {
//         container.removeChild(el);
//     }, 5000);
// }

// setTimeout(() => {
//     createAlert(ROOT, "text", 1);

// }, 5000);


// const FULL_BUBBLES = [];
// setInterval(() => {

//     function bubble(container, array) {
//         let el = document.createElement("div");
//         el.className = "bubble";

//         el.style.top = `${Math.random() * 100}vh`;
//         el.style.left = `${Math.random() * 100}vw`;
//         el.style.backgroundColor = `rgb(${Math.random() * 255}${Math.random() * 255}${Math.random() * 255})`;
//         container.appendChild(el);
//         array.push(el);

//         // setTimeout(() => {
//         //     container.removeChild(el);
//         // }, 5000);
//     }

//     bubble(ROOT, FULL_BUBBLES);

// }, 500);

// setInterval(() => {
//     // console.log(FULL_BUBBLES);
//     let lastIndex = (FULL_BUBBLES.length - 1) * Math.random();
//     for (let i = 0; i < lastIndex; i++) {
//         let el = FULL_BUBBLES.shift();
//         let p = el.parentElement;
//         p.removeChild(el);
//     }
// }, 5000);

// let i = 0;

// setInterval(() => {

//     function ul(container) {
//         let li = document.createElement("li");
//         li.innerText = Math.round(Math.random() * 100);
//         // li.innerText = i;
//         // i++;
//         container.appendChild(li);
//     }
//     ul(ROOT);

// }, 500);
// ul список с в li случайной число


function generateTestHTML() {
    let html = "<ul>";

    for (let i = 0; i < 10; i++) {
        html += `<li>${Math.round(Math.random() * 100)}</li>`;
    }

    html += "</ul>";
    root.innerHTML = html
};

generateTestHTML();

setInterval(() => {
    let i = document.querySelector("input");
    // console.log(i.value);
    let items = document.querySelectorAll("li");
    // console.log(items)
    items = Array.prototype.filter.call(items, (e) => {
        return + e.innerHTML < +i.value;
    });
    // console.log(items)
    items.forEach(e => res.appendChild(e));

    let html = "<ul>";

    for (let i = 0; i < items.length; i++) {
        html += `<li>${items[i].innerHTML}</li>`;
    }

    html += "</ul>";
    res.innerHTML = html;
}, 1000);

