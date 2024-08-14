import { NextResponse } from "next/server";
import { postModel } from "@/server/DL/Models/postModel";
import { connectToMongo } from "@/server/DL/connectToMongo";

export const GET = async () => {
  return NextResponse.json({ success: true });
}

export async function POST(req) {
  await connectToMongo();
  const data = await req.json();

  try {
    const post = await postModel.create(data);
    return NextResponse.json({ success: true, data: post });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
