// Algoritmo para calcular la distancia recorrida por un carro que mantenía movimiento constante.
function calcularDistancia() {
    const velocidad = document.getElementById('velocidad').value;
    const tiempo = document.getElementById('tiempo').value;
    const distancia = velocidad * tiempo;

    document.getElementById('distancia').innerHTML = distancia + " km";
}

// Algoritmo para calcular el tiempo transcurrido por un carro que mantenía movimiento constante desplazandose a un lugar.
function calcularTiempo() {
    const distancia = document.getElementById('distance').value;
    const velocidad = document.getElementById('speed').value;
    const tiempo = distancia / velocidad;

    document.getElementById('tiempo').innerHTML = tiempo + " horas";
}

// Algoritmo para calcular la velocidad a la recorria un carro que mantenía movimiento constante a cierta distancia a través del tiempo.
function calcularVelocidad() {
    const distancias = document.getElementById('distancias').value;
    const tiempoo = document.getElementById('tiempoo').value;
    const velocidad = distancias / tiempoo;

    document.getElementById('velocidad').innerHTML = velocidad + " km/h";
}

// Algoritmo visualizar la cantidad de dígitos que se le indique de la sucessión de fibonacci.
function visualizarFibonacci() {
    let digitos = document.getElementById('digitos').value;
    let fibonacci = '';
    let a = 0;
    let b = 1;
    let c = 0;
    for (let i = 0; i < digitos; i++) {
        c = a + b;
        a = b;
        b = c;
        fibonacci += c;
    }

    document.getElementById('fibonacci').innerHTML = fibonacci;
}

// Algoritmo para transformar texto en Código Morse.
function transformarMorse() {
    let texto = document.getElementById('texto').value;
    let morse = '';
    let letras = {
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--.."
    };

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto.charAt(i).toLowerCase();
        if (letras[caracter] !== undefined) {
            morse += letras[caracter] + ' ';
        }
    }

    document.getElementById('morse').innerHTML = morse;
}