import { NextFunction, Request, Response } from "express";
import HttpException from "../../common/db/http.Exception/http.Exception";
import HttpResponse from "../../common/db/http.Response/http.Response";
import userService from "./user.service";



class userController{

    // Get All users
    public static async getAllUsers(request: Request, response: Response, next: NextFunction) {
        try {
          userService.getAllUser((err: any, result: any) => {
            if (err) {
              next(new HttpException(400, err));
            } else {
              response.status(200).send(new HttpResponse(null, result, "Get All Users", null, null, null));
            }
          });
        }
        catch (err) {
          next(new HttpException(400, "Something went wrong"));
        }
      }

      // get userById
      public static async getUserById(request: Request, response: Response, next: NextFunction) {
        try {
            const userId = request.params.id;
          userService.getUserById(userId, (err: any, result: any) => {
            if (err) {
              next(new HttpException(400, err));
            } else {
              response.status(200).send(new HttpResponse(null, result, "Get Single User", null, 1, null));
            }
          });
        }
        catch (err) {
          next(new HttpException(400, "Something went wrong"));
        }
      }

    // updateUserById 
      public static async updateUserById(request: Request, response: Response, next: NextFunction) {
        try {
            const userId = request.params.id;
            const updatedUser = request.body;
          userService.updateUserById(userId,updatedUser, (err: any, result: any) => {
            if (err) {
              next(new HttpException(400, err));
            } else {
              response.status(200).send(new HttpResponse(null, result, "Update User", null, 1, null));
            }
          });
        }
        catch (err) {
          next(new HttpException(400, "Something went wrong"));
        }
      }


}
export default userController