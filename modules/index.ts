import { Router } from "express";
import userRouter from "./user/user.router";


const router = Router();

router.use("/Auth", userRouter);


export default router;