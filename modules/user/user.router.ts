import { Router } from "express";
import userController from "./user.controller";
import jwtToken from "../../common/db/jwt/jwt";


const userRouter = Router();

userRouter.post("/signUp", userController.signUp);

userRouter.post("/signIn", userController.signIn);

userRouter.get("/getUser" ,jwtToken.verifyJwt, userController.getAllUsers);

userRouter.post("/verifyEmail", userController.verifyEmail);


export default userRouter;

