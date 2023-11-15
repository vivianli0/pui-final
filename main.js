// responsive nav 
// https://stackoverflow.com/questions/37513628/check-if-scrolled-past-div-with-javascript-no-jquery

window.addEventListener('scroll', navColorChange);

let navJumps = ['nav-jump-1', 'nav-jump-2', 'nav-jump-3', 'nav-jump-4', 'nav-jump-5', 'nav-jump-6', 'nav-jump-7', 'nav-jump-8', 'nav-jump-9', 'nav-jump-10'];
let sections = ['#section-1', '#section-2', '#section-3', '#section-4', '#section-5', '#section-6', '#section-7', '#section-8', '#section-9', '#section-10'];

function navColorChange() {
    for (let i = 0; i <= 9; i++) {
        let button = document.getElementById(navJumps[i]);
        const div = document.querySelector(sections[i]);
        const offset = 110; //accounts for navbar
        const divStart = div.offsetTop - offset;
        const divEnd = div.offsetTop + div.offsetHeight - offset - 0.1;

        // console.log('section ' + (i+1) + ' starts at: ' + divStart);
        // console.log('section ' + (i+1) + ' ends at: ' + divEnd);

        if (window.scrollY > divEnd || window.scrollY < divStart) {
            button.style.backgroundColor = '';
        } else {
            button.style.backgroundColor = '#9A9A9A';
        }
    }
}

// pop-up
// https://medium.com/allenhwkim/close-div-when-clicking-outside-it-97255c20a221 

let pop = document.getElementById('pop-up-1');
let blocker = document.getElementById('blocker-1');
let button = document.getElementById('button-1');

function showPop() {
    pop.style.visibility = 'visible';
    blocker.style.visibility = 'visible';
    pop.style.zIndex = '100';
}

function hidePop() {
    pop.style.visibility = 'hidden';
    blocker.style.visibility = 'hidden';
}

button.addEventListener('click', showPop);
blocker.addEventListener('click', hidePop);