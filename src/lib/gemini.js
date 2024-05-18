
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-latest",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];
  
  async function run() {
    console.log("Gemini api key", apiKey)
    const chatSession = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [
            {text: "Imagine you categorize blog posts especially news as verified, not sure or false. the posts can be news, blogs of various topics or just fun facts. In each blog you recieve,  just return \"verified\" or \"not sure\" or \"False\""},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, I'm ready to categorize blog posts as \"verified\", \"not sure\", or \"false\". \n\nPlease give me the blog post content, and I'll do my best to analyze it and return the appropriate label. \n\n**Here are some factors I will consider:**\n\n* **Source:** Is the source reputable? Does it have a history of accuracy?\n* **Evidence:**  Does the post provide supporting evidence for its claims?\n* **Fact-checking:** Can I find corroborating information from other reliable sources?\n* **Context:** Does the post present a balanced perspective? Are there any potential biases?\n* **Logic:** Do the arguments and conclusions make sense? \n\n**Important Note:** I am an AI language model and not a human fact-checker. My analysis is based on the information I have access to and my understanding of the world.  While I strive to be accurate, there may be situations where I am unable to verify information or reach a definitive conclusion. \n"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());
  }
  
  run();