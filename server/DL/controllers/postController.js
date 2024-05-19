import { postModel } from "../Models/postModel";

export const getPosts =  () => postModel.find();

