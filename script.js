// Obtén el elemento canvas y su contexto
const canvas = document.getElementById('curva');
const ctx = canvas.getContext('2d');

// Configura el tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define la función sinusoidal
function sinWave(x, amplitude, period, phase, verticalShift) {
    return amplitude * Math.sin(period * (x - phase)) + verticalShift;
}

// Define la variable de cambio de fase
let dx = 0;

// Dibuja la función sinusoidal
function drawSinWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    for(let x = 0; x < canvas.width; x++) {
        let y = sinWave(x, 100, 0.01, dx, canvas.height / 2);
        ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Incrementa la fase
    dx += 1;

    // Solicita el próximo cuadro
    requestAnimationFrame(drawSinWave);
}

// Llama a la función para dibujar la onda sinusoidal
drawSinWave();