import connectMongoDb from "@/lib/mongoDb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, phone } = await request.json();
  await connectMongoDb();
  await User.create({ username, phone });
  return NextResponse.json({ message: "User created" }, { status: 201 });
}


export async function GET(){
   await connectMongoDb()
   const users = await User.find()
   return NextResponse.json({users})
}

export async function DELETE(request){
   const id = request.nextUrl.searchParams.get('id')
   await connectMongoDb()
   await User.findByIdAndDelete(id)
   return NextResponse.json({message : "User deleted"}, {status : 200})
}