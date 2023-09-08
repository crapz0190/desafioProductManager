import ProductManager from "./manager/managerProducts.js";
import dirname from "./utils/dirname.js";
import { join } from "node:path";

// establezco la ruta absoluta al archivo products.json
const manager = new ProductManager(
  join(dirname, "../fileManagement", "products.json")
);

const addProduct1 = {
  title: "title-1",
  description: "description-1",
  price: 37,
  // thumbnail: "image-1", // FALTA CAMPO
  code: "code-1",
  stock: 34,
};

const addProduct2 = {
  title: "title-2",
  description: "description-2",
  price: 17,
  thumbnail: "image-2",
  code: "code-2",
  stock: 34,
};

const addProduct3 = {
  title: "title-3",
  description: "description-3",
  price: 45,
  thumbnail: "image-3",
  code: "code-3",
  stock: 34,
};

const addProduct4 = {
  title: "title-4",
  description: "description-4",
  price: 64,
  thumbnail: "image-4",
  code: "code-3", // EL CODIGO SE REPITE
  stock: 26,
};

const addProduct5 = {
  title: "title-5",
  description: "description-5",
  price: 23,
  thumbnail: "image-5",
  code: "code-5",
  stock: 16,
};

const addProduct6 = {
  title: "title-6",
  description: "description-6",
  price: 36,
  thumbnail: "image-6",
  code: "code-6",
  stock: 56,
};

manager.addProduct(addProduct1);
manager.addProduct(addProduct2);
manager.addProduct(addProduct3);
manager.addProduct(addProduct4);
manager.addProduct(addProduct5);
manager.addProduct(addProduct6);

// manager.getProducts();

// manager.getProductById(2);

// manager.deleteProduct(3);

// manager.updateProduct(3, {
//   title: "title-5",
//   description: "description-5",
//   price: 65,
//   thumbnail: "image-5",
//   code: "code-5",
//   stock: 24,
// });
