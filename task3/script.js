const trafficLightEl = document.querySelector('div');

const trafficLightElUp = document.querySelector('#trafficLightUp');
const trafficLightElMiddle = document.querySelector('#trafficLightMiddle');
const trafficLightElBottom = document.querySelector('#trafficLightBottom');

function makeGreen() {
    trafficLightElBottom.style.background = ('green');

    trafficLightElUp.style.background = ('black');
    trafficLightElMiddle.style.background = ('black');

    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

 function makeYellow() {
    trafficLightElMiddle.style.background = ('yellow');

    trafficLightElUp.style.background = ('black');
    trafficLightElBottom.style.background = ('black');
     
     trafficLightEl.removeEventListener('click', makeYellow);
     trafficLightEl.addEventListener('click', makeRed);
 }

function makeRed() {
    trafficLightElUp.style.background = ('red');

    trafficLightElMiddle.style.background = ('black');
    trafficLightElBottom.style.background = ('black');

    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}


trafficLightEl.addEventListener('click', makeGreen);