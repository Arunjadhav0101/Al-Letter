import { generateContent, getPrompt } from "@/lib/gen-ai/genai";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello From Server" });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  const prompt = getPrompt(body);
  try {
    const result = await generateContent(prompt);
    if(result instanceof Error) {
      console.log("error", result.message);
      return NextResponse.json({ error: result.message },{ status: 500})
    }
    return result;
  } catch (error) {
    console.log("api error at generate-letter :::",error);
    
    return NextResponse.json({ error: "Internal server error", details: error },{ status: 500})
  }
}
