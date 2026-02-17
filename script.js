const productos = [
    {
        id: 1,
        nombre: "Lejía Tradicional 1L",
        precio: 2.50.,
        precioMayorista: 1.50,
        imagen: "img/lejia.jpg"
    },
    {
        id: 2,
        nombre: "Lavavajilla 900ml",
        precio: 6.50,
        precioMayorista: 4.80,
        imagen: "img/lavavajilla.jpg"
    },
    {
        id: 3,
        nombre: "Shampoo Para Perros 1L",
        precio: 18.00,
        precioMayorista: 14.40,
        imagen: "img/shampoo para perros.jpg"
    },
    {
        id: 4,
        nombre: "Limpiazapatillas 200ml",
        precio: 10,
        precioMayorista: 7.20,
        imagen: "img/limpiazapatillas.jpg"
    }
];

let carrito = [];

function mostrarProductos() {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";

    productos.forEach(p => {
        contenedor.innerHTML += `
            <div class="producto">
                <img src="${p.imagen}">
                <h3>${p.nombre}</h3>
                <p class="precio">Menor: S/ ${p.precio}</p>
                <p class="precio">Mayor (10+): S/ ${p.precioMayorista}</p>
                <button onclick="agregar(${p.id})">Agregar</button>
            </div>
        `;
    });
}

function cambiarCantidad(boton, cambio) {
    let contenedor = boton.parentElement;
    let cantidadElemento = contenedor.querySelector(".cantidad");
    let cantidad = parseInt(cantidadElemento.textContent);

    cantidad += cambio;

    if (cantidad < 1) cantidad = 1;

    cantidadElemento.textContent = cantidad;
}

function agregarConCantidad(boton, nombre, precio) {
    let producto = boton.parentElement;
    let cantidad = parseInt(producto.querySelector(".cantidad").textContent);

    let total = precio * cantidad;

    alert("Agregaste " + cantidad + " unidades de " + nombre +
          "\nTotal: S/ " + total);
}
// Cambiar cantidad
function cambiarCantidad(boton, cambio) {
    let contenedor = boton.parentElement;
    let cantidadElemento = contenedor.querySelector(".cantidad");
    let cantidad = parseInt(cantidadElemento.textContent);

    cantidad += cambio;
    if (cantidad < 1) cantidad = 1;

    cantidadElemento.textContent = cantidad;
}

// Agregar al carrito con cantidad
function agregarConCantidad(boton, nombre, precio) {
    let producto = boton.parentElement;
    let cantidad = parseInt(producto.querySelector(".cantidad").textContent);
    let total = precio * cantidad;

    alert("Agregaste " + cantidad + " unidades de " + nombre +
          "\nTotal: S/ " + total);
}
function actualizar() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
    let total = 0;

    const cantidades = {};

    carrito.forEach(p => {
        cantidades[p.id] = (cantidades[p.id] || 0) + 1;
    });

    carrito.forEach(p => {
        const cantidad = cantidades[p.id];
        const precioFinal = cantidad >= 10 ? p.precioMayorista : p.precio;
        total += precioFinal;

        lista.innerHTML += `
            <li>${p.nombre} - S/ ${precioFinal}</li>
        `;
    });

    document.getElementById("total").textContent = total;
    document.getElementById("contador").textContent = carrito.length;
}

function enviarWhatsApp() {
    if(carrito.length === 0){
        alert("Agrega productos primero");
        return;
    }

    let mensaje = "Hola MATHFARM, soy cliente mayorista.%0A";
    carrito.forEach(p => {
        mensaje += - ${p.nombre}%0A;
    });

    let total = carrito.reduce((acc, p) => acc + p.precio, 0);
    mensaje += Total estimado: S/ ${total};

    window.open(https://wa.me/51970666536?text=${mensaje});
}

mostrarProductos();
