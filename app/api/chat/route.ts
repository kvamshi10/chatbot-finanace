import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages ?? [];

    if (!process.env.GEMINI_API_KEY) {
      return new Response(JSON.stringify({ error: "Missing GEMINI_API_KEY" }), { status: 500 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const userPrompt = messages.map((m: any) => m.content).join("\n");

    const result = await model.generateContent(userPrompt);

    return new Response(
      JSON.stringify({ reply: result.response.text() }),
      { status: 200 }
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
}
