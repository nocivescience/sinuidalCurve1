// Obtén el elemento canvas y su contexto
const canvas = document.getElementById('curva');
const ctx = canvas.getContext('2d');

// Define la función sinusoidal
function sinWave(x, amplitude, period, phase, verticalShift) {
    return amplitude * Math.sin(period * (x - phase)) + verticalShift;
}

// Dibuja la función sinusoidal
function drawSinWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    for(let x = 0; x < canvas.width; x++) {
        let y = sinWave(x, 100, 0.01, 0, canvas.height / 2);
        ctx.lineTo(x, y);
    }
    ctx.stroke();
}

// Llama a la función para dibujar la onda sinusoidal
drawSinWave();