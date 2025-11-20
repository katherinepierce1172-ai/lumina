import { GoogleGenAI, Type } from "@google/genai";
import { StyleRecommendation } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getStyleAdvice = async (
  userDescription: string, 
  hairType: string
): Promise<StyleRecommendation[]> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      The user is asking for hairstyle advice.
      User Description/Preferences: "${userDescription}"
      Current Hair Type: "${hairType}"
      
      Based on this, suggest 3 distinct hairstyles that would suit them.
      Be professional, trendy, and specific.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction: "You are a world-class senior hair stylist and image consultant at a high-end salon called Lumina. Your tone is helpful, chic, and encouraging.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              styleName: { type: Type.STRING },
              description: { type: Type.STRING },
              suitability: { type: Type.STRING, description: "Why this fits the user's face/hair type" },
              maintenanceLevel: { type: Type.STRING, enum: ["Low", "Medium", "High"] },
              tips: { type: Type.STRING, description: "Styling tip or product recommendation" }
            },
            required: ["styleName", "description", "suitability", "maintenanceLevel", "tips"]
          }
        }
      }
    });

    if (response.text) {
      let jsonStr = response.text.trim();
      
      // Robustly extract JSON array if the model includes markdown or preamble
      const match = jsonStr.match(/\[[\s\S]*\]/);
      if (match) {
        jsonStr = match[0];
      } else {
        // Fallback cleanup for markdown code blocks if regex fails
        if (jsonStr.startsWith('```json')) {
          jsonStr = jsonStr.replace(/^```json\s*/, '').replace(/\s*```$/, '');
        } else if (jsonStr.startsWith('```')) {
          jsonStr = jsonStr.replace(/^```\s*/, '').replace(/\s*```$/, '');
        }
      }
      
      return JSON.parse(jsonStr) as StyleRecommendation[];
    }
    return [];
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to get style advice. Please try again.");
  }
};