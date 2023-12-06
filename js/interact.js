// change box content
function changeContent() {
    let container = document.querySelector("#content");
    let img = document.querySelector(".flip-card .image");
    img.style.background = flipCard["section-1"]["img-2"];
    img.style.backgroundSize = "cover";
    console.log(img);
    container.textContent = flipCard["section-1"]["content-2"];
}

function changeContentBack() {
    let container = document.querySelector("#content");
    let img = document.querySelector(".flip-card .image");
    img.style.background = flipCard["section-1"]["img-2"];
    img.style.backgroundSize = "cover";
    container.textContent = flipCard["section-1"]["content-1"];
}

let button = document.querySelector('#right-click');
let button2 = document.querySelector('#left-click');
let button3 = document.querySelector('#left-click-mobile');
button.addEventListener('click', changeContent);
button2.addEventListener('click', changeContentBack);
button3.addEventListener('click', changeContentBack);

