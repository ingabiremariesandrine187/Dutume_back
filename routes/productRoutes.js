import express from "express";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../Controllers/productController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/roleMiddleware.js";
const router = express.Router();

router.get("/", getProducts);
router.post("/",  createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
