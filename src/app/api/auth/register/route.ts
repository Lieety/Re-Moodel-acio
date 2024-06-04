import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb.js";
import { isValidMail } from "@/utils/isAValidMail";
import User, { IUserSchema } from "@/models/User";
import { messages } from "@/utils/messages";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cookies from "cookie";

/*export async function POST(request: NextRequest) {
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

    if (!isValidMail(email)) {
      return NextResponse.json(
        {
          message: messages.error.invalidMail,
        },
        { status: 400 }
      );
    }

    const userFind = await User.findOne({ email });

    if (userFind) {
      return NextResponse.json(
        {
          message: messages.error.alreadyUser,
        },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser: IUserSchema = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });
    //@ts-ignore
    const { password: userPass, ...rest } = newUser._doc;

    await newUser.save();

    console.log(process.env.JWT_PASS);

    const token = jwt.sign({ data: rest }, process.env.JWT_PASS, {
      expiresIn: 86400,
    });

    const response = NextResponse.json(
      {
        newUser: rest,
        message: messages.success.newUser,
      },
      {
        status: 200,
      }
    );

    response.cookies.set("auth_cookie", token, {
      secure: process.env.NODE_ENV === "development",
      sameSite: "strict",
      maxAge: 86400,
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: messages.error.default,
        error,
      },
      { status: 500 }
    );
  }
}*/
