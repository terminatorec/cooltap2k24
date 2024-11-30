const counter = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");
const resetButton = document.getElementById("resetButton");

let count = 0;

const buttonSound = document.getElementById('buttonSound');

// Увеличение счетчика
incrementButton.addEventListener("click", () => {
    count++;
    counter.textContent = count;
    buttonSound.play();

    // var scalar = 2;
    // var pineapple = confetti.shapeFromText({ text: '🍍', scalar });

    // var triangle = confetti.shapeFromPath({ path: 'M0 10 L5 0 L10 10z' });

    // confetti({
    // shapes: [triangle]
    // });

    // Взрыв конфетти




    // var triangle = confetti.shapeFromPath({ path: 'M0 10 L5 0 L10 10z' });


    // var pumpkin = confetti.shapeFromPath({
    //     path: 'M449.4 142c-5 0-10 .3-15 1a183 183 0 0 0-66.9-19.1V87.5a17.5 17.5 0 1 0-35 0v36.4a183 183 0 0 0-67 19c-4.9-.6-9.9-1-14.8-1C170.3 142 105 219.6 105 315s65.3 173 145.7 173c5 0 10-.3 14.8-1a184.7 184.7 0 0 0 169 0c4.9.7 9.9 1 14.9 1 80.3 0 145.6-77.6 145.6-173s-65.3-173-145.7-173zm-220 138 27.4-40.4a11.6 11.6 0 0 1 16.4-2.7l54.7 40.3a11.3 11.3 0 0 1-7 20.3H239a11.3 11.3 0 0 1-9.6-17.5zM444 383.8l-43.7 17.5a17.7 17.7 0 0 1-13 0l-37.3-15-37.2 15a17.8 17.8 0 0 1-13 0L256 383.8a17.5 17.5 0 0 1 13-32.6l37.3 15 37.2-15c4.2-1.6 8.8-1.6 13 0l37.3 15 37.2-15a17.5 17.5 0 0 1 13 32.6zm17-86.3h-82a11.3 11.3 0 0 1-6.9-20.4l54.7-40.3a11.6 11.6 0 0 1 16.4 2.8l27.4 40.4a11.3 11.3 0 0 1-9.6 17.5z',
    //     matrix: [0.020491803278688523, 0, 0, 0.020491803278688523, -7.172131147540983, -5.9016393442622945]
    //   });
    //   // tree shape from https://thenounproject.com/icon/pine-tree-1471679/
    //   var tree = confetti.shapeFromPath({
    //     path: 'M120 240c-41,14 -91,18 -120,1 29,-10 57,-22 81,-40 -18,2 -37,3 -55,-3 25,-14 48,-30 66,-51 -11,5 -26,8 -45,7 20,-14 40,-30 57,-49 -13,1 -26,2 -38,-1 18,-11 35,-25 51,-43 -13,3 -24,5 -35,6 21,-19 40,-41 53,-67 14,26 32,48 54,67 -11,-1 -23,-3 -35,-6 15,18 32,32 51,43 -13,3 -26,2 -38,1 17,19 36,35 56,49 -19,1 -33,-2 -45,-7 19,21 42,37 67,51 -19,6 -37,5 -56,3 25,18 53,30 82,40 -30,17 -79,13 -120,-1l0 41 -31 0 0 -41z',
    //     matrix: [0.03597122302158273, 0, 0, 0.03597122302158273, -4.856115107913669, -5.071942446043165]
    //   });
    //   // heart shape from https://thenounproject.com/icon/heart-1545381/
    //   var heart = confetti.shapeFromPath({
    //     path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z',
    //     matrix: [0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666, -5.533333333333333]
    //   });
      
    //   var defaults = {
    //     scalar: 2,
    //     spread: 180,
    //     particleCount: 30,
    //     origin: { y: -0.1 },
    //     startVelocity: -35
    //   };
      
    //   confetti({
    //     ...defaults,
    //     shapes: [pumpkin],
    //     colors: ['#ff9a00', '#ff7400', '#ff4d00']
    //   });
    //   confetti({
    //     ...defaults,
    //     shapes: [tree],
    //     colors: ['#8d960f', '#be0f10', '#445404']
    //   });
    //   confetti({
    //     ...defaults,
    //     shapes: [heart],
    //     colors: ['#f93963', '#a10864', '#ee0b93']
    //   });

//     var scalar = 2;
// var unicorn = confetti.shapeFromText({ text: '💩', scalar });

// var defaults = {
//   spread: 360,
//   ticks: 60,
//   gravity: 0,
//   decay: 0.96,
//   startVelocity: 20,
//   shapes: [unicorn],
//   scalar
// };


// confetti({
//     ...defaults,
//     particleCount: 30
//   });

//   confetti({
//     ...defaults,
//     particleCount: 5,
//     flat: true
//   });

//   confetti({
//     ...defaults,
//     particleCount: 15,
//   });



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
    // matrix: [0.03597122302158273, 0, 0, 0.03597122302158273, -4.856115107913669, -5.071942446043165]
  });

var defaults = {
  spread: 360,
  flat: true,
  ticks: 55,
  gravity: 2,
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
          particleCount: 20,
          scalar: scalar*2,

          shapes: [emoji],
    });


    confetti({
        ...defaults,
        origin: {
            x: Math.random(),
            y: Math.random() - 0.2
          },
          particleCount: 100,
          colors: ['#ffffff'],

          shapes: [emoji2],
    });

    

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
