const counter = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");
const resetButton = document.getElementById("resetButton");

let count = 0;

// Увеличение счетчика
incrementButton.addEventListener("click", () => {
    count++;
    counter.textContent = count;

    // var scalar = 2;
    // var pineapple = confetti.shapeFromText({ text: '🍍', scalar });

    // var triangle = confetti.shapeFromPath({ path: 'M0 10 L5 0 L10 10z' });

    // confetti({
    // shapes: [triangle]
    // });

    // Взрыв конфетти
    confetti({
        particleCount: 200,
        origin: {
            x: Math.random(),
            // since they fall down, start a bit higher than random
            y: Math.random() - 0.2
          },
        spread: 360,
        ticks:55,
        startVelocity:25,
        // angle: 20,
        // shapes: pineapple,
        // shapes: [triangle]
        
    });

    confetti({
        particleCount: 200,
        origin: {
            x: Math.random(),
            // since they fall down, start a bit higher than random
            y: Math.random() - 0.2
          },
        spread: 360,
        ticks:55,
        startVelocity:25,
        // angle:160,
        // shapes: pineapple,
        
    });

    

    // Добавляем тряску с использованием Animate.css
    incrementButton.classList.add("animate__animated", "animate__pulse");
    incrementButton.addEventListener("animationend", () => {
        incrementButton.classList.remove("animate__animated", "animate__pulse");
    }, { once: true });
});




// Сброс счетчика
resetButton.addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
});
