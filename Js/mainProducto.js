

document.addEventListener("DOMContentLoaded", () => {
const datos = JSON.parse(localStorage.getItem("datosProducto"));

    if (datos) {
        const nombre = document.querySelector("#nombre");
        const codigo = document.querySelector("#codigo");
        const precio = document.querySelector("#precio");
        const peso = document.querySelector("#peso");
        const descripcion = document.querySelector("#descripcion");
        nombre.textContent = datos.nombre;
        codigo.textContent = datos.codigo;
        descripcion.textContent = datos.descripcion;
        peso.textContent = "Peso: "+datos.peso+" g";
        precio.textContent = "Precio: "+"S/."+datos.precio;
        agregarOctagonos();
    } else {
        document.body.innerHTML = "<p>No hay datos disponibles.</p>";
    }
});

function agregarOctagonos(){
    const contOctagonos = document.querySelector("#contenedor-octagonos");
    const cuadroOctagono = document.createElement("div");
    cuadroOctagono.style = "width: 20%;";
    const imagenOctagono = document.createElement("img");
    imagenOctagono.style = "width: 100%;";

    imagenOctagono.src = "/Images/Octogono-sodio.png";
    contOctagonos.appendChild(cuadroOctagono);
    cuadroOctagono.appendChild(imagenOctagono);
}