import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMindfulnessTip = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate a short, calming mindfulness tip or a brief 1-step breathing instruction. Keep it under 25 words. Tone: soothing, gentle, encouraging.",
    });
    return response.text || "Breathe in deeply, hold for a moment, and let go.";
  } catch (error) {
    console.error("Error generating tip:", error);
    return "Inhale peace, exhale stress. Try again in a moment.";
  }
};
