
class Complejo{
    constructor(real, imaginario){
        this.real = real;
        this.imaginario = imaginario;
    }

    sumar_complejo(complejo){
        return new Complejo(this.real + complejo.real, this.imaginario + complejo.imaginario);
    }

    restar_complejo(complejo){
        return new Complejo(this.real - complejo.real, this.imaginario + complejo.imaginario);
    }

    multiplicar_complejo(complejo){
        const real = (this.real * complejo.real - this.imaginario * complejo.imaginario);
        const imaginario = (this.real * complejo.imaginario + this.imaginario * complejo.real);
        return new Complejo(real, imaginario);
    }

    dividir_complejo(complejo){
        const div = Math.pow(complejo.real, 2) + Math.pow(complejo.imaginario, 2);
        const real = (this.real * complejo.real + this.imaginario * complejo.imaginario) / div;
        const imaginario = (this.imaginario * complejo.real - this.real * complejo.imaginario) / div;
        return new Complejo(real, imaginario);
    }

    toString(){
        let string = this.real + " ";
        if(this.imaginario >= 0) string += "+ ";
            string += this.imaginario + "i";
        return string;

        // return `${this.real} + ${this.imaginario}i`;
    }

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
    }
}


// funcion para las operaciones
function aplicarOperacion(operacion){

    const complejo1 = document.getElementById("num1").value;
    const complejo2 = document.getElementById("num2").value;

    const complejos_cadena = document.getElementById("cadena");
    const complejo = document.getElementById('complejo');

    try{
        // Convertir los complejos de string a numero complejo
        const num_comp1 = Complejo.toComplejo(complejo1);
        const num_comp2 = Complejo.toComplejo(complejo2);

        let resultado;

        switch(operacion){
            case "sumar":
                resultado = num_comp1.sumar_complejo(num_comp2);
                break;
            case "restar":
                resultado = num_comp1.restar_complejo(num_comp2);
                break;
            case "multiplicar":
                resultado = num_comp1.multiplicar_complejo(num_comp2);
                break;
            case "dividir":
                resultado = num_comp1.dividir_complejo(num_comp2);
                break;
            default:
                resultado = "Operación no válida";
        }

        document.getElementById("resultado").textContent = resultado.toString();

        complejos_cadena.textContent = "Los números complejos recibidos como cadena son: " + complejo1.toString() + ' ' + complejo2.toString();
        complejo.textContent = "Los números complejos convertidos de cadena a complejo es: " + num_comp1 + ' ' + num_comp2;

    } catch(error){
        alert('Error: ' + error.message);
    }
}

