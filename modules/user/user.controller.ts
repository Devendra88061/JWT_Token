// import { app } from "../..";
// import bcrypt from "bcryptjs";
import { NextFunction } from "express";
import Users from "../../models/user";
import userService from "./user.service";
import HttpException from "../../common/db/http.Exception/http.Exception";
import HttpResponse from "../../common/db/http.Responce/http.Responce";


// //simple get api for user
// const users : any = [];

// app.get("/api/users", (request, response) => {
//     response.json(users);
// });


// //Simple post api for user
// app.post("/api/register", async (request, response) => {
//     const user = request.body;

//     if (!user.email || !user.password) {
//       response.status(400).json({
//        success : false,
//        message : "Username and password are required.",
//        data : null
//       })
//     }
//     const hash = await bcrypt.hash(user.password, 10);
//     user.password = hash;
//     users.push(user);
//     response.send(200).json({
//        success : true,
//        message : "user created successfully",
//        data : user,
//     });
//  });


class userController {

  static async signUp(request: Request, response: Response, next: NextFunction) {
    try {
      const user = request.body;
      userService.signUp(user, (err: any, result: any) => {
        if (err) {
          next(new HttpException(400, err));
        } else {
          response.status(200).send(new HttpResponse("SignedUp successfully!", result, "Signed Up successfully.", null, null, null));
        }
      });
      next();
    }
    catch (err) {
      next(new HttpException(400, "Something went wrong"));
    }
  }

}
export default userController;