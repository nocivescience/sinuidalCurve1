// Obtén el elemento canvas y su contexto
const canvas = document.getElementById('curva');
const ctx = canvas.getContext('2d');
let face=0;

// creacion de la clase
class Curva{
    constructor(funcion, dx = 0){
        this.funcion = funcion;
        this.dx = dx;
    }
    dibujar(){
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
            let y = this.funcion(x, this.dx);
            ctx.strokeStyle = 'white';
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
    incrementarFase(){
        this.dx += 0.01;
    }
}

const funcionesSinuidales = [
    // tus funciones aquíconst funcionesSinuidales = [
    (x,dx) => 100 * Math.sin(.05*x+dx)+300,
    (x,dx) => 100 * Math.cos(.01*x+dx)+300+100*Math.sin(.05*x+dx),
    (x,dx) => 100 * Math.sin(.03*x+dx)+300+100*Math.cos(.02*x+dx),
    (x,dx) => 100 * Math.cos(.06*x+dx)+300+100*Math.sin(.02*x+dx),
    (x,dx) => 100 * Math.sin(.04*x+dx)+300+100*Math.cos(.07*x+dx),
    (x,dx) => 100 * Math.cos(.08*x+dx)+100+100*Math.sin(.01*x+dx),
    (x,dx) => 100 * Math.sin(.09*x+dx)+300+100*Math.cos(.09*x+dx),
    (x,dx) => 100 * Math.sin(.07*x+dx)+300+100*Math.cos(.01*x+dx)+100*Math.sin(.07*x+dx),
    (x,dx) => 100 * Math.cos(.04*x+dx)+300+100*Math.sin(.03*x+dx)+100*Math.cos(.04*x+dx),
    (x,dx) => 100 * Math.sin(.02*x+dx)+300+100*Math.cos(.06*x+dx)+100*Math.sin(.02*x+dx),
    (x,dx) => 100 * Math.cos(.03*x+dx)+300+100*Math.sin(.09*x+dx)+100*Math.cos(.03*x+dx),
    (x,dx) => 100 * Math.sin(.05*x+dx)+300+100*Math.cos(.08*x+dx)+100*Math.sin(.05*x+dx),
    (x,dx) => 100 * Math.cos(.01*x+dx)+300+100*Math.sin(.08*x+dx)+100*Math.cos(.02*x+dx)+40*Math.sin(.05*x+dx),
    (x,dx) => 100 * Math.sin(.09*x+dx)+300+100*Math.cos(.02*x+dx)+100*Math.sin(.09*x+dx)+40*Math.cos(.05*x+dx),
    (x,dx) => 100 * Math.cos(.01*x+dx)+300+100*Math.sin(.05*x+dx)+100*Math.cos(.05*x+dx)+40*Math.sin(.05*x+dx),
    (x,dx) => 100 * Math.sin(.05*x+dx)+300+100*Math.cos(.03*x+dx)+100*Math.sin(.01*x+dx)+40*Math.cos(.05*x+dx),
];

let curvas = [];

function generarCurvas(){
    curvas = [];
    for (let i = 0; i < funcionesSinuidales.length; i++) {
        face+=.01;
        curvas.push(new Curva(funcionesSinuidales[i],face));
    }
}

function dibujarCurvas(){
    for (let i = 0; i < curvas.length; i++) {
        curvas[i].dibujar();
        curvas[i].incrementarFase();
    }
    // Llena el canvas con un color semi-transparente
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function animate(){
    generarCurvas();
    dibujarCurvas();
    requestAnimationFrame(animate);
}

// Comienza la animación
animate();