const flipCard = {
    "section-1": {
        "title-1": "What about the moon?",
        "img-1": "url(assets/collision-to-form-moon.jpeg)",
        "content-1": "The giant-impact hypothesis suggests that the Moon was formed from the ejecta of a collision between the early Earth and a Mars-sized planet, around 4.5 billion years ago (about 20 to 100 million years after the Solar System coalesced). Talk about a seriously out-of-this-world birth story! 🌕✨",
        
        "title-2": "What about the moon?",
        "img-2": "url(assets/moon.png)",
        "content-2": "The name of the hypothesised protoplanet is derived from the mythical Greek titan, Theia, who gave birth to the Moon goddess Selene. This designation was proposed initially by the English geochemist Alex N. Halliday in 2000 and has become accepted in the scientific community."
    },

    "section-4": {
        "title-1": "Where did life come from?",
        "img-1":"url(assets/volcano.png)",
        "content-1": "Theory 1: Organic stuff came from lighting, volcanoes, and radiation from space. In this primordial soup, life emerged from random chance. Hmmm... I wonder what this soup tasted like. Probably spicy and bitter.",

        "title-2": "Where did life come from?",
        "img-2":"url(assets/hydrothermal-vents.jpeg)",
        "content-2": "Theory 2: Organic stuff originated from deep-sea hydrothermal vents due to the nice temperature and chemicals. Hydrothermal vents are like geysers, or hot springs, on the ocean floor.",

        "title-3": "Where did life come from?",
        "img-3":"url(assets/cold-space.png)",
        "content-3": "Theory 3: Organic stuff came from space! We are aliens and are ACTUALLY made of star stuff! 👽"
    },

    "section-9": {
        "title-1": "What kind of animals were there?",
        "img-1": "url(assets/cambrian-explosion.jpeg)",
        "content-1": "During the Cambrian Explosion, a remarkable variety of complex multicellular organisms emerged, representing many major animal phyla that we recognize today. This period saw the development of various body plans, including the first appearance of organisms with hard skeletons or shells.",

        "title-2": "Diversification of body plans",
        "img-2": "url(assets/trilobite.png)",
        "content-2": "The Cambrian Explosion witnessed the appearance of a wide array of body plans, ranging from soft-bodied organisms to those with protective exoskeletons. This diversity laid the foundation for the various body forms seen in modern animals.",

        "title-3": "Evolution of hard parts",
        "img-3": "url(assets/nautilus.jpeg)",
        "content-3": "Many organisms developed hard parts such as shells, exoskeletons, and skeletons in a process called biomineralization, possibly due to increased predation. This was a significant development as it provided protection and support for the organisms, contributing to the preservation of fossils. The chambered nautilus today is reminiscent of its Cambrian ancestor.",

        "title-4": "Strange predators",
        "img-4": "url(assets/opabinia.jpeg)",
        "content-4": "Opabinia is an extinct arthropod that lived around 505 million years ago. Its body plan and features are quite different from modern organisms; it likely occupied a niche as an active predator, using its proboscis to capture prey on the seafloor. It had five eyes and a long proboscis-like structure extending from its head. The eyes were arranged in a row along the top of its head.",
    },

    "section-10": {
        "title-1": "What happened?",
        "img-1": "url(assets/extinction.jpeg)",
        "content-1": "During the Ordovician Extinction, a series of interconnected factors disrupted the balance of marine life. Climate fluctuations, changes in sea levels, and volcanic activity contributed to a decline in oceanic oxygen levels. These environmental stressors, combined with the evolution of new species and the movement of continents, triggered widespread extinctions, particularly affecting marine invertebrates.",

        "title-2": "What happened?",
        "img-2": "url(assets/extinction.jpeg)",
        "content-2": "The extinction event primarily affected marine invertebrates, including trilobites, brachiopods, and graptolites. Many of these species, which had dominated the seas, experienced significant declines or disappeared entirely."
    }
}

// section-1
// change box content

function changeContentS1() {
    let parent = document.querySelector("#section-1");
    let container = parent.querySelector("#content");
    let img = parent.querySelector(".flip-card .image");

    img.style.background = flipCard["section-1"]["img-2"];
    img.style.backgroundSize = "cover";
    container.textContent = flipCard["section-1"]["content-2"];
}

function changeContentBackS1() {
    let parent = document.querySelector("#section-1");
    let container = parent.querySelector("#content");
    let img = parent.querySelector(".flip-card .image");

    img.style.background = flipCard["section-1"]["img-1"];
    img.style.backgroundSize = "cover";
    container.textContent = flipCard["section-1"]["content-1"];
}

buttonsS1();
function buttonsS1() {
    let parent = document.querySelector("#section-1");
    let rightButton = parent.querySelector('#right-click');
    let leftButton = parent.querySelector('#left-click');

    rightButton.addEventListener('click', changeContentS1);
    leftButton.addEventListener('click', changeContentBackS1);
}

// section-4

let counter = 0;
function changeContentS4() {
    let parent = document.querySelector("#section-4");
    let title = parent.querySelector("#title");
    let container = parent.querySelector("#content");
    let img = parent.querySelector(".flip-card .image");

    if (counter === 0) {
        title.textContent = flipCard["section-4"]["title-2"];
        container.textContent = flipCard["section-4"]["content-2"];
        img.style.background = flipCard["section-4"]["img-2"];
        img.style.backgroundSize = "cover";
        counter++;
        console.log(counter);
    } else if (counter === 1)  {
        title.textContent = flipCard["section-4"]["title-3"];
        container.textContent = flipCard["section-4"]["content-3"];
        img.style.background = flipCard["section-4"]["img-3"];
        img.style.backgroundSize = "cover";
        counter++;
        console.log(counter);
    }
}

function changeContentBackS4() {
    let parent = document.querySelector("#section-4");
    let title = parent.querySelector("#title");
    let container = parent.querySelector("#content");
    let img = parent.querySelector(".flip-card .image");

    if (counter === 2) {
        title.textContent = flipCard["section-4"]["title-2"];
        container.textContent = flipCard["section-4"]["content-2"];
        img.style.background = flipCard["section-4"]["img-2"];
        img.style.backgroundSize = "cover";
        counter--;
    } else if (counter === 1) {
        title.textContent = flipCard["section-4"]["title-1"];
        container.textContent = flipCard["section-4"]["content-1"];
        img.style.background = flipCard["section-4"]["img-1"];
        img.style.backgroundSize = "cover";
        counter--;
    }
}

buttonsS4();
function buttonsS4() {
    let parent = document.querySelector("#section-4");
    let rightButton = parent.querySelector('#right-click');
    let leftButton = parent.querySelector('#left-click');

    rightButton.addEventListener('click', changeContentS4);
    leftButton.addEventListener('click', changeContentBackS4);
}

// section-9 

let counter2 = 0;
function changeContentS9() {
    let parent = document.querySelector("#section-9");
    let title = parent.querySelector("#title");
    let container = parent.querySelector("#content");
    let img = parent.querySelector(".flip-card .image");

    if (counter2 === 0) {
        title.textContent = flipCard["section-9"]["title-2"];
        container.textContent = flipCard["section-9"]["content-2"];
        img.style.background = flipCard["section-9"]["img-2"];
        img.style.backgroundSize = "cover";
        counter2++;

    } else if (counter2 === 1)  {
        title.textContent = flipCard["section-9"]["title-3"];
        container.textContent = flipCard["section-9"]["content-3"];
        img.style.background = flipCard["section-9"]["img-3"];
        img.style.backgroundSize = "cover";
        counter2++;
      
    } else if (counter2 === 2) {
        title.textContent = flipCard["section-9"]["title-4"];
        container.textContent = flipCard["section-9"]["content-4"];
        img.style.background = flipCard["section-9"]["img-4"];
        img.style.backgroundSize = "cover";
        counter2++;
    }
}

function changeContentBackS9() {
    let parent = document.querySelector("#section-9");
    let title = parent.querySelector("#title");
    let container = parent.querySelector("#content");
    let img = parent.querySelector(".flip-card .image");

    if (counter2 === 3) {
        title.textContent = flipCard["section-9"]["title-3"];
        container.textContent = flipCard["section-9"]["content-3"];
        img.style.background = flipCard["section-9"]["img-3"];
        img.style.backgroundSize = "cover";
        counter2--;

    } else if (counter2 === 2) {
        title.textContent = flipCard["section-9"]["title-2"];
        container.textContent = flipCard["section-9"]["content-2"];
        img.style.background = flipCard["section-9"]["img-2"];
        img.style.backgroundSize = "cover";
        counter2--;

    } else if (counter2 === 1) {
        title.textContent = flipCard["section-9"]["title-1"];
        container.textContent = flipCard["section-9"]["content-1"];
        img.style.background = flipCard["section-9"]["img-1"];
        img.style.backgroundSize = "cover";
        counter2--;
    }
}

buttonsS9();
function buttonsS9() {
    let parent = document.querySelector("#section-9");
    let rightButton = parent.querySelector('#right-click');
    let leftButton = parent.querySelector('#left-click');

    rightButton.addEventListener('click', changeContentS9);
    leftButton.addEventListener('click', changeContentBackS9);
}

// section-10

function changeContentS10() {
    let parent = document.querySelector("#section-10");
    let container = parent.querySelector("#content");
    let img = parent.querySelector(".flip-card .image");

    img.style.background = flipCard["section-10"]["img-2"];
    img.style.backgroundSize = "cover";
    container.textContent = flipCard["section-10"]["content-2"];
}

function changeContentBackS10() {
    let parent = document.querySelector("#section-10");
    let container = parent.querySelector("#content");
    let img = parent.querySelector(".flip-card .image");

    img.style.background = flipCard["section-10"]["img-1"];
    img.style.backgroundSize = "cover";
    container.textContent = flipCard["section-10"]["content-1"];
}

buttonsS10();
function buttonsS10() {
    let parent = document.querySelector("#section-10");
    let rightButton = parent.querySelector('#right-click');
    let leftButton = parent.querySelector('#left-click');

    rightButton.addEventListener('click', changeContentS10);
    leftButton.addEventListener('click', changeContentBackS10);
}