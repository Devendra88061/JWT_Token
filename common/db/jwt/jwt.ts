import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../../config/config";
class jwtToken {
    public static async verifyJwt(request: any, response: any, next: CallableFunction) {
        //  const bearerHeader = request.headers['authorization'];
        //  console.log("bearerHeader---", bearerHeader);
        //  if(!bearerHeader){
        //     return next(401, "No Token Provided")
        //  }else{
        //     const bearer = bearerHeader.split(" ");
        //     const token = bearer[1];
        //     request.token = token;
        //     next();
        //  }

        const token = request.headers['authorization'];
        if (!token) {
            return response.status(403).json({ message: 'No token provided'});
        }
        jwt.verify(token, JWT_SECRET, (err: any, decoded: any) => {
            if (err) {
                return response.status(401).json({ message: 'Unauthorized' });
            }
            request.user = decoded;
            next();
        });
    }
}
export default jwtToken;