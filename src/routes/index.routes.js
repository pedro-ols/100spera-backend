import express from 'express'

import authRouter from "./auth.routes.js"
import categoriesRouter from "./category.routes.js"
import dishesRouter from "./dish.routes.js"

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use("/categories", categoriesRouter);
router.use("/dishes", dishesRouter);

router.use(authMiddleware)

export default router;