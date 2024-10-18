let resultField = document.getElementById('result'); //menampilka hasil 

function clearDisplay() {
    resultField.value = ''; // membersihkan tampilan kalkulator, dengan mengosongkan nilai value dari resultfield 
}

function deleteLast() {
    resultField.value = resultField.value.slice(0, -1);
}

function appendNumber(number) {
    resultField.value += number;
}

function appendOperator(operator) {
    resultField.value += operator;
}

function calculate() {
    try {
        resultField.value = eval(resultField.value.replace('^', '**'));
    } catch (error) {
        resultField.value = 'Error';
    }
}
