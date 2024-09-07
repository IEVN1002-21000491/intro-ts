function sumar(){
    var num1=6;
    var num2=6;
    var resultado =num1+num2;
    console.log(`el resultado es: + ${resultado}`);
}
function restar(a:number, b:number):number{
    return a-b;
}
const res=restar(10,2);
console.log(res)
 
interface Mascota{
    nombre: string;
    edad: number;
    mostarEdad:()=>void;
}
 
function calcular(mascota:Mascota, x:number):void{
    mascota.edad+=x;
    console.log(mascota);
    console.log(mascota.mostarEdad());
}
const nuevaMascota:Mascota={
    nombre:'miau',
    edad:5,
    mostarEdad()
    {
        console.log(`la edad de ${nuevaMascota.nombre} es ${this.edad}`)
    }

}
calcular(nuevaMascota,4)