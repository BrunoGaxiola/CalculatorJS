// Programación de la calculadora.
const display = document.getElementById("display");

// Agrega elementos a la pantalla.
function appendToDisplay(input) { display.value += input; }

// Borra la pantalla.
function clearDisplay() { display.value = ""; }

// Calcula lo que se encuentre dentro de la pantalla.
function calculate() {
    try {
        display.value = eval(display.value);
    } catch(e) {
        display.value = ""
    }
}