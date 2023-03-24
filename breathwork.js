//breathwork.js

function getMethodIndexFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get('method'));
}

const methodIndex = getMethodIndexFromUrl();
const currentMethod = breathingMethods[methodIndex];
const circleContainer = document.querySelector('.circle-container');
const innerCircle = document.querySelector(".inner-circle");
const roundCounter = document.getElementById('round-counter');

const breathButton = document.getElementById('breath-button');
breathButton.addEventListener('click', toggleBreathing);
const breathCounter = document.getElementById('breath-counter');

let breathCount = 0;
let roundCount = 0;
let rounds = 3;
let isBreathing = false;
let currentIndex = 0;
let timeoutId;


function animateBreathingCircle(seconds, scaleValues) {
  let currentIndex = 0;

  function step() {
    if (currentIndex >= scaleValues.length) {
      currentIndex = 0;
    }
    innerCircle.style.transition = `transform ${seconds[currentIndex]}s linear`;
    innerCircle.style.transform = `translate(-50%, -50%) scale(${scaleValues[currentIndex]})`;
    currentIndex++;
    if (currentIndex % 2 === 0) {
      updateBreathCounter();
    }
    timeoutId = setTimeout(step, seconds[currentIndex - 1] * 1000);
  }
  step();
}


function startBreathing() {
  animateBreathingCircle(currentMethod.seconds, currentMethod.scales);
  breathCount = 0;
  roundCount = 1;
  isBreathing = true;
  roundCounter.textContent = `Round ${roundCount}`;
  breathButton.textContent = "Stop";
}

function stopBreathing() {
  isBreathing = false;
  breathButton.textContent = "Begin";
  clearTimeout(timeoutId);
  resetBreathingCircle();
  breathCount = 0;
  breathCounter.textContent = "";
  roundCount = 0;
  roundCounter.textContent = "";
}

function toggleBreathing() {
  if (!isBreathing) {
    startBreathing();
  } else {
    stopBreathing();
  }
}

function updateBreathCounter() {
  breathCount++;
  breathCounter.textContent = breathCount;
  if (breathCount % currentMethod.breathsPerRound === 0) {
    roundCount++;
    breathCount = 0;
    roundCounter.textContent = `Round ${roundCount}`;
    if (roundCount > rounds) {
      stopBreathing();
    }
  }
}

function resetBreathingCircle() {
  innerCircle.style.transform = `translate(-50%, -50%) scale(0.3)`;
}