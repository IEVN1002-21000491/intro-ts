export interface Producto{
    desc:string;
    precio:number;
}
const telefono:Producto={
    desc:'Sony Erickson',
    precio: 500
}
const tablet:Producto={
    desc:'Samsung',
    precio: 7642
}
function calcularIVA(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio
    })
    return total*0.16
}
const artiiculo1=[telefono, tablet];
const iva1=calcularIVA(artiiculo1)
console.log(`IVA: ${iva1}`)

export function calcularIVA2(productos:Producto[]):[number,number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio
    })
    return [total,total*0.16];
}
const artiiculo2=[telefono,tablet];
const [total,iva2]=calcularIVA2(artiiculo2);
console.log(`Total: ${total}`)
console.log(`IVA: ${iva2}`)
