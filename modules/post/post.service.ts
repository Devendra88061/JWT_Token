import CrudOperations from "../../common/db/crud";
import Posts from "../../models/post";
import _ from "lodash";

class postService {

    // add post
    public static async createPost(post: any, next: CallableFunction) {
        try {
            const postData = post;
            const result = await new CrudOperations(Posts).save(postData)
            return next(null, result);
        }
        catch (err: any) {
            return next(err, "Something went wrong!");
        }
    }
    
    // get all post
    public static async getAllPosts(next: CallableFunction) {
        try {
            let postCount = await new CrudOperations(Posts).countAllDocuments({});
            let postsData = await new CrudOperations(Posts).getAllDocuments({}, {}, { limit: 0, pageNo: 0 }, {});

            const finalResult = {
                count: postCount,
                result: postsData,
            }
            next(null, finalResult);
        }
        catch (err: any) {
            return next(err, "Something went wrong!");
        }
    }

    // get Post By Id
    public static async getPostById(postId: any, next: CallableFunction) {
        try {
            let postData = await new CrudOperations(Posts).getDocumentById({ _id: postId }, {});
            next(null, postData);
        }
        catch (err: any) {
            return next(err, "Something went wrong!");
        }
    };

    // update post by id
    public static async updatePostById(userId: any, postDoc: Record<any, any>, next: CallableFunction) {
        try {
            const oldPost = await new CrudOperations(Posts).getDocument({ _id: userId }, {});
            const newPost = _.extend(oldPost, postDoc);

            await new CrudOperations(Posts).save(newPost).then((result: any) => {
                next(null, result);
            }).catch((error: any) => { next(error); });

        }
        catch (err: any) {
            return next(err, "Something went wrong!");
        }
    }

    // delete post by id
    public static async deletePostById(postId: any, next: CallableFunction) {
        try {
            const deletedPost = await new CrudOperations(Posts).getDocumentById({ _id: postId }, { isDeleted: true });
            console.log("deletedPost---", deletedPost);
            if (deletedPost) {
                next(null, deletedPost);
            } else {
                next("No Post Found To Delete!");
            }
        } catch (err: any) {
            return next(err, "Something went wrong!");
        }
    }
}
export default postService;