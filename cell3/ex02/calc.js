function agregarOperador(operador) {
    var inputCalculo = document.getElementById('numeros');
    inputCalculo.value += operador;
}

function calcularResultado() {
    var numerosInput = document.getElementById('numeros');
    var numeros = numerosInput.value;

    var operadorButtons = document.getElementsByName('operador');
    var operador;

    for (var i = 0; i < operadorButtons.length; i++) {
        if (operadorButtons[i].checked) {
            operador = operadorButtons[i].value;
            break;
        }
    }

    var resultado;

    switch (operador) {
        case 'sumar':
            resultado = sumarNumeros(numeros);
            break;
        case 'restar':
            resultado = restarNumeros(numeros);
            break;
        case 'multiplicar':
            resultado = multiplicarNumeros(numeros);
            break;
        case 'dividir':
            resultado = dividirNumeros(numeros);
            break;
        case 'porcentaje':
            resultado = porcentajeNumeros(numeros);
            break;
        default:
            alert('Selecciona un operador.');
            return;
    }

    // Mostrar el resultado en un mensaje de alerta
    alert('El resultado es: ' + resultado);
}

// ******** FUNCIONES DE LOS OPERADORES ******** //
function sumarNumeros(numeros) {
    var numerosArray = numeros.split(',');
    var suma = 0;

    for (var i = 0; i < numerosArray.length; i++) {
        var numero = parseFloat(numerosArray[i]);
        if (!isNaN(numero)) {
            suma += numero;
        }
    }
    return suma;
}

function restarNumeros(numeros) {
    // HACER EL CODIGO
}

function multiplicarNumeros(numeros) {
    // HACER EL CODIGO
}

function dividirNumeros(numeros) {
    // HACER EL CODIGO
}

function porcentajeNumeros(numeros) {
    // HACER EL CODIGO
}
