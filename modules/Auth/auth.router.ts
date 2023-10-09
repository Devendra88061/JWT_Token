import { Router } from "express";
import jwtToken from "../../common/db/jwt/jwt";
import authController from "./auth.controller";


const authRouter = Router();

authRouter.post("/signUp", authController.signUp);

authRouter.post("/signIn", authController.signIn);

authRouter.post("/verifyEmail", authController.verifyEmail);


export default authRouter;

