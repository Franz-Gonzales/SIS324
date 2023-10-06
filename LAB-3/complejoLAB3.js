/* Realizar un programa en Java script que defina la clase Complejo para sumar, restar y multiplicar numeros complejos */

class Complejo{
    
    constructor(real, imaginario){
        this.real = real;
        this.imaginario = imaginario;
    }

    sumar_Complejo(new_imaginario){
        let result = new Complejo(0, 0);
        result.real = this.real + new_imaginario.real;
        result.imaginario = this.imaginario + new_imaginario.imaginario;
        return result;
    }

    restar_Complejo(new_imaginario){
        let result = new Complejo(0, 0);
        result.real = this.real - new_imaginario.real;
        result.imaginario = this.imaginario - new_imaginario.imaginario;
        return result;
    }

    multiplicar_Complejo(new_imaginario){
        let result = new Complejo(0, 0);
        result.real = (this.real * new_imaginario.real) - (this.imaginario * new_imaginario.imaginario);
        result.imaginario = (this.real * new_imaginario.imaginario) + (this.imaginario * new_imaginario.real);
        return result;
    }

    dividir_Complejo(new_imaginario){
        let result = new Complejo(0, 0);
        const div_compl = Math.pow(new_imaginario.real, 2) + Math.pow(new_imaginario.imaginario, 2);
        result.real = (this.real * new_imaginario.real + this.imaginario * new_imaginario.imaginario) / div_compl;
        result.imaginario = (this.imaginario * new_imaginario.real - this.real * new_imaginario.imaginario) / div_compl;
        return result;
    }

    toString(){
        let string = this.real + " ";
        if(this.imaginario >= 0) string += "+ ";
            string += this.imaginario + "i";
        return string;
    }

    // Funcion toComplejo
    static toComplejo(cadena_complejo){


        const _complejo = cadena_complejo.split('+');
        
        if(_complejo.length !== 2){
            throw new Error('La cadena no representa a un número complejo');
        }

        const real = parseFloat(_complejo[0]);
        const imaginario = parseFloat(_complejo[1].replace('i', '').trim());

        if(isNaN(real) || isNaN(imaginario)){
            throw new Error('La cadena no representa a un número complejo');
        }
        return new Complejo(real, imaginario);


        // const complejo = cadena_complejo.match(/(-?\d+\.?\d*)\s*([-+])\s*(\d+\.?\d*)i/);

        // if(!complejo){
        //     throw new Error('La cadena no representa a un número complejo');
        // }

        // const real = parseFloat(complejo[1]);
        // const signo_i = complejo[2] === '-' ? -1 : 1;
        // const imaginario = parseFloat(complejo[3]) * signo_i;
        // return new Complejo(real, imaginario);





        // Divide la cadena en partes para obtener la parte real e imaginaria
        // const complejo = cadena_complejo.split('+');

        // if(complejo.length !== 2){
        //     throw new Error('La cadena no representa a un número complejo');
        // }

        // const real = parseFloat(complejo[0]);
        // const num_imaginario = parseFloat(complejo[1].trim()); //Elimina los espacios en blanco

        // // Verifica si la parte imaginaria es "i" o "i" con el signo "-"
        // if(num_imaginario.endsWith('i')){
        //     const imaginario = parseFloat(num_imaginario);
        //     return new Complejo(real, imaginario);
        // }else{
        //     if(num_imaginario.endsWich('-i')){
        //         const imaginario = - parseFloat(num_imaginario.slice(0, -1)); // Elimina el "i" y agrega el signo "-"
        //         return new Complejo(real, -imaginario);
        //     }else{
        //         throw new Error('La cadena no representa a un número complejo');
        //     }
        // }
    }
}

const complejo1 = new Complejo(5, 3);
const complejo2 = new Complejo(-2, 4);

const suma = complejo1.sumar_Complejo(complejo2);
const resta = complejo1.restar_Complejo(complejo2);
const multiplicar = complejo1.multiplicar_Complejo(complejo2);
const dividir = complejo1.dividir_Complejo(complejo2);

const numero_complejo1 = Complejo.toComplejo(complejo1.toString());
const numero_complejo2 = Complejo.toComplejo(complejo2.toString());


console.log("Gonzales Suyo Franz Reinaldo");
console.log("LAB-3 SIS324 GL-1")
console.log("\n");

// console.log("Complejo 1 en forma de cadena: " + complejo1.toString());
// console.log("Complejo 2 en forma de cadena: " + complejo2.toString());

// // Convierte las cadenas nuevamente en objetos Complejo
// const cadenaComplejo1 = complejo1.toString();
// const cadenaComplejo2 = complejo2.toString();

// const complejo1Convertido = Complejo.toComplejo(cadenaComplejo1);
// const complejo2Convertido = Complejo.toComplejo(cadenaComplejo2);

// console.log("Complejo 1 convertido de cadena: " + complejo1Convertido);
// console.log("Complejo 2 convertido de cadena: " + complejo2Convertido);

console.log("--SUMA DE COMPLEJOS--");
console.log(`Complejo 1: ${complejo1} \nComplejo 2: ${complejo2}`);
console.log("La suma de los números complejos es: " + suma);
console.log("\n");

console.log("--RESTA DE COMPLEJOS--");
console.log(`Complejo 1: ${complejo1} \nComplejo 2: ${complejo2}`);
console.log("La resta de los números complejos es: " + resta);
console.log("\n");

console.log("--MULTIPLICACION DE COMPLEJOS--");
console.log(`Complejo 1: ${complejo1} \nComplejo 2: ${complejo2}`);
console.log("La multiplicación de los números complejos es: " + multiplicar);
console.log("\n");

console.log("--DIVISION DE COMPLEJOS--");
console.log(`Complejo 1: ${complejo1} \nComplejo 2: ${complejo2}`);
console.log("La division de los números complejos es: " + dividir);

console.log("\n");
console.log("--NÚMERO COMPLEJO EN SU FORMA ToComplejo--");
console.log(`El número complejo introducido es: ${complejo1.toString()} ${complejo2.toString()}`);
console.log(`El número complejo en su forma toComplejo es: ${numero_complejo1} ${numero_complejo2}`);





