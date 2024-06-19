// Calculadora simple en JavaScript

class Calculadora {
    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b === 0) {
            console.error("No se puede dividir por cero.");
            return null;
        }
        return a / b;
    }
}

// Uso de la calculadora
const calc = new Calculadora();

console.log("Suma de 5 + 3:", calc.sumar(5, 3));
console.log("Resta de 10 - 5:", calc.restar(10, 5));
console.log("Multiplicación de 4 * 7:", calc.multiplicar(4, 7));
console.log("División de 20 / 4:", calc.dividir(20, 4));
console.log("Intento de división por cero:", calc.dividir(5, 0));

const assert = require('assert');
const Calculadora = require('./path/to/Calculadora');

describe('Calculadora - Restar Tests', function() {
    let calc;

    // Instantiate the Calculadora before each test
    beforeEach(function() {
        calc = new Calculadora();
    });

    it('should subtract two positive numbers correctly', function() {
        assert.strictEqual(calc.restar(10, 5), 5);
    });

    it('should subtract two negative numbers correctly', function() {
        assert.strictEqual(calc.restar(-10, -5), -5);
    });

    it('should subtract a positive number from a negative number correctly', function() {
        assert.strictEqual(calc.restar(-5, 10), -15);
    });

    it('should subtract a negative number from a positive number correctly', function() {
        assert.strictEqual(calc.restar(5, -10), 15);
    });

    it('should subtract zero from a number correctly', function() {
        assert.strictEqual(calc.restar(10, 0), 10);
    });

    it('should subtract a number from zero correctly', function() {
        assert.strictEqual(calc.restar(0, 10), -10);
    });
});