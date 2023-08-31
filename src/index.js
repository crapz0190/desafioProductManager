/* eslint-disable linebreak-style */
class ProductManager {
  constructor () {
    this.products = [];
    this.id = 1;
  }

  addProduct = async (title, description, price, thumbnail, code, stock) => {

    // utilizo (some) para obtener un booleano
    const codeRepeated = this.products.some(item => item.code === code);
    if (!codeRepeated) {
      // si el codigo no se repite declaro la segunda condicion
      const addProducts = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      // si alguno de los campos no esta incluido -- arroja un error (mensaje) --, sino se agrega todos los campos màs el id autoincrementable
      !Object.values(addProducts).includes(undefined) ? this.products.push({...addProducts, id: this.id++}) : console.error("All fields are required");
    } else {
      console.error(`the code ${code} is repeated`);
    }
  };

  getProducts = () => {
    return this.products;
  };

  getProductById = (id) => {
    // en la variable retengo el resultado de aplicar el (metodo find), para ello utilizo el this.products del constructor que contiene todos los productos en su array
    const idFound = this.products.find(product => product.id === id);
    !idFound ? console.error("Not Found") : console.log(idFound);
  };

}

const manager = new ProductManager();

manager.addProduct("title-1", "description-1", 23, "image-1", "code-1", 13);
manager.addProduct("title-2", "description-2", 23, "image-2", "code-1", 16); // codigo repetido
manager.addProduct("title-3", "description-3", 23, "image-3", "code-3");     // campo faltante
manager.addProduct("title-4", "description-4", 23, "image-4", "code-4", 25);
manager.addProduct("title-5", "description-5", 23, "image-5", "code-5", 21);

console.log(manager.getProducts());
manager.getProductById(5);
