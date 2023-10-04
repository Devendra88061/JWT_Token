// import { app } from "../..";
// import bcrypt from "bcryptjs";

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

  async signUp(request : Request, response: Response){
    
  }

}
export default userController;