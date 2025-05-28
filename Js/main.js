
//DATOS
const oct1 = new Octagono('OCT001', 'ALTO EN AZÚCAR', 'ALTO');
const oct2 = new Octagono('OCT002', 'ALTO EN SODIO', 'ALTO');
const oct3 = new Octagono('OCT003', 'ALTO EN GRASA SATURADA', 'ALTO');
const oct4 = new Octagono('OCT004', 'ALTO EN CALORÍAS', 'ALTO');
const oct5 = new Octagono('OCT005', 'EXCESO DE AZÚCAR', 'MUY ALTO');
const oct6 = new Octagono('OCT006', 'EXCESO DE SODIO', 'MUY ALTO');
const oct7 = new Octagono('OCT007', 'CONTIENE EDULCORANTES', 'ADVERTENCIA');
const oct8 = new Octagono('OCT008', 'CONTIENE GRASAS TRANS', 'ADVERTENCIA');
let listaOctagonos = [oct1, oct2, oct3, oct4, oct5, oct6, oct7, oct8]

const listaProductos = [
    new Producto("Gaseosa Cola", "P001", [oct1, oct4]),
    new Producto("Papas Fritas", "P002", [oct2, oct3]),
    new Producto("Galletas Dulces", "P003", [oct1, oct5]),
    new Producto("Cereal Chocolateado", "P004", [oct1, oct3, oct4]),
    new Producto("Jugo Envasado", "P005", [oct7]),
    new Producto("Snacks Salados", "P006", [oct2, oct6]),
    new Producto("Helado", "P007", [oct3, oct4]),
    new Producto("Refresco Instantáneo", "P008", [oct1, oct7]),
    new Producto("Hamburguesa Congelada", "P009", [oct2, oct3, oct8]),
    new Producto("Pizza Congelada", "P010", [oct2, oct3, oct4]),
    new Producto("Panetón", "P011", [oct1, oct4]),
    new Producto("Leche Saborizada", "P012", [oct1]),
    new Producto("Yogurt con Azúcar", "P013", [oct1, oct7]),
    new Producto("Barra de Cereal", "P014", [oct1]),
    new Producto("Café en Polvo Azucarado", "P015", [oct1, oct2]),
    new Producto("Bebida Energética", "P016", [oct1, oct4, oct7]),
    new Producto("Chorizo Empacado", "P017", [oct2, oct8]),
    new Producto("Sopa Instantánea", "P018", [oct2, oct6]),
    new Producto("Chocolate", "P019", [oct1, oct3]),
    new Producto("Galletas Rellenas", "P020", [oct1, oct5, oct3])
];

const boton = document.getElementById("boton");
boton.addEventListener("click", ()=>{
    const inputTexto = document.getElementById("input-texto").value;
    const objeto = Buscar(inputTexto);
    localStorage.setItem("datosProducto", JSON.stringify(objeto));
    window.location.href = "../Paginas/Producto.html";
})

function Buscar(codigo){
    let ans = listaProductos.filter((item)=> item.codigo.includes(codigo));
    return ans;
}