# desafioProductManager

------- Getting Started with NodeJS ------

In the project directory, you can run:

npm start


------ adding products to the JSON file -----
For example:

manager.addProduct(addProduct1);
manager.addProduct(addProduct2);
manager.addProduct(addProduct ...n);

------ Check if the ID exists --------
For example:

manager.getProductById(id); 

----- Delete a product by its ID -----
For example:

manager.deleteProduct(id);

------ Update a product by its ID, removing all its parameters except its ID -----
For example:

manager.updateProduct(3, {
  title: "title-5",
  description: "description-5",
  price: 65,
  thumbnail: "image-5",
  code: "code-5",
  stock: 24,
});