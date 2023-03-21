const morseInput = document.getElementById("morse-input");
const morseBtn = document.getElementById("morse-btn");
const morseOutput = document.getElementById("morse-output");

morseBtn.addEventListener("click", () => {
    const input = morseInput.value.trim();
    const morseArray = input.split(" ");
    let output = "";
    morseArray.forEach(morse => {
        switch (morse) {
            case ".-":
                output += "A";
                break;
            case "-...":
                output += "B";
                break;
            case "-.-.":
                output += "C";
                break;
            case "-..":
                output += "D";
                break;
            case ".":
                output += "E";
                break;
            case "..-.":
                output += "F";
                break;
            case "--.":
                output += "G";
                break;
            case "....":
                output += "H";
                break;
            case "..":
                output += "I";
                break;
            case ".---":
                output += "J";
                break;
            case "-.-":
                output += "K";
                break;
            case ".-..":
                output += "L";
                break;
            case "--":
                output += "M";
                break;
            case "-.":
                output += "N";
                break;
            case "---":
                output += "O";
                break;
            case ".--.":
                output += "P";
                break;
            case "--.-":
                output += "Q";
                break;
            case ".-.":
                output += "R";
                break;
            case "...":
                output += "S";
                break;
            case "-":
                output += "T";
                break;
            case "..-":
                output += "U";
                break;
            case "...-":
                output += "V";
                break;
            case ".--":
                output += "W";
                break;
            case "-..-":
                output += "X";
                break;
            case "-.--":
                output += "Y";
                break;
            case "--..":
                output += "Z";
                break;
            case "/":
                output += " ";
        }
    });
    morseOutput.innerText = output;
});

const cesarInput = document.getElementById("cesar-input");
const cesarKey = document.getElementById("cesar-key");
const cesarEncryptBtn = document.getElementById("cesar-encrypt-btn");
const cesarOutput = document.getElementById("cesar-output");

cesarEncryptBtn.addEventListener("click", () => {
    const input = cesarInput.value.toUpperCase().trim();
    let output = "";
    for (let i = 0; i < input.length; i++) {
        let code = input.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            code += parseInt(cesarKey.value);
            if (code > 90) {
                code -= 26;
            }
        }
        output += String.fromCharCode(code);
    }
    cesarOutput.innerText = output;
});

const cesarDecryptInput = document.getElementById("cesar-decrypt-input");
const cesarDecryptKey = document.getElementById("cesar-decrypt-key");
const cesarDecryptBtn = document.getElementById("cesar-decrypt-btn");
const cesarDecryptOutput = document.getElementById("cesar-decrypt-output");

cesarDecryptBtn.addEventListener("click", () => {
    const input = cesarDecryptInput.value.toUpperCase().trim();
    let output = "";
    for (let i = 0; i < input.length; i++) {
        let code = input.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            code -= parseInt(cesarDecryptKey.value);
            if (code < 65) {
                code += 26;
            }
        }
        output += String.fromCharCode(code);
    }
    cesarDecryptOutput.innerText = output;
});

const medianInput = document.getElementById("median-input");
const medianBtn = document.getElementById("median-btn");
const medianOutput = document.getElementById("median-output");

medianBtn.addEventListener("click", () => {
    const input = medianInput.value.trim();
    const numbers = input.split(",").map(Number);
    numbers.sort(function(a, b) { return a - b; });
    let median;
    if (numbers.length % 2 === 0) {
        median = (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
    } else {
        median = numbers[(numbers.length - 1) / 2];
    }
    medianOutput.innerText = median;
});

const averageInput = document.getElementById("average-input");
const averageBtn = document.getElementById("average-btn");
const averageOutput = document.getElementById("average-output");

averageBtn.addEventListener("click", () => {
    const input = averageInput.value.trim();
    const numbers = input.split(",").map(Number);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length;
    averageOutput.innerText = average;
});