import axios from "axios";

const gpt3 = axios.create({
  baseURL: "https://api.openai.com/",
  headers: {
    Authorization: `Bearer ${process.env.GPT_SECRET}`,
    "OpenAI-Organization": process.env.GPT_ORGANIZATION,
  },
});

export const generateDescription = async (text: string) => {
  try {
    return await gpt3.post("/v1/completions", {
      prompt: `Escreva a descrição de uma publicação no linkedin sobre a ${text}`,
      model: "text-davinci-003",
      temperature: 0.9,
      max_tokens: 1500,
      top_p: 1,
    });
  } catch (err) {
    console.log(err);
  }
};
