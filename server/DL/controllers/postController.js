import { postModel } from "../Models/postModel";

export const getPosts = async  () => {
    const posts = await postModel.find();
   return posts
}
export const getOnePost = (id) => postModel.findById(id);


export const getOnePostBySlug = (slug) => postModel.findOne(slug);



