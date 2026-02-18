
import { GoogleGenAI, Type } from "@google/genai";
import { Candidate } from "./types";

// Always use process.env.API_KEY directly as specified in guidelines
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCandidateInsight = async (candidate: Candidate, jobContext?: string) => {
  const ai = getAI();
  // Fixed property access errors:
  // - candidate.title -> candidate.headline
  // - candidate.experience -> candidate.totalExperience
  // - candidate.recentCompany -> candidate.history[0]?.company
  const prompt = `
    Analyze this candidate profile for a professional recruiter:
    Name: ${candidate.name}
    Title: ${candidate.headline}
    Skills: ${candidate.skills.join(', ')}
    Experience: ${candidate.totalExperience} years
    Summary: ${candidate.summary}
    Recent Company: ${candidate.history[0]?.company || 'N/A'}
    
    ${jobContext ? `Target Job Requirements: ${jobContext}` : ''}
    
    Provide a professional, concise "Recruiter's Insight" (max 3 sentences) highlighting their key strengths and potential fit. Also, suggest 2 tailored interview questions for this candidate.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            insight: { type: Type.STRING },
            interviewQuestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["insight", "interviewQuestions"]
        }
      }
    });

    // Access the text property directly on the response object
    const text = response.text || "{}";
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      insight: "Failed to generate AI insights. Please try again later.",
      interviewQuestions: []
    };
  }
};
