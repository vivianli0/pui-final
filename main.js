// get button, get a range, color changes within that range
function navColorChange() {
    let button = document.getElementById('nav-jump-1');
    let location = window.scrollY;
    if (location >= 1048.5 && location <= 1650) {
        button.style.backgroundColor = 'grey';
    } else {
        button.style.backgroundColor = '';
    }
}

window.addEventListener('scroll', navColorChange);

// for loop for applying behavior to all nav jumps?
// i = 1; i <= 10; i++
// "nav-jump-" + i
// location + 602 each loop

