import { getPosts } from "../DL/controllers/postController";

import { getOnePost } from "../DL/controllers/postController";

export const getAllPosts = async  () => {
    console.log("getPosts", getPosts);
return await getPosts()    
} 


export const getPost = (id) => getOnePost(id);
