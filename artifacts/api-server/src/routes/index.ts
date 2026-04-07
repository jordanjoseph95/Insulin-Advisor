import { Router, type IRouter } from "express";
import healthRouter from "./health";
import profileRouter from "./profile";
import calculationsRouter from "./calculations";
import foodRouter from "./food";

const router: IRouter = Router();

router.use(healthRouter);
router.use(profileRouter);
router.use(calculationsRouter);
router.use(foodRouter);

export default router;
