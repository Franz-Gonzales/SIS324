
class Cuadrado{
    constructor(lado){
        this.lado = lado;
    }

    area(){
        return this.lado * this.lado;
    }

    perimetro(){
        return this.lado * 4;
    }
}

const cadrado1 = new Cuadrado(5);
const cadrado2 = new Cuadrado(7);
console.log("El area del cuadrado es:", cadrado1.area());
console.log("El perimetro del cuadrado es:", cadrado1.perimetro());


console.log("El area del cuadrado es:", cadrado2.area());
console.log("El perimetro del cuadrado es:", cadrado2.perimetro());