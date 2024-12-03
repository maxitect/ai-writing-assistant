"use server";

import OpenAI from "openai";

export async function getOpenAIInstance() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY environment variable");
  }

  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}
