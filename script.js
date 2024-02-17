// Obtén el elemento canvas y su contexto
const canvas = document.getElementById('curva');
const ctx = canvas.getContext('2d');

// creacion de la clase
class Curva{
    constructor(amplitud, periodo, fase, desplazamiento){
        this.amplitud = amplitud;
        this.periodo = periodo;
        this.fase = fase;
        this.desplazamiento = desplazamiento;
    }
    // Define la función sinusoidal
    sinWave(x) {
        return this.amplitud * Math.sin(this.periodo * (x - this.fase)) + this.desplazamiento;
    }
    dibujar(){
        ctx.beginPath();
        for(let x = 0; x < canvas.width; x++) {
            let y = this.sinWave(x);
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    };
}

let curvas=[];

function linSpace(start, stop, num){
    let arr = [];
    let step = (stop-start) / (num-1);
    for(let i = 0; i < num; i++){
        arr.push(start + (step * i));
    }
    return arr;
}

function generarCurvas(){
    const arrayAmplitud = linSpace(10, 100, 5);
    const arrayPeriodo = linSpace(0.1, 1, 5);
    const arrayFase = linSpace(0, 2*Math.PI, 5);
    const arrayDesplazamiento = linSpace(0, 100, 5);
    for(let i = 0; i < 5; i++){
        curvas.push(new Curva(arrayAmplitud[i], arrayPeriodo[i], arrayFase[i], arrayDesplazamiento[i]));
    }
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < curvas.length; i++){
        curvas[i].dibujar();
    }
    requestAnimationFrame(animate);
}

// Genera las curvas y comienza la animación
generarCurvas();
animate();