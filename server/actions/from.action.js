"use server"

import { connectToMongo } from "../DL/connectToMongo";

export const creatFormAction = async (fd)=> {
const obj = Object.fromEntries(fd);
console.log(obj)
try {
    await connectToMongo();
} catch (error) {
    throw new Error('Failed to create task')
}
}