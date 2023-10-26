
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

let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9]

//Filtrado por producto o talle, solicitando no dejar el campo vacio
const filtrarBtn = document.getElementById("filtrarP");
filtrarBtn.addEventListener("click", () => {
    if (filtrarProducto.value.length > 0){
        filtrarProductos()
    }else{
        alert('Recorda ingresar un Producto')
    }
});
const filtrarBtn1 = document.getElementById("filtrarT");
filtrarBtn1.addEventListener("click", () => {
    if (filtrarTalle.value.length > 0){
        filtrarTalles()
    }else{
        alert('Recorda ingresar el Talle')
    }
});

//Boton de agregar formulario
const agregarBtn = document.getElementById("agregar");
agregarBtn.addEventListener("click", () => {altaProducto();});

//Armado de funcion para filtrar utilizando Producto
function filtrarProductos() {   
    const body = document.querySelector('body');
    const input = document.getElementById('filtrarProducto').value
    const palabraClave = input.trim().toUpperCase();
    let resultado = lista.filter((producto)=>producto.nombre.toUpperCase().includes(palabraClave))
    if (resultado.length > 0) {
      const container = document.createElement('div');
      resultado.forEach((producto) => {
        const card = document.createElement('div');
        const nombre = document.createElement('h3');
        nombre.textContent = producto.nombre;
        card.appendChild(nombre);
        const precio = document.createElement('p');
        precio.textContent = `Precio: ${producto.precio}`;
        card.appendChild(precio);
        const talle = document.createElement('p');
        talle.textContent = `Talle: ${producto.talle}`;
        card.appendChild(talle);
        const stock = document.createElement('p');
        stock.textContent = `Stock: ${producto.stock}`;
        card.appendChild(stock);
        container.appendChild(card);
      });
      body.appendChild(container);
      filtrarProducto.value = "";
    } else {
      alert('Producto Invalido');
      filtrarProducto.value = "";
    }
  } 
//Armado de funcion para filtrar utilizando Talle
  function filtrarTalles() {   
    const body = document.querySelector('body');
    const input = document.getElementById('filtrarTalle').value
    const palabraClave = input.trim().toUpperCase();
    let resultado = lista.filter((producto)=>producto.talle.toUpperCase().includes(palabraClave))
    if (resultado.length > 0) {
      const container = document.createElement('div');
      resultado.forEach((producto) => {
        const card = document.createElement('div');
        const nombre = document.createElement('h3');
        nombre.textContent = producto.nombre;
        card.appendChild(nombre);
        const precio = document.createElement('p');
        precio.textContent = `Precio: ${producto.precio}`;
        card.appendChild(precio);
        const talle = document.createElement('p');
        talle.textContent = `Talle: ${producto.talle}`;
        card.appendChild(talle);
        const stock = document.createElement('p');
        stock.textContent = `Stock: ${producto.stock}`;
        card.appendChild(stock);
        container.appendChild(card);
      });
      body.appendChild(container);
      filtrarTalle.value = ""; // Borro para no volver a mostrar los mismos datos 
    } else {
      alert('Los talles son Small / Medium / Large / XL');
      filtrarTalle.value = "";
    }
  } 
  
//Dar de alta productos
function altaProducto() { 
let formulario = document.createElement("form"); 
  formulario.innerHTML = `
    <label for="formNombre">Nombre:</label>
    <input id="formNombre" type="text" required placeholder="Nombre de Producto" Size="35">
    <label for="formPrecio">Precio:</label>
    <input id="formPrecio" type="number" step="0.01" required placeholder="Ingresa el Precio">
    <label for="formTalle">Talle:</label>
    <input id="formTalle" type="text" required placeholder="Small / Medium / Large / XL">
    <label for="formStock">Stock:</label>
    <input id="formStock" type="number" step="1" required placeholder="ingresa el stock actual">
    <button type="submit">Agregar Productos</button>
`
  ;
  formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const nombreInput = document.getElementById('formNombre').value.trim();
    const precioInput = parseFloat(document.getElementById('formPrecio').value);
    const talleInput = (document.getElementById('formTalle').value);
    const stockInput = parseInt(document.getElementById('formStock').value);
    
    if (isNaN(precioInput) || isNaN(stockInput) || talleInput===" " || nombreInput === '') { //validacion
      alert('Datos inválidos.');
      return;
    }
    const producto = new Producto(nombreInput, precioInput, talleInput, stockInput); 
    if (lista.some((elemento) => elemento.nombre === producto.nombre)) {
      alert('Producto ya existente');
      return;
    }
    lista.push(producto);
    localStorage.setItem("productos", JSON.stringify(lista));
    alert(` Producto "${producto.nombre}" agregado a la lista.`);
    formulario.reset ()
  });
  const body = document.querySelector('body');
  body.appendChild(formulario); 
} 





