import express from "express";
import { ProductManager } from "./ProductManager.js";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`El servidor esta levantado en el puerto ${port}`));

const productService = new ProductManager(`./src/products.json`);
let resultado = 0;

app.get("/products",(req,res)=>{
    try {
        const result = productService.getProducts();
        console.log("result: ", result);
        const limite = parseInt(req.query.limit);
        console.log("limite: ", limite);
        if (limite>0) {
            resultado = result.filter(producto=>producto.id <= limite);
        } else {
            resultado = result;
        }
        res.send(resultado);
    } catch (error) {
        res.send(error.message);
    }
});

app.get("/products/:productid",(req,res)=>{
    try {
        const productid = parseInt(req.params.productid);
        const result = productService.getProductById(productid);
        if (!result) {
            console.log("El producto no existe!");
        } else {
            res.send(result);
        }
    } catch (error) {
        res.send(error.message);
    }
});
