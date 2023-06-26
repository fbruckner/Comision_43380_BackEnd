class ProductManager {
  constructor() {
    this.products = [
      {
        id: 1,   // ejemplo 1
        title: "Heladera",
        description: "SAMSUNG",
        price: 74000,
        thumbnail: "url:1",
        code: "A00001",
        stock: 5,
      },
      {
        id: 2,   // ejemplo 2
        title: "Cocina",
        description: "Patrick",
        price: 50000,
        thumbnail: "url:2",
        code: "A00002",
        stock: 5,
      }
    ];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    
    let checkeo = false;
    this.products.forEach((product) => {
      if (product.code === code) {
        checkeo = true;
      }
    });

    if (checkeo) {
      return "Ya existe";
    } else {
      let id = 0;
      if (this.products.length === 0) {
        id = 1;
      } else {
        id = this.products[this.products.length - 1].id + 1;
      }

      let product = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };

      this.products.push(product);
      return "Agregado correctamente";
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {

    let idSearch = -1;
    this.products.forEach((product, index) => {
      if (product.id == id) {
        idSearch = index;
      }
    });

    if (idSearch != -1) {   // chequeo si existe el id
      return this.products[idSearch];
    } else {
      return "Not found";
    }
  }
}

module.exports = ProductManager;