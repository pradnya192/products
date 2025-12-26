import express from "express";
import { createProduct, getProducts, updateProduct, deleteProduct } from "../controllers/product.js";


const router = express.Router();

// Routes

// GET all products
router.get("/", getProducts);

// POST create a new product
router.post("/", createProduct);

// PUT update a product
router.put("/:id",updateProduct);

// DELETE a product
router.delete("/:id",  deleteProduct);

export default router;