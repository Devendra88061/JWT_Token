import { Router } from "express";
import authRouter from "./Auth/auth.router";
import userRouter from "./user/user.router";
import postRouter from "./post/post.router";



const router = Router();

router.use("/auth", authRouter);

router.use("/user", userRouter);

router.use("/post", postRouter);

export default router;