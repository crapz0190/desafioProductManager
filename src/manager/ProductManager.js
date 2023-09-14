import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
    this.id = 1;
  }

  getID = async (id) => {
    try {
      const products = await this.getProducts();
      const idFound = products.find((product) => product.id === id);
      return idFound;
    } catch (err) {
      console.error(err);
    }
  };

  readProducts = async () => {
    try {
      if (existsSync(this.path)) {
        const readArrObj = await readFile(this.path, "utf-8");
        return JSON.parse(readArrObj);
      }

      return [];
    } catch (err) {
      console.error(err.message);
    }
  };

  addProduct = async (products) => {
    const codeRepeated = this.products.some(
      (item) => item.code === products.code
    );
    if (!codeRepeated) {
      const addProducts = {
        title: products.title,
        description: products.description,
        price: products.price,
        thumbnail: products.thumbnail,
        code: products.code,
        stock: products.stock,
      };

      !Object.values(addProducts).includes(undefined)
        ? this.products.push({ id: this.id++, ...addProducts })
        : console.error("All fields are required");
    } else {
      console.error(`the code ${products.code} is repeated`);
    }

    try {
      // creo el archivo enviando el array de productos al this.path como un string
      const file = await writeFile(this.path, JSON.stringify(this.products));
      return file;
    } catch (err) {
      console.error(err.message);
    }
  };

  getProducts = async (limit) => {
    // recibo el parametro de la variabe limit con el req.query
    try {
      const data = await this.readProducts();
      // Configuro el limite a mostrar utilizando el metodo SLICE
      const setLimit = data.slice(0, limit);
      // establezco la condicion de que, sino existe el req.query (peticion), entonces muestra toda la lista de productos, caso contrario se muestra el limite de productos solicitados
      if (!limit) return data;
      return setLimit;
    } catch (err) {
      console.error(err);
    }
  };

  getProductById = async (id) => {
    try {
      const idFound = await this.getID(id);
      return idFound;
    } catch (err) {
      console.error(err);
    }
  };

  updateProduct = async (id, update) => {
    try {
      // determino la existencia del ID
      const idFound = await this.getID(id);
      if (idFound) {
        // elimino el id especificado
        await this.deleteProduct(id);
        const products = await this.getProducts();
        // establezco un nuevo objeto con el mismo ID eliminado y los datos a actualizar
        const updateProduct = { id, ...update };
        // agrego mediante un PUSH los nuevos datos al array de objetos
        products.push(updateProduct);
        console.log(`Product with id: ${id} has been updated `);

        // reescribo el this.path con la actualizacion
        return await writeFile(this.path, JSON.stringify(products));
      } else {
        console.error(`Product with id: ${id} does not exist`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  deleteProduct = async (id) => {
    try {
      const idFound = await this.getID(id);
      // determino la existencia del ID
      if (idFound) {
        const products = await this.getProducts();
        // establezco un filtrado para que devuelva un nuevo array de objetos pero sin el ID especificado
        const idFilter = products.filter((product) => product.id !== id);
        console.log(`Product with id: ${id} has been removed `);

        // reescribo el this.path sin el producto con el ID especificado
        return await writeFile(this.path, JSON.stringify(idFilter));
      } else {
        console.error(`Product with id: ${id} does not exist`);
      }
    } catch (err) {
      console.error(err);
    }
  };
}

export default ProductManager;
