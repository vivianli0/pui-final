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
const selectStars = Array.from(allStars).slice(0, 90);
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



