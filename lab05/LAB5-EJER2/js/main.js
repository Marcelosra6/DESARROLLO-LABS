let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio, cantidad: 1 });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito!");
}

function mostrarCarrito() {
  let tabla = document.getElementById("listaCarrito");
  if (!tabla) return;
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  tabla.innerHTML = "";
  carrito.forEach((item, index) => {
    tabla.innerHTML += `
      <tr>
        <td>${item.nombre}</td>
        <td>$${item.precio}</td>
        <td><input type="number" value="${item.cantidad}" min="1" onchange="actualizarCantidad(${index}, this.value)"></td>
        <td>$${(item.precio * item.cantidad).toFixed(2)}</td>
        <td><button onclick="eliminarProducto(${index})" class="btn btn-danger btn-sm">Eliminar</button></td>
      </tr>`;
  });
}

function actualizarCantidad(index, nuevaCantidad) {
  carrito[index].cantidad = parseInt(nuevaCantidad);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

document.addEventListener("DOMContentLoaded", mostrarCarrito);
