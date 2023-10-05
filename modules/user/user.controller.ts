// import { app } from "../..";
// import bcrypt from "bcryptjs";

import Users from "../../models/user";

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

  static async register(request: any, response: any) {
    const user = request.body;
    const newUser = new Users(user);
    const userExist = await Users.exists({ email: user.email });
    try {
      if (!userExist) {
        await newUser.save();
        response.status(200).json({
          success: true,
          message: "user created successfully!",
          data: newUser,
        })
      } else {
        response.status(400).json({
          success: false,
          message: "User already exist",
          data: {},
        })
      }
    } catch (err) {
      response.status(500).json({
        message : err,
      });


    }
  }

}
export default userController;