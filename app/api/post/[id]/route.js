import { NextResponse } from "next/server";
import { postModel } from "@/server/DL/Models/postModel";
import { connectToMongo } from "@/server/DL/connectToMongo";

export async function PUT(req, { params }) {
    await connectToMongo();
    const { id } = params;
    const data = await req.json();

    try {
        const product = await postModel.findByIdAndUpdate(id, data, { new: true });
        return NextResponse.json({ success: true, data: product });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
