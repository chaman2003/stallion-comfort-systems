import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import ChatResponse from "@/lib/models/ChatResponse";

export async function GET(req: Request) {
  try {
    await connectDB();
    const responses = await ChatResponse.find().sort({ createdAt: -1 });
    return NextResponse.json(responses, { status: 200 });
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
    const response = await ChatResponse.create(body);
    return NextResponse.json(response, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
