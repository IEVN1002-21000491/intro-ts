import { Distancia } from './Distancia';

export class Triangulo extends Distancia {
    x3: number;
    y3: number;

    constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
        super(x1, x2, y1, y2);
        this.x3 = x3;
        this.y3 = y3;
    }

    Triangulote(): boolean {
        const distanciaAB = this.calcularDistancia();
        const distanciaBC = new Distancia(this.x2, this.x3, this.y2, this.y3).calcularDistancia();
        const distanciaCA = new Distancia(this.x3, this.x1, this.y3, this.y1).calcularDistancia();
        return (
            distanciaAB + distanciaBC > distanciaCA &&
            distanciaBC + distanciaCA > distanciaAB &&
            distanciaCA + distanciaAB > distanciaBC
        );
    }

    imprimirResultado() {
        if (this.Triangulote()) {
            console.log("Los tres puntos forman un triángulo.");
        } else {
            console.log("Los tres puntos NO forman un triángulo.");
        }
    }
}
let triangulo: Triangulo = new Triangulo(-4, -3, 2, 5, 1, 1);
triangulo.imprimirResultado();
