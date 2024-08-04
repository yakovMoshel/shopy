import { NextResponse } from "next/server";
import { getAllCategories } from "@/server/BL/categoryService";
import { connectToMongo } from "@/server/DL/connectToMongo";

export async function GET() {
    await connectToMongo();

    try {
        const categories = await getAllCategories();
        console.log("Categories in API:", categories);
        return NextResponse.json({ success: true, data: categories });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}