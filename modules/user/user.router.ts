import { Router } from "express";
import userController from "./user.controller";


const userRouter = Router();

userRouter.get("/getAllUser", userController.getAllUsers);

userRouter.get("/getUserById/:id", userController.getUserById);

userRouter.put("/updateUser/:id", userController.updateUserById);

userRouter.delete("/deleteUser/:id", userController.removeUser);


export default userRouter;