const { log, info } = require("console");
const path = require("path");


class ProductManager{
    constructor (title, description, price, thumbnail, code, stock, path) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.path = path;
    } 
};

class UserManager {
    #users;
    #userDirPath;
    #usersFilePath;
    #fileSystem;
    constructor() {
        this.#users = new Array();
        this.#userDirPath = "./files";
        this.#usersFilePath = this.#userDirPath + "/Usuarios.json";
        this.#fileSystem = require("fs");
    }

    crearProducto = async (title, description, price, thumbnail, code, stock, path) => {
        let productoNuevo = new ProductManager ('producto 5', 'Este es el producto 5', '300', 'Sin imagen','655', '12');
        console.log("Crear Producto: producto a registrar:");
        console.log(productoNuevo);
        try {
            await this.#fileSystem.promises.mkdir(this.#userDirPath, { recursive: true });

            if (!this.#fileSystem.existsSync(this.#usersFilePath)) {

                await this.#fileSystem.promises.writeFile(this.#usersFilePath, "[]");
            }

            let usuariosFile = await this.#fileSystem.promises.readFile(this.#usersFilePath, "utf-8");

            console.log("Archivo JSON obtenido desde archivo: ");
            console.log(usuariosFile);
            this.#users = JSON.parse(usuariosFile);
            console.log("productos encontrados: ");
            console.log(this.#users);
            this.#users.push(productoNuevo);
            console.log("Lista actualizada de productos: ");
            console.log(this.#users);

            await this.#fileSystem.promises.writeFile(this.#usersFilePath, JSON.stringify(this.#users));
             } catch (error) {
                console.error(`Error creando producto nuevo: ${JSON.stringify(productoNuevo)}, detalle del error: ${error}`);
                throw Error(`Error creando producto nuevo: ${JSON.stringify(productoNuevo)}, detalle del error: ${error}`);
             }
    }



        consultarProductos = async () => {
            try {
                await this.#fileSystem.promises.mkdir(this.#userDirPath, {recursive: true });

                if (!this.#fileSystem.existsSync(this.#usersFilePath)) {
                    await this.#fileSystem.promises.writeFile(this.#usersFilePath, "[]");
                }

                let usuariosFile = await this.#fileSystem.promises.readFile(this.#usersFilePath, "utf-8");
                
                
                console.info("Archivo JSON obtenido desde archivo: ");
                console.log(usuariosFile);
                this.#users = JSON.parse(usuariosFile);
                console.log("Productos encontrados: ");
                console.log(this.#users);
                return this.#users;
            } catch (error) {
                console.error (`Error consultando los productos por archivo, valide el archivo: ${this.#userDirPath}, detale del error: ${error}`);
                throw Error(`Error consultando los productos por archivo, valide el archivo: ${this.#userDirPath}, detalle del error: ${error}`);

            }
        }
};

module.exports = UserManager;


     let product = []
    
    let producto1= new ProductManager ('producto 1', 'Este es el producto 1', '150', 'Sin imagen', '456','10');
    let producto2= new ProductManager ('producto 2', 'Este es el producto 2', '150','Sin imagen', '457', '10');
    let producto3= new ProductManager ('producto 3', 'Este es el producto 3', '300', 'Sin imagen','458', '10');
    let producto4= new ProductManager ('producto 4', 'Este es el producto 4', '300', 'Sin imagen','455', '1');


    const stock = product.push(producto1, producto2, producto3);

    const addProduct = product.push(producto4);


    
    const getProducts = product


 
    console.log(getProducts);
   

   
