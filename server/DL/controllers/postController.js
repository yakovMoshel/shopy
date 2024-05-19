import { postModel } from "../Models/postModel";

export const getPosts = async  () => {
    console.log("test");
    const posts = await postModel.find();
    console.log({posts})
   return posts
}



