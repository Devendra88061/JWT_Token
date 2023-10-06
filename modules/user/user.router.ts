import { Router } from "express";
import userController from "./user.controller";

const userRouter = Router();

userRouter.post("/signUp", userController.signUp);


export default userRouter;

