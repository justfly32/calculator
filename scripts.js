function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText.replace('×', '*').replace('÷', '/'));
    } catch {
        display.innerText = 'Error';
    }
}

function calculateFunction(func) {
    const display = document.getElementById('display');
    let value = parseFloat(display.innerText);

    switch (func) {
        case 'sin':
            value = Math.sin(value);
            break;
        case 'cos':
            value = Math.cos(value);
            break;
        case 'tan':
            value = Math.tan(value);
            break;
        case 'log':
            value = Math.log10(value);
            break;
        case 'sqrt':
            value = Math.sqrt(value);
            break;
        case 'pow':
            value = Math.pow(value, 2);
            break;
        default:
            value = 'Error';
    }

    display.innerText = value.toString();
}
