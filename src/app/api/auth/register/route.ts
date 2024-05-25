import { connectMongoDB } from "@/libs/mongodb.js";
import { NextRequest, NextResponse } from "next/server";
import { messages } from "@/utils/messages";

export async function POST(request: NextRequest) {
  try {
    await connectMongoDB();

    const body = await request.json();
    const { name, email, password, role } = body;

    if (!name || !email || !password || !role) {
      return NextResponse.json(
        {
          message: messages.error.needProps,
        },
        { status: 400 }
      );
    }
  } catch (error) {}
}
