/* Realizar un programa en Java script que defina la clase Complejo para sumar, restar y multiplicar numeros complejos */

class Complejo {

    constructor(num_real, num_imaginario) {
        this.num_real = num_real;
        this.num_imaginario = num_imaginario;
    }

    sumar_Complejo(num_complex) {
        const real = this.num_real + num_complex.num_real;
        const imaginario = this.num_imaginario + num_complex.num_imaginario;
        return new Complejo(real, imaginario);
    }

    restar_Complejo(num_complex) {
        const real = this.num_real - num_complex.num_real;
        const imaginario = this.num_imaginario - num_complex.num_imaginario;
        return new Complejo(real, imaginario);
    }

    multiplicar_Complejo(num_complex) {
        const real = this.num_real * num_complex.num_real - this.num_imaginario * num_complex.num_imaginario;
        const imaginario = this.num_real * num_complex.num_imaginario + this.num_imaginario * num_complex.num_real;
        return new Complejo(real, imaginario);
    }

    dividir_Complejo(num_complex){
        const div = Math.pow(num_complex.num_real, 2) + Math.pow(num_complex.num_imaginario, 2);
        const real = (this.num_real * num_complex.num_real + this.num_imaginario * num_complex.num_imaginario)/div;
        const imaginario = (this.num_imaginario * num_complex.num_real - this.num_real * num_complex.num_imaginario)/div;
        return new Complejo(real, imaginario);
    }

    toString(){
        if (this.num_imaginario >= 0){
            return `${this.num_real} + ${this.num_imaginario}i`;
        } else{
            return `${this.num_real} - ${Math.abs(this.num_imaginario)}i`;
        }
    }
}

// Realizamos las instancias
const num_complejo1 = new Complejo(5, 3); 
const num_complejo2 = new Complejo(-2, 4)

const suma = num_complejo1.sumar_Complejo(num_complejo2);
const resta = num_complejo1.restar_Complejo(num_complejo2);
const multiplicar = num_complejo1.multiplicar_Complejo(num_complejo2);
const dividir = num_complejo1.dividir_Complejo(num_complejo2);

console.log("Gonzales Suyo Franz Reinaldo LAB-3 SIS324")
console.log(`Los números complejos a aplicar son: ${num_complejo1} y ${num_complejo2}`);
console.log(`Aplicando la Suma: ${suma}`);
console.log(`Aplicando la Resta: ${resta}`);
console.log(`Aplicando la Multiplicación: ${multiplicar}`);
console.log(`Aplicando la División: ${dividir}`);