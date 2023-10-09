import CrudOperations from "../../common/db/crud";
import Users from "../../models/user";
import _ from "lodash";

class userService{

    public static async getAllUser( next: CallableFunction) {
        try {
            let userCount = await new CrudOperations(Users).countAllDocuments({});
            let userData = await new CrudOperations(Users).getAllDocuments({},{},{limit:0, pageNo:0},{});

            const finalResult = {
                count : userCount,
                result : userData,
            }
            next(null, finalResult);         
        }
        catch (err: any) {
            return next(err, "Something went wrong!");
        }
    }

    public static async getUserById(userId : any, next: CallableFunction) {
        try {
            let userData = await new CrudOperations(Users).getDocumentById({_id: userId},{});
            next(null, userData);         
        }
        catch (err: any) {
            return next(err, "Something went wrong!");
        }
    }

    public static async updateUserById(userId : any, userDoc: Record<any, any>, next: CallableFunction) {
        try {
            const oldUser = await new CrudOperations(Users).getDocument({ _id: userId }, {});
            const newUser = _.extend(oldUser, userDoc);

            await new CrudOperations(Users).save(newUser).then((result: any) => {
                next(null, result);
            }).catch((error: any) => { next(error); });
    
        }
        catch (err: any) {
            return next(err, "Something went wrong!");
        }
    }
}
export default userService