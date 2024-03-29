import { connectToDB } from "@lib/mogoDB";
import User from "@models/User";
import { NextRequest } from "next/server";
import { hash } from "bcryptjs";

export const POST = async (req: NextRequest) => {
  try {
    await connectToDB();

    const { username, email, passwrod } = await req.json();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new Response("User already exists", { status: 400 });
    }

    const hashedPassword = await hash(passwrod, 12);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new Response(JSON.stringify(newUser), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create new user"), { status: 500 };
  }
};
