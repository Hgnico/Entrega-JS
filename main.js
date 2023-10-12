
function Producto (nombre,precio,talle,stock){
    this.nombre = nombre
    this.precio = precio
    this.talle = talle
    this.stock = stock
}
const producto1 = new Producto ("Remera Basica Negra", 12900, "Small", 10)
const producto2 = new Producto ("Remera Basica Negra", 12900, "Medium", 15)
const producto3 = new Producto ("Remera Basica Negra", 12900, "Large", 10)
const producto4 = new Producto ("Buzo All Day", 26999, "Small", 0)
const producto5 = new Producto ("Buzo All Day", 26999, "Medium", 12)
const producto6 = new Producto ("Buzo All Day", 26999, "Large", 10)
const producto7 = new Producto ("Pantalon Slim", 36999, "Small", 0)
const producto8 = new Producto ("Pantalon Slim", 36999, "Large", 12)
const producto9 = new Producto ("Pantalon Slim", 36999, "xL", 10)

let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7, producto8, producto9]


// Busqueda y filtrado de productos por talle o rango de precio
function filtrarProductosTalle (){
    let talleBuscado = prompt("Ingresa el talle que buscas ( Small / Medium / Large / XL) ").trim().toUpperCase()
    let resultado = lista.filter((producto)=>producto.talle.toUpperCase().includes(talleBuscado))
    if(resultado.length >0) {
         console.table(resultado)
    }else{
        alert("No hay productos para el talle " + talleBuscado)
    }
}
function filtrarProductosPrecio (){
    let precioBuscado = prompt("Ingresa el maximo de precio que buscas").trim()
    let resultadoPrecio = lista.filter((producto)=>producto.precio <= precioBuscado)
    if(resultadoPrecio.length >0) {
            console.table(resultadoPrecio)
    }else{
        alert("No hay productos en ese rango de precios, intenta nuevamente " + precioBuscado)
    }
}

//Consulta Inicial
let tipoBusqueda = prompt ("Ingresa el criterio de busqueda Talle o Precio").trim().toUpperCase()
if (tipoBusqueda == "talle".toUpperCase()) {
    filtrarProductosTalle()
}else

    if (tipoBusqueda == "Precio".toUpperCase()) {
        filtrarProductosPrecio()
    }else{
    alert ("Criterio de Busqueda incorrecto")
}
