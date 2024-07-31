import { NextResponse } from "next/server";
import { getAllCategories,newCategory } from "@/server/BL/categoryService";
import { connectToMongo } from "@/server/DL/connectToMongo";

export async function GET() {
    await connectToMongo();
    try {
        const categories = await getAllCategories();
        console.log("Categories in API:", categories); // הדפסת התוצאות
        return NextResponse.json({ success: true, data: categories });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}


export async function POST(request) {
    await connectToMongo();
    try {
        const { name, description, slug, image } = await request.json();
        if (!name || !slug || !image) {
            return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }
        const Category = await newCategory({ name, description, slug, image });
        return NextResponse.json({ success: true, data: Category }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

