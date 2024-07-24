import { NextResponse } from "next/server";
import { productModel } from "@/server/DL/Models/productModel";
import { connectToMongo } from "@/server/DL/connectToMongo";

export const GET =async ()=>{
    return NextResponse.json({success: true});
}

export async function POST(req) {
    await connectToMongo();
    const data = await req.json();
  
  try {
    const product = await productModel.create(data);
    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
