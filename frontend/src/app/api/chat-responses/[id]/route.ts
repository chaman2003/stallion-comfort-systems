import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import ChatResponse from "@/lib/models/ChatResponse";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();
    const response = await ChatResponse.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return NextResponse.json(
        { message: "Response not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const response = await ChatResponse.findByIdAndDelete(id);
    if (!response) {
      return NextResponse.json(
        { message: "Response not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Response deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
