function mostrarListado() {
    let contenedor = document.getElementById("contenedor");
    let listado = JSON.parse(localStorage.getItem("listado") || "[]");

    contenedor.innerHTML = "";
    listado.forEach(item => {
        let elemento = document.createElement("elemento");
        elemento.className = "list-group-item";
        elemento.textContent = item;
        contenedor.appendChild(elemento);
    });

};

//Agrego items al listado
function agregarItem() {
    let input = document.getElementById("item");
    let newItem = input.value.trim();
    if (newItem) {
        let listado = JSON.parse(localStorage.getItem("listado") || "[]");
        listado.push(newItem);
        localStorage.setItem("listado", JSON.stringify(listado));
        input.value = "";
        mostrarListado();
    }
}

// Función para limpiar el listado
function limpiarListado() {
    localStorage.removeItem("listado");
    mostrarListado();
}

// Función para los botones
document.getElementById("agregar").addEventListener("click", agregarItem);
document.getElementById("limpiar").addEventListener("click", limpiarListado);

// Mostrar el listado
document.addEventListener("DOMContentLoaded", mostrarListado);