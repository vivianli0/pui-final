////////////////////////// header ////////////////////////////
// simple header animation
header();
function header() {
    const oceanTargets = ['.ocean-1', '.ocean-2'];

    const animateTargets = (targets, property, value) => {
        anime({
            targets,
            [property]: value,
            duration: 1000,
            loop: true,
            direction: 'alternate',
            easing: 'linear'
        })
    }

    oceanTargets.forEach(target => animateTargets(target, 'translateX', 10));
}

// stars fade in & out randomly
const allStars = document.querySelectorAll('.visual-container .star');
const selectStars = Array.from(allStars).slice(0, 200);
for (let i = 0; i < selectStars.length; i++) {
    anime ({
        targets: selectStars[i],
        opacity: [
            { duration: 700, value: "0" },
            { duration: 700, value: "1" }
        ],
        easing: 'linear',
        loop: true,
        delay: Math.random() * 1000
    });
}


//////////////////////////// baby earth ////////////////////////////
//asteroid 
// asteroid();

// console.log(window.innerWidth);

// function asteroid() {
//     let asteroid = document.querySelectorAll('#section-1 .asteroid');
//     if (window.innerWidth < 500) {
//         console.log('small screen');
//         anime({
//             targets: asteroid,
//             keyframes: [
//                 {translateX: 300, translateY: 300, opacity: 0},
//             ],
//             easing: 'easeInOutQuad',
//             duration: 2000,
//             loop: true,
//             delay: 500
//         })
//     } else {
//         anime({
//         targets: asteroid,
//         keyframes: [
//             {translateX: 600, translateY: 600, opacity: 0},
//         ],
//         easing: 'easeInOutQuad',
//         duration: 2000,
//         loop: true,
//         delay: 500
//         });
//     }
// }

// face 

const allS1Stars = document.querySelectorAll('#section-1 .star');
for (let i = 0; i < allS1Stars.length; i++) {
    anime ({
        targets: allS1Stars[i],
        opacity: [
            { duration: 900, value: "0" },
            { duration: 900, value: "1" }
        ],
        easing: 'linear',
        loop: true,
        delay: Math.random() * 1000
    });
}

//face
face();

function face() {
    let face = document.querySelectorAll('#section-1 .face');
    anime({
        targets: face,
        translateX: 5,
        rotate: 1,
        direction: 'alternate',
        easing: 'easeInOutQuad',
        duration: 1500,
        loop: true
    });
}

// sun glow
expandingSun();

function expandingSun() {
    anime({
        targets: '.dark-red-bg-glow',
        opacity: 0.5,
        easing: 'easeInOutQuad',
        duration: 1000,
        loop: true
    });

    anime({
        targets: '.red-bg-glow',
        opacity: 0.7,
        easing: 'easeInOutQuad',
        duration: 1000,
        loop: true, 
        delay: Math.random() * 1000
    })
}


//flowing lava
let paths = ['lava-1', 'lava-2', 'lava-3', 'lava-4', 'lava-5', 'lava-6', 'lava-7', 'lava-8']
loopFlowingLava();

function loopFlowingLava() {
    for (let i = 0; i < paths.length; i++) {
        flowingLava(i);
    }
}

//loop thru paths 
//one path animated while others are static
function flowingLava(i) {
    let path = document.getElementById(paths[i]);
    let length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    anime({
        targets: path,
        keyframes: [
            {strokeDashoffset: 0},
            {strokeDashoffset: 0},
            {opacity:0}
        ],
        duration: 2000,
        easing: 'linear',
        loop: true,
        delay: i * 100
    });
}


//////////////////////////// molten earth ////////////////////////////
// blowing steam one by one 

let steams = ['steam-1', 'steam-2', 'steam-3', 'steam-4', 'steam-5']

blowingSteam();

function blowingSteam() {
    for (let i = 0; i < steams.length; i++) {
        let steam = document.getElementsByClassName(steams[i]);
        anime({
            targets: steam,
            keyframes: [
                {opacity: 0.5, duration: 800, translateY: -20},
                {opacity: 0, duration: (4 - i) * 300}
            ],
            easing: 'easeInOutQuad',
            loop: true,
            delay: i * 300
        });
        console.log('steam ' + i + ' is animated');
    }
}


//////////////////////////// water earth ////////////////////////////
// move clouds 
clouds();

function clouds() {
    let clouds = document.querySelectorAll('.cloud');
    anime({
        targets: clouds,
        translateY: 20,
        direction: 'alternate',
        easing: 'easeInOutQuad',
        duration: 1500,
        loop: true
    });
}

//////////////////////////// prokaryote //////////////////////////// 
addNoise();

function addNoise() {
    let dots = document.querySelectorAll('.prokaryote circle');
    let dotsArray = Array.from(dots).splice(1, 50);
    for (let i = 0; i < dotsArray.length; i++) {
        anime({
            targets: dotsArray[i],
            translateX: Math.random() * 40 - 20,
            translateY: Math.random() * 40 - 20,
            direction: 'alternate',
            easing: 'easeInOutQuad',
            duration: 1000,
            loop: true,
            delay: Math.random() * 1000
        });
    }
}


//////////////////////////// eukaryote //////////////////////////// 

animateEPath();
function animateEPath() {
    let e = document.querySelectorAll('.e-path');
    anime({
        targets: e,
        translateX: 15,
        rotate: 3,
        easing: 'easeInOutQuad',
        duration: 1200,
        loop: true,
        direction: 'alternate'
    })
}

animateEDot();
function animateEDot() {
    let e = document.querySelectorAll('.e-dot');
    let eArray = Array.from(e);
    for (i = 0; i < eArray.length; i++) {
        anime({
            targets: eArray[i],
            opacity: 0,
            easing: 'easeInOutQuad',
            duration: 800,
            loop: true,
            direction: 'alternate',
            delay: Math.random() * 500
        })
    }
}

//////////////////////////// plant cells //////////////////////////// 

blowBubbles();
function blowBubbles() {
    let bubbles = document.querySelectorAll('.cyano-bubble');
    anime({
        targets: bubbles,
        opacity: 0.5,
        translateY: -5,
        easing: 'easeInOutQuad',
        duration: 1000,
        loop: true,
        direction: 'alternate'
    })
}

disappearDots();
function disappearDots() {
    let dots = document.querySelectorAll('.bg-yellow-dot');
    let dotsArray = Array.from(dots);
    for (i = 0; i < dotsArray.length; i++) {
        anime({
            targets: dotsArray[i],
            opacity: 0,
            easing: 'easeInOutQuad',
            duration: 1000,
            loop: true,
            direction: 'alternate',
            delay: Math.random() * 500
        })
    }
}

moveDots();
function moveDots() {
    let dots = document.querySelectorAll('.cyano-dot');
    let dotsArray = Array.from(dots);
    for (i = 0; i < dotsArray.length; i++) {
        anime({
            targets: dotsArray[i],
            translateX: Math.random() * 20 - 10,
            translateY: Math.random() * 20 - 10,
            easing: 'easeInOutQuad',
            duration: 1000,
            loop: true,
            direction: 'alternate',
            delay: Math.random() * 500
        })
    }
}