import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { input, tone, length } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that rewrites text based on specified tone and length.",
        },
        {
          role: "user",
          content: `Rewrite the following text in a ${tone} tone, making it ${length}:\n\n"${input}"`,
        },
      ],
    });

    const rewritten = completion.choices[0].message.content;

    return NextResponse.json({ rewritten });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return NextResponse.json(
      { error: "Failed to rewrite text" },
      { status: 500 }
    );
  }
}
