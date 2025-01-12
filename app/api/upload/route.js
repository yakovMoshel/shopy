// app/api/upload/route.js
import { NextResponse } from "next/server";
import cloudinary from "@/utils/cloudinary";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');
    
    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    // המרת הקובץ לבאפר
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // העלאה ל-Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: "auto",
          folder: "your-folder-name" // שנה לשם התיקייה שתרצה
        },
        (error, result) => {
          if (error) reject(error);
          resolve(result);
        }
      ).end(buffer);
    });

    return NextResponse.json({ url: result.secure_url });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}