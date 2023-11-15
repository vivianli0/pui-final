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

header();

