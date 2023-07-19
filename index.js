

const UserManager = require("./UserManager.js");
let userManager = new UserManager();
console.log(userManager);
let persistirProducto = async () => {
    await userManager.crearProducto("producto7", "Este es el producto 7", "400", "sin imagen", "400", "755");
    let productos = await userManager.consultarProductos();
    console.log(`Productos encontrados en User Manager: ${productos.length}`);
    console.log(productos);

};

persistirProducto();