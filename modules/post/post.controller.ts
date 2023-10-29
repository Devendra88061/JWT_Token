import { NextFunction, Request, Response } from "express";
import HttpException from "../../common/db/http.Exception/http.Exception";
import HttpResponse from "../../common/db/http.Response/http.Response";
import postService from "./post.service";



class postController {

  // Add post
  
  static async createPost(request: Request, response: Response, next: NextFunction) {
    try {
      const post = request.body;
      postService.createPost(post, (err: any, result: any) => {
        if (err) {
          next(new HttpException(400, err));
        } else {
          response.status(200).send(new HttpResponse(null, result, "create post", null, null, null));
        }
      });
    }
    catch (err) {
      next(new HttpException(400, "Something went wrong"));
    }
  }
    
  // Get All users
  public static async getAllPosts(request: Request, response: Response, next: NextFunction) {
    try {
      postService.getAllPosts((err: any, result: any) => {
        if (err) {
          next(new HttpException(400, err));
        } else {
          response.status(200).send(new HttpResponse(null, result, "Get All Posts", null, null, null));
        }
      });
    }
    catch (err) {
      next(new HttpException(400, "Something went wrong"));
    }
  }

  // get userById
  public static async getPostById(request: Request, response: Response, next: NextFunction) {
    try {
      const postId = request.params.id;
      postService.getPostById(postId, (err: any, result: any) => {
        if (err) {
          next(new HttpException(400, err));
        } else {
          response.status(200).send(new HttpResponse(null, result, "Get Single Post", null, 1, null));
        }
      });
    }
    catch (err) {
      next(new HttpException(400, "Something went wrong"));
    }
  }

  // updateUserById 
  public static async updatePostById(request: Request, response: Response, next: NextFunction) {
    try {
      const postId = request.params.id;
      const updatedPost = request.body;
      postService.updatePostById(postId, updatedPost, (err: any, result: any) => {
        if (err) {
          next(new HttpException(400, err));
        } else {
          response.status(200).send(new HttpResponse(null, result, "Update Post", null, 1, null));
        }
      });
    }
    catch (err) {
      next(new HttpException(400, "Something went wrong"));
    }
  }


  // Delete user by ID
  public static async deletePostById(request: Request, response: Response, next: NextFunction) {
    try {
      const postId = request.params.id;
      postService.deletePostById(postId, (err: any, result: any) => {
        if (err) {
          next(new HttpException(400, err));
        } else {
          response.status(200).send(new HttpResponse(null, result, "Delete Post", null, 1, null));
        }
      });
    }
    catch (err) {
      next(new HttpException(400, "Something went wrong"));
    }
  }


}
export default postController;