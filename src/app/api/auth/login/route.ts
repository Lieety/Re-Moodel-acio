import { connectMongoDB } from "@/libs/mongodb";
import { messages } from "@/utils/messages";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    await connectMongoDB();

    const body = await request.json();

    const { email, password } = body;

    const userFind = await User.findOne({ email });

    if (!userFind) {
      return NextResponse.json({
        message: messages.error.notUser,
      });
    }

    console.log(bcrypt.decodeBase64(password, 10));
  } catch (error) {
    return NextResponse.json({
      message: messages.error.default,
    });
  }
}
