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
// select all & put into array
// only animate a chunk of the array
// call on array through DOM

// let starsArray = [];
// let animateStarsArray = [];
// getStarsArray();

// function getStarsArray() {
//     let stars = document.querySelectorAll('.star');
//     starsArray = [...stars];
//     for (i = 0; i < 50; i++) {
//         animateStarsArray({
//             targets: documstarsArray[i],
//             opacity: 0,
//             duration: 1000,
//             loop: true,
//             direction: 'alternate',
//             easing: 'linear'
//         })
//     }
// }

// Select all divs with the specified class
var allDivs = document.querySelectorAll('.your-class'); // Replace 'your-class' with your actual class

// Convert the NodeList to an array and slice the first 70 elements
var first70Divs = Array.from(allDivs).slice(0, 70);

// Modify properties of the first 70 divs
first70Divs.forEach(function(div, index) {
  // Modify the properties of each div as needed
  div.style.backgroundColor = 'blue'; // For example, set the background color to blue
  div.textContent = 'Modified ' + (index + 1); // Change the text content
  // Add more property modifications as needed
});

// Alternatively, using a for loop
// for (var i = 0; i < first70Divs.length; i++) {
//   first70Divs[i].style.backgroundColor = 'blue';
//   // Add more property modifications as needed
// }



