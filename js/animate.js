// simple header animation
header();
function header() {
    const oceanTargets = ['.svg-header-ocean-1', '.svg-header-ocean-2'];
    // const landTargets = ['.svg-header-land-1', '.svg-header-land-2', '.svg-header-land-3', '.svg-header-land-4'];
    // const airTargets = ['.svg-header-air-1', '.svg-header-air-2', '.svg-header-air-3', '.svg-header-air-4'];

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
    // landTargets.forEach(target => animateTargets(target, 'translateY', 5));
    // airTargets.forEach(target => animateTargets(target, 'translateX', 2));
}

// stars fade in & out randomly
const allStars = document.querySelectorAll('.star');
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

// face 
let face = document.querySelector('#section-1 .face');

anime({
    targets: face,
    translateY: 10,
    rotate: 3,
    direction: 'alternate',
    easing: 'easeInOutQuad',
    duration: 1500,
    loop: true
});

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

//prokaryote 
addNoise();

function addNoise() {
    let dots = document.querySelectorAll('.prokaryote circle');
    let dotsArray = Array.from(dots).splice(1, 50);
    for (let i = 0; i < dotsArray.length; i++) {
        anime({
            targets: dotsArray[i],
            translateX: Math.random() * 30 - 15,
            translateY: Math.random() * 30 - 15,
            direction: 'alternate',
            easing: 'easeInOutQuad',
            duration: 1000,
            loop: true,
            delay: Math.random() * 1000
        });
    }
}