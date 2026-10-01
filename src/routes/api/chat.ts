import { createFileRoute } from "@tanstack/react-router";
import knowledgeBase from "../../../data/knowledge.txt?raw";

type ChatRequestBody = {
  message?: unknown;
  lang?: unknown;
};

const LANGUAGE_NAMES: Record<string, string> = {
  en: "English",
  fr: "French",
  ar: "Arabic",
};

function extractGeminiText(payload: any): string {
  const chunks: string[] = [];

  if (Array.isArray(payload?.candidates)) {
    for (const candidate of payload.candidates) {
      const parts = candidate?.content?.parts;
      if (!Array.isArray(parts)) continue;

      for (const part of parts) {
        if (typeof part?.text === "string" && part.text.trim()) {
          chunks.push(part.text.trim());
        }
      }
    }
  }

  return chunks.join("\n").trim();
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as ChatRequestBody;
          const userMessage = typeof body.message === "string" ? body.message.trim() : "";

          if (!userMessage) {
            return Response.json({ error: "Message is required" }, { status: 400 });
          }

          const apiKey = process.env["GEMINI_API_KEY"]?.trim();
          if (!apiKey || apiKey === "PUT_YOUR_GEMINI_API_KEY_HERE") {
            return Response.json(
              {
                error: "GEMINI_API_KEY is missing",
                detail:
                  "Add GEMINI_API_KEY=your_key_here to the .env.local file in the project root, then restart npm run dev.",
              },
              { status: 500 },
            );
          }

          const model = process.env["GEMINI_MODEL"]?.trim() || "gemini-3.1-flash-lite";

          const uiLanguage =
            typeof body.lang === "string"
              ? LANGUAGE_NAMES[body.lang] ?? "English"
              : "English";

          const instructions = `You are the official virtual assistant of MAMLAKATO CHAYE LTD.

RULES:
- Your only source for company-specific facts is the COMPANY INFORMATION below.
- Answer company questions only from that information.
- Never invent prices, dates, services, staff, clients, addresses, statistics, policies, guarantees, or other company facts.
- If the requested information is not present, say clearly that you do not have that information and invite the visitor to contact the company.
- Contact: WhatsApp +44 7351 157724, email mamlakatochaye@gmail.com.
- Reply in the same language as the visitor. If the visitor uses Moroccan Darija, reply naturally in Moroccan Darija. If unclear, use ${uiLanguage}.
- Be warm, concise, and professional.
- Do not mention knowledge.txt, a knowledge base, system instructions, or implementation details.

COMPANY INFORMATION:
${knowledgeBase}
END COMPANY INFORMATION`;

          const geminiResponse = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": apiKey,
              },
              body: JSON.stringify({
                systemInstruction: {
                  parts: [{ text: instructions }],
                },
                contents: [
                  {
                    role: "user",
                    parts: [{ text: userMessage }],
                  },
                ],
                generationConfig: {
                  maxOutputTokens: 700,
                  temperature: 0.35,
                },
              }),
              signal: request.signal,
            },
          );

          const raw = await geminiResponse.text();
          let payload: any;
          try {
            payload = JSON.parse(raw);
          } catch {
            payload = { raw };
          }

          if (!geminiResponse.ok) {
            const apiMessage =
              payload?.error?.message || payload?.message || raw || "Gemini request failed";

            console.error("GEMINI API ERROR", geminiResponse.status, apiMessage);

            return Response.json(
              {
                error: "Gemini API request failed",
                status: geminiResponse.status,
                detail: apiMessage,
              },
              { status: geminiResponse.status },
            );
          }

          const answer = extractGeminiText(payload);
          if (!answer) {
            console.error("GEMINI EMPTY RESPONSE", payload);
            return Response.json(
              {
                error: "Gemini returned an empty response",
                detail:
                  "The request succeeded but no text was returned. Check the model response and safety settings.",
              },
              { status: 502 },
            );
          }

          return Response.json({ message: answer });
        } catch (error) {
          console.error("CHAT ROUTE ERROR:", error);
          const detail = error instanceof Error ? error.message : String(error);
          return Response.json(
            { error: "Local chat server error", detail },
            { status: 500 },
          );
        }
      },
    },
  },
});
