import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import instructions from "./instructions";
import { NextResponse } from "next/server";
import { FieldValues } from "react-hook-form";
const genAI = new GoogleGenerativeAI(process.env.NEXT_GEN_AI_API_KEY as string);
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
];
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction: instructions,
  safetySettings,
});

export async function generateContent(prompt: string) {
  const result = await model.generateContent(prompt);
  if (!result?.response) {
    return NextResponse.json(
      { error: "No response from AI model" },
      { status: 503 }
    );
  }
  const data = result.response.text();
  console.log(data);
  
  try {
    const response = getObj(data);
    console.log("Letter generation success..");
    return NextResponse.json(response, { status: 200 });
  } catch (parseError) {
    return NextResponse.json(
      {
        error: "Failed to parse AI response as JSON",
        details: parseError,
      },
      { status: 500 }
    );
  }
}

function getPrompt(data: FieldValues): string {
  let promptStr = "";
  for (const key in data) {
    promptStr += `${key}: ${data[key]}\n`;
  }
  return promptStr;
}

function getObj(data: string): object {
  const jsonString = data.replace(/```json|```/g, "").trim();
  try {
    console.log(jsonString);
    return JSON.parse(jsonString);
  } catch (error) {
    console.log(error);
    
    throw new Error("Invalid JSON format");
  }
}

export { getPrompt, getObj };
