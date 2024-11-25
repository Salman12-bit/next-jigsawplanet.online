import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const POST = async (req) => {
  try {
    const data = await req.json();
    const { title, desc, score, content, file } = data;

    if (!title || !desc || !score || !content || !file) {
      return NextResponse.json(
        { error: "Validation Error: Missing fields" },
        { status: 400 }
      );
    }

    await connect();

    const newPost = new Post({
      title,
      desc,
      score,
      content,
      file,
    });

    await newPost.save();

    // Return success response
    return NextResponse.json(
      { message: "Post has been created" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error saving post:", err);
    return NextResponse.json(
      { error: "Database Error" },
      { status: 500 }
    );
  }
};



export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    await connect();

    const posts = await Post.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

