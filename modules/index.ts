import { Router } from "express";
import authRouter from "./Auth/auth.router";
import userRouter from "./user/user.router";



const router = Router();

router.use("/Auth", authRouter);

router.use("/User", userRouter);


export default router;