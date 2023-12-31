// responsive nav 

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

// creare a bunch of stars in the background
// specify radius & num
// in visual-container
createStars(5, 30, '#80d8ff', '.visual-container');
createStars(3, 30, '#2260dd', '.visual-container');
createStars(2, 150, 'white', '.visual-container');

function createStars(radius, num, color, location) {
    for (i = 0; i < num; i++) {
        let container = document.querySelector(location);
        let star = document.createElement('div');
        star.className = 'star';
        star.style.position = 'absolute';
        randomPosition(star);
        star.style.height = radius + 'px';
        star.style.width = radius + 'px';
        star.style.borderRadius = '50px';
        star.style.background = color;
        star.style.zIndex = '-100';
        star.style.filter = 'blur(1px)';
        container.appendChild(star);
    }
} 

function randomPosition(element) {
    let num1 = Math.random() * 90;
    let num2 = Math.random() * 100;
    element.style.top = num1 + '%';
    element.style.left = num2 + '%';
}

// snowflakes 
createSnowflakes(15);
createSnowflakes2(20);
setInterval(snowflakeFall, 10);
setInterval(snowflakeFall2, 15);

function createSnowflakes(num) {
    for (i = 0; i < num; i++) {
        if (window.innerWidth < 600) {
            console.log('small screen');
        } else {
            let container = document.querySelector('#section-7 .animation');
            let snowflake = document.createElement('img');
            snowflake.className = 'snowflake';
            snowflake.alt = 'snowflake';
            snowflake.src = 'assets/snowflake.png';
            snowflake.style.position = 'absolute';
            snowflake.style.left = Math.random() * 100 + '%';
            snowflake.style.top = Math.random() * 500 + 'px';
            snowflake.style.filter = 'opacity(' + (50 + Math.random() * 50) + '%)';
            snowflake.style.height = '40px';
            snowflake.style.width = '40px';
            snowflake.style.zIndex = '1';
            container.appendChild(snowflake);
        }
    }
}

function createSnowflakes2(num) {
    for (i = 0; i < num; i++) {
        if (window.innerWidth < 600) {
            console.log('small screen');
        } else {
            let container = document.querySelector('#section-7 .animation');
            let snowflake = document.createElement('img');
            snowflake.className = 'snowflake2';
            snowflake.alt = 'snowflake';
            snowflake.src = 'assets/snowflake.png';
            snowflake.style.position = 'absolute';
            snowflake.style.left = Math.random() * 100 + '%';
            snowflake.style.top = Math.random() * 500 + 'px';
            snowflake.style.filter = 'opacity(' + Math.random() * 100 + '%)';
            snowflake.style.height = '30px';
            snowflake.style.width = '30px';
            snowflake.style.zIndex = '-5';
            container.appendChild(snowflake);
        }
    }
} 


function snowflakeFall() {
    let snowflakes = document.querySelectorAll('.snowflake');
    for (i = 0; i < snowflakes.length; i++) {
        snowflakes[i].style.top = parseInt(snowflakes[i].style.top) + 1 + 'px';
        if (parseInt(snowflakes[i].style.top) > 600) {
            snowflakes[i].style.top = '1px';
        }
    }
}

function snowflakeFall2() {
    let snowflakes = document.querySelectorAll('.snowflake2');
    for (i = 0; i < snowflakes.length; i++) {
        snowflakes[i].style.top = parseInt(snowflakes[i].style.top) + 1.5 + 'px';
        if (parseInt(snowflakes[i].style.top) > 580) {
            snowflakes[i].style.top = '1px';
        }
    }
}

// cards alert upon click
function alertCard() {
    Swal.fire({
        text: 'The answer is... We don\'t know yet! Scientists have presented evidence that all three existed in this time range, but there is no consensus on which one was the first. Could be sponges, could be little comb jellies.',
        textColor: "white",
        icon: "question",
        showConfirmButton: false
    });
}

let card1 = document.querySelector('.cards .card-1');
let card2 = document.querySelector('.cards .card-2');
let card3 = document.querySelector('.cards .card-3');
card1.addEventListener('click', alertCard);
card2.addEventListener('click', alertCard);
card3.addEventListener('click', alertCard);


