import connectMongoDb from "@/lib/mongoDb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newUsername: username, newPhone: phone } = await request.json();
  await connectMongoDb();
  await User.findByIdAndUpdate(id, { username, phone });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDb();
  const user = await User.findOne({ _id: id });
  return NextResponse.json({ user }, { status: 200 });
}
