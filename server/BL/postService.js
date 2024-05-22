import { getPosts } from "../DL/controllers/postController";

export const getAllPosts = async  () => {
    console.log("getPosts", getPosts);
return await getPosts()    
} 


