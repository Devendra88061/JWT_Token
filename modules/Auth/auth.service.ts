import CrudOperations from "../../common/db/crud";
import Users from "../../models/user";
import bcrypt from "bcrypt"
import { JWT_SECRET } from "../../config/config";
import jwt from "jsonwebtoken";
import sendVerificationEmail from "../../common/db/emailVerificationLink/verifyEmail";

class authService {

    //Sign Up User
    public static async signUp(user: any, next: CallableFunction) {
        try {
            let userData = await new CrudOperations(Users).getDocument({ email: user.email }, {});
            if (userData) {
                return next(null, "user Already Exists..")
            }
            const hash = await bcrypt.hash(user.password, 17);
            user.password = hash;
            const newUsers = new Users(user);
            try {
                const result = await new CrudOperations(Users).save(newUsers)
                // const user = result.toObject();
                // delete user?.password;
                // delete user.__v;
                return next(null, result);
            }
            catch (err: any) {
                return next(err, "Something went wrong!");
            }
        }
        catch (err: any) {
            return next(err, "Something went wrong!");
        }
    }

    //Sign In User
    public static async signIn(email: any, password: any, next: CallableFunction) {
        try {
            let userData = await new CrudOperations(Users).getDocument({ email: email }, {});
            if (!userData) {
                return next(null, "You are not register user please signUp now");
            }
            const passwordMatch = await bcrypt.compare(password, userData.password);
            if (passwordMatch) {
                // To convert mongoose doc into plain object
                userData = userData.toObject();
                const token = jwt.sign(userData.email, JWT_SECRET);
                userData.token = token;
                return next(null, userData);
            } else {
                return next(null, "Invalid password please re-entered correct password")
            }
        } catch (err: any) {
            return next(err, "Something went wrong!");
        }
    }

    // send email verification link
    public static async verifyEmail(token : any, email: any, next: CallableFunction) {
        try {
            sendVerificationEmail(email, token)
            next(null,"Mail sent successfully!");

        } catch (err: any) {
            return next(err, "Something went wrong!");
        }
    }
};

export default authService;