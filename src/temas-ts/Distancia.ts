export class Distancia {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
    resultado: number = 0;

    constructor(x1: number, x2: number, y1: number, y2: number) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
    }

    imprimir() {
        console.log(`La distancia de punto (${this.x1}, ${this.y1}) a (${this.x2}, ${this.y2}) es: ${this.resultado}`);
    }

    calcularDistancia() {
        this.resultado = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
        return this.resultado;
    }
}


let distancia: Distancia = new Distancia(-4, 2, -3, 5);
distancia.calcularDistancia(); 
distancia.imprimir();
