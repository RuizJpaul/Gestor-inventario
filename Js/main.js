
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
    new Producto("Galletas Oreo", "A001", 120, "Galletas rellenas con alto contenido de azúcar y grasas. 530 kcal por 100g.", [oct1, oct3, oct4], 4.5),
    new Producto("Cereal Choco Krispis", "A002", 300, "Cereal con chocolate, alto en azúcar. 390 kcal por 100g.", [oct1, oct4], 8.9),
    new Producto("Leche Entera Gloria", "A003", 1000, "Leche entera pasteurizada, fuente de calcio. 60 kcal por 100ml.", [], 5.2),
    new Producto("Pan Integral Bimbo", "A004", 500, "Pan de trigo integral, bajo en grasa y azúcar. 250 kcal por 100g.", [], 6.0),
    new Producto("Refresco Coca-Cola", "A005", 355, "Bebida azucarada. 140 kcal por lata, contiene edulcorantes.", [oct1, oct4, oct7], 3.5),
    new Producto("Jugo de Naranja", "A006", 1000, "Jugo natural sin azúcar añadida. 45 kcal por 100ml.", [], 6.5),
    new Producto("Arroz Costeño", "A007", 1000, "Arroz blanco, fuente de carbohidratos. 360 kcal por 100g.", [], 4.2),
    new Producto("Aceite Vegetal Primor", "A008", 900, "Aceite vegetal refinado, alto en calorías. 900 kcal por 100g.", [oct4], 7.8),
    new Producto("Yogur Danlac Fresa", "A009", 150, "Yogur azucarado sabor fresa. 120 kcal por porción.", [oct1], 2.9),
    new Producto("Gaseosa Inca Kola", "A010", 500, "Gaseosa peruana con alto contenido de azúcar. 200 kcal por botella.", [oct1, oct4], 3.8),
    new Producto("Sopa Instantánea Maruchan", "A011", 64, "Sopa de fideos con alto contenido de sodio. 290 kcal por porción.", [oct2, oct4], 1.5),
    new Producto("Chocolate Sublime", "A012", 35, "Chocolate con maní. 180 kcal por unidad, alto en grasa y azúcar.", [oct1, oct3], 2.2),
    new Producto("Mantequilla Gloria", "A013", 250, "Mantequilla con sal. 720 kcal por 100g, alto en grasa saturada.", [oct3, oct4], 6.3),
    new Producto("Helado D'Onofrio", "A014", 500, "Helado sabor vainilla y chocolate. 210 kcal por 100g.", [oct1, oct3, oct4], 9.5),
    new Producto("Café Altomayo", "A015", 250, "Café molido sin azúcar. 2 kcal por taza, antioxidante natural.", [], 7.0),
    new Producto("Galletas de Avena", "A016", 200, "Galletas con avena y pasas. 410 kcal por 100g, azúcar natural.", [], 3.5),
    new Producto("Mermelada de Fresa", "A017", 400, "Mermelada con azúcar añadida. 270 kcal por 100g.", [oct5], 5.6),
    new Producto("Queso Andino", "A018", 300, "Queso fresco artesanal. 310 kcal por 100g, buena fuente de proteína.", [], 6.8),
    new Producto("Agua Cielo sin gas", "A019", 625, "Agua purificada, sin calorías ni sodio.", [], 2.0),
    new Producto("Snacks Papas Lay's", "A020", 150, "Papas fritas. 540 kcal por 100g, alto en sodio y grasas trans.", [oct2, oct4, oct8], 4.0)
];

const boton = document.getElementById("boton");
boton.addEventListener("click", ()=>{
    const inputTexto = document.getElementById("input-texto").value;
    const objeto = Buscar(inputTexto);
    localStorage.setItem("datosProducto", JSON.stringify(objeto));
    window.location.href = "Paginas/Producto.html";
})

function Buscar(codigo){
    let producto = listaProductos.find((item)=> item.codigo===codigo);
    return producto;
}