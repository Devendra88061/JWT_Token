import { Router } from "express";
import userController from "./post.controller";
import postController from "./post.controller";


const postRouter = Router();

postRouter.post("/addPost", postController.createPost);

postRouter.get("/getAllPosts", postController.getAllPosts);

postRouter.get("/getPostById/:id", postController.getPostById);

postRouter.put("/updatePost/:id", postController.updatePostById);

postRouter.delete("/deletePost/:id", postController.deletePostById);


export default postRouter;