function generarOTP() {
    var caracteres = '0123456789';
    var otp = '';
    for (var i = 0; i < 6; i++) {
        otp += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    document.getElementById('otp').innerHTML = "Tu OTP es: " + otp;
}

function elementoDiferente() {
    var lista = ['a', 'a', 'b', 'c', 'c', 'd', 'e', 'e'];
    for (let i = 0; i < lista.length; i++) {
        var primero = lista[i];
        var segundo = lista[i + 1];
        if (primero != segundo) {
            document.getElementById('elemento').innerHTML = "El elemento diferente es: " + primero;
            break;
        }
    }
}

function invertirArreglo() {
    var lista = [1, 2, 3, 4, 5];
    var invertido = '';
    for (let i = lista.length - 1; i >= 0; i--) {
        invertido += lista[i];
    }
    document.getElementById('invertido').innerHTML = "El arreglo invertido es: " + invertido;
}

function palindromo() {
    var lista = ['oso', 'raya', 'ana', 'somos'];
    for (let i = 0; i < lista.length; i++) {
        var palabra = lista[i];
        var alReves = '';
        for (let j = palabra.length - 1; j >= 0; j--) {
            alReves += palabra[j];
        }
        if (alReves == palabra) {
            document.getElementById('palindromo').innerHTML = palabra + " es un palíndromo!";
        }
    }
}