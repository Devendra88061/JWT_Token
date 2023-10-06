import CrudOperations from "../../common/db/crud";
import Users from "../../models/user";
import bcrypt from "bcrypt"

class userService {
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
                const user = result.toObject();
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

};

export default userService;