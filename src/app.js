import ProductManager from "./manager/ProductManager.js";
import dirname from "./utils/dirname.js";
import { join } from "node:path";
import express from "express";
import config from "./config.js";

const manager = new ProductManager(
  join(dirname, "../fileManagement", "products.json")
);

// ------------- Inicio Express  -------------

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/products", async (req, res) => {
  const limit = req.query.limit;
  // llamo a la lista de productos y le envio por parametro la solicitud del limite
  const getProducts = await manager.getProducts(limit);

  res.json({ status: "success", getProducts });
});

app.get("/products/:pid", async (req, res) => {
  const pid = req.params.pid;
  // instancio el metodo getProductById y le envio por parametro, el pid solicitado y ademas lo paso de string a number
  const productId = await manager.getProductById(+pid);
  const getId = `The product with id:${pid} does not exist`;

  if (!productId) return res.json({ status: "error", getId });

  res.json({ status: "success", productId });
});

app.listen(config.PORT, () => {
  console.log(`Server listening on: http://localhost:${config.PORT}/products`);
});

// ------------- Fin Express  -------------

// ------------- Crear Productos  -------------

const addProduct1 = {
  title: "title-1",
  description: "description-1",
  price: 37,
  thumbnail: "image-1",
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
  code: "code-4",
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

const addProduct7 = {
  title: "title-7",
  description: "description-7",
  price: 45,
  thumbnail: "image-7",
  code: "code-7",
  stock: 21,
};

const addProduct8 = {
  title: "title-8",
  description: "description-8",
  price: 67,
  thumbnail: "image-8",
  code: "code-8",
  stock: 58,
};

const addProduct9 = {
  title: "title-9",
  description: "description-9",
  price: 86,
  thumbnail: "image-9",
  code: "code-9",
  stock: 41,
};

const addProduct10 = {
  title: "title-10",
  description: "description-10",
  price: 78,
  thumbnail: "image-10",
  code: "code-10",
  stock: 48,
};

// manager.addProduct(addProduct1);
// manager.addProduct(addProduct2);
// manager.addProduct(addProduct3);
// manager.addProduct(addProduct4);
// manager.addProduct(addProduct5);
// manager.addProduct(addProduct6);
// manager.addProduct(addProduct7);
// manager.addProduct(addProduct8);
// manager.addProduct(addProduct9);
// manager.addProduct(addProduct10);

// ------------- Obtener Lista de Productos  -------------
// manager.getProducts();

// ------------- obtener ID  -------------
// manager.getProductById(2);

// ------------- Borrar producto  -------------
// manager.deleteProduct(3);

// ------------- Actualizar producto  -------------
// manager.updateProduct(3, {
//   title: "title-5",
//   description: "description-5",
//   price: 65,
//   thumbnail: "image-5",
//   code: "code-5",
//   stock: 24,
// });
