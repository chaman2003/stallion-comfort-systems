import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/lib/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Please provide email and password" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user || !user.password) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // In a real app, you would generate a JWT token here
    // For now, we'll just return the user info

    return NextResponse.json(
      {
        message: "Login successful",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token: "dummy-token-for-now", // Replace with real JWT generation
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
