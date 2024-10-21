import express from "express"
import {addToCart,removeFromCart,getCart} from "../controllers/cartControllers.js"
import authMiddlewware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add",authMiddlewware,addToCart)
cartRouter.post("/remove",authMiddlewware,removeFromCart)
cartRouter.post("/get",authMiddlewware,getCart)

export default cartRouter;