import { Router } from "express";
import userController from "./user.controller";

const userRouter = Router();

userRouter.post("/add", userController.register)

export default userRouter;

