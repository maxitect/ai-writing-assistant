"use server";

import { NextResponse } from "next/server";
import { getOpenAIInstance } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const openai = await getOpenAIInstance();
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
    console.error("OpenAI API error details:", {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    });
    
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : "Failed to rewrite text",
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined 
      },
      { status: 500 }
    );
  }
}
