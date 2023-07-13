

class ProductManager{
    constructor (title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    } 
}

    let product = []
    
    let producto1= new ProductManager ('producto 1', 'Este es el producto 1', '150', 'Sin imagen', '456','10');
    let producto2= new ProductManager ('producto 2', 'Este es el producto 2', '150','Sin imagen', '457', '10');
    let producto3= new ProductManager ('producto 3', 'Este es el producto 3', '300', 'Sin imagen','458', '10');
    let producto4= new ProductManager ('producto 4', 'Este es el producto 4', '300', 'Sin imagen','455', '1');


    const stock = product.push(producto1, producto2, producto3);

    const addProduct = product.push(producto4);


    
    const getProducts = product


 
   console.log(getProducts);
   

   
