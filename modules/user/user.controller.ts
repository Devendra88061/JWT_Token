import { NextFunction, Request, Response } from "express";
import userService from "./user.service";
import HttpException from "../../common/db/http.Exception/http.Exception";
import HttpResponse from "../../common/db/http.Response/http.Response";

class userController {

  static async signUp(request: Request, response: Response, next: NextFunction) {
    try {
      const user = request.body;
      userService.signUp(user, (err: any, result: any) => {
        if (err) {
          next(new HttpException(400, err));
        } else {
          response.status(200).send(new HttpResponse(null, result, "Signed Up", null, null, null));
        }
      });
    }
    catch (err) {
      next(new HttpException(400, "Something went wrong"));
    }
  }

  static async signIn(request: Request, response: Response, next: NextFunction) {
    try {
      const {email, password} = request.body;
      userService.signIn(email, password, (err: any, result: any) => {
        if (err) {
          next(new HttpException(400, err));
        } else {
          response.status(200).send(new HttpResponse(null, result, "Signed In", null, null, null));
        }
      });
    }
    catch (err) {
      next(new HttpException(400, "Something went wrong"));
    }
  }

  static async getAllUsers(request: Request, response: Response, next: NextFunction) {
    try {
      userService.getAllUsers((err: any, result: any) => {
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

  // send verification link for email
  static async verifyEmail(request: Request, response: Response, next: NextFunction) {
    try {
      userService.verifyEmail((err: any, result: any) => {
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

}
export default userController;