import {
    GoogleGenerativeAI,
    HarmBlockThreshold,
    HarmCategory,
  } from "@google/generative-ai";
  import instructions from "~/assests/instructions";

  import config from "~/config/config";
  
  const genAI = new GoogleGenerativeAI(config.genAIApiKey);
  
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
    model: "gemini-1.5-flash",
    systemInstruction: instructions,
    safetySettings,
  });
 

  
 export async function generateLetter(prompt: string) {
    const result = await model.generateContent(prompt);
  
    if (!result?.response) {
      return new Response(
        JSON.stringify({ error: "No response from AI model" }),
        { status: 503, headers: { "Content-Type": "application/json" } }
      );
    }
    const data = result.response.text();
    try {
      const response = getObj(data);
      console.log("Letter generation success..");
      return new Response(JSON.stringify({ response }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (parseError) {
      return new Response(
        JSON.stringify({
          error: "Failed to parse AI response as JSON",
          details: parseError,
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
  
  function getPrompt(data: any): string {
    let promptStr = "";
    for (let key in data) {
      promptStr += `${key}: ${data[key]}\n`;
    }
    return promptStr;
  }
  
  function getObj(data: string): object {
    let jsonString = data.replace(/```json|```/g, "").trim();
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      throw new Error("Invalid JSON format");
    }
  }
  
  
  
  // const sampleData: object = {
  //   "sender-name": "Rameshwar Patil",
  //   "sender-address": "SYBCA(science) Div B Roll no : [ROLL_NO]",
  //   "sender-city": "Dr.DY Patil Arts Commerce & Science Pimpri Pune",
  //   "sender-state": "Maharastra",
  //   "sender-zip": "411018",
  //   "sender-email": "rameshwarpatil9689@gmail.com",
  //   "sender-phone": "9890472354",
  //   "recipient-name": "Dr Ranjit Patil",
  //   "recipient-title": "Principal",
  //   "recipient-company": "Dr.DY Patil Arts Commerce & Science Pimpri Pune",
  //   "recipient-address": "Sant Tukram Nagar",
  //   "recipient-city": "Pimpri",
  //   "recipient-state": "Maharastra",
  //   "recipient-zip": "411018",
  //   "sender-title": "Student",
  //   prompt: "Write a leave application letter ",
  // };