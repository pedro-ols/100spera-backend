import express from 'express'

import authRouter from "./auth.routes.js"
import categoriesRouter from "./category.routes.js"
import dishesRouter from "./dish.routes.js"
import tablesRouter from "./table.routes.js"
import ordersRouter from "./order.routes.js"

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use("/orders", ordersRouter);
router.use("/tables", tablesRouter);
router.use("/categories", categoriesRouter);
router.use("/dishes", dishesRouter);

// router.use(authMiddleware)

export default router;