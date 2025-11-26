import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Product from "@/lib/models/Product";

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");

    let query: any = {};

    if (category) {
      query.category = category;
    }

    if (featured === "true") {
      query.isFeatured = true;
    }

    const products = await Product.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ products }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const product = await Product.create(body);

    return NextResponse.json(
      { message: "Product created successfully", product },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
