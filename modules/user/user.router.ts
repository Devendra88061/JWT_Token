import { Router } from "express";
import userController from "./user.controller";

const userRouter = Router();

userRouter.post("/signUp", userController.signUp);

userRouter.post("/signIn", userController.signIn);

userRouter.get("/getUser" , userController.getUsers);


export default userRouter;

