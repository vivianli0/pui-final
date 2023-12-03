// change box content
function changeContent() {
    let container = document.querySelector("#content");
    let img = document.querySelector(".flip-card .image");
    img.style.background = "url(../assets/moon.png";
    img.style.backgroundSize = "cover";
    container.textContent = "The name of the hypothesised protoplanet is derived from the mythical Greek titan Theia /ˈθiːə/, who gave birth to the Moon goddess Selene. This designation was proposed initially by the English geochemist Alex N. Halliday in 2000 and has become accepted in the scientific community.";
}

function changeContentBack() {
    let container = document.querySelector("#content");
    let img = document.querySelector(".flip-card .image");
    img.style.background = "url(../assets/collision-to-form-moon.jpeg";
    img.style.backgroundSize = "cover";
    container.textContent = "The giant-impact hypothesis suggests that the Moon was formed from the ejecta of a collision between the early Earth and a Mars-sized planet, around 4.5 billion years ago (about 20 to 100 million years after the Solar System coalesced).";
}

let button = document.querySelector('#right-click');
let button2 = document.querySelector('#left-click');
button.addEventListener('click', changeContent);
button2.addEventListener('click', changeContentBack);