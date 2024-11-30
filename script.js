const counter = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");
const resetButton = document.getElementById("resetButton");

let count = 0;

// const buttonSound = document.getElementById('buttonSound');

const buttonSound = new Audio("buttonSound.mp3");

// Увеличение счетчика
incrementButton.addEventListener("click", () => {
    if (!buttonSound.paused) {
        buttonSound.pause();  // Остановить звук
        buttonSound.currentTime = 0;  // Вернуть начало звука
      }
    count++;
    counter.textContent = count;
    buttonSound.play();

    



var scalar = 2;
const emojiList = ['👁', '❄️', '🔪','💔'];

function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojiList.length);
    return emojiList[randomIndex];
}
var emoji = confetti.shapeFromText({ text: getRandomEmoji(), scalar });
// var emoji2 = confetti.shapeFromText({ text: getRandomEmoji(), scalar });
// var emoji2 = confetti.shapeFromText({ text: getRandomEmoji(), scalar });

var emoji2 = confetti.shapeFromPath({
    path: 'M288.46 166.67c-34.98,-14.63 -94.84,-48.98 -121.79,-119.55 -26.95,70.56 -86.81,104.92 -121.79,119.55 34.98,14.63 94.84,48.98 121.79,119.55 26.95,-70.56 86.81,-104.92 121.79,-119.55zm-112.44 -155.61c23.36,115.57 139.09,145.17 143.7,146.31 3.41,0.78 6.25,3.41 7.14,7.03 1.26,5.12 -1.87,10.29 -6.99,11.55 -0.35,0.08 -120,28.58 -143.83,146.27 -0.71,3.69 -3.58,6.77 -7.49,7.55 -5.16,1.03 -10.19,-2.31 -11.22,-7.48 -23.36,-115.57 -139.09,-145.17 -143.7,-146.31 -3.41,-0.78 -6.25,-3.41 -7.14,-7.03 -1.26,-5.12 1.87,-10.29 6.99,-11.55 0.35,-0.08 120,-28.58 143.83,-146.27 0.71,-3.69 3.58,-6.77 7.49,-7.55 5.16,-1.03 10.19,2.31 11.22,7.48z',
  });

var defaults = {
  spread: 360,
  flat: true,
  ticks: 55,
  gravity: 3,
  decay: 0.96,
  startVelocity: 20,
//   shapes: [emoji],
  scalar
};


    confetti({
        ...defaults,
        origin: {
            x: Math.random(),
            y: Math.random() - 0.2
          },
          particleCount: 10,
          scalar: scalar*2,
          colors: ['#ffffff'],

          shapes: [emoji2],
    });


    confetti({
        ...defaults,
        origin: {
            x: Math.random(),
            y: Math.random() - 0.2
          },
          particleCount: 20,
          colors: ['#ffffff'],

          shapes: [emoji2],
    });

    // buttonSound.play();

    

    // Добавляем тряску с использованием Animate.css
    incrementButton.classList.add("animate__animated", "animate__pulse");
    incrementButton.addEventListener("animationend", () => {
        incrementButton.classList.remove("animate__animated", "animate__pulse");
    }, { once: true });
});




// Сброс счетчика
// resetButton.addEventListener("click", () => {
//     count = 0;
//     counter.textContent = count;
// });
