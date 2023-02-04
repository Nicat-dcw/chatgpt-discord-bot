module.exports = async (client) => {
const { ChatGPTAPI } = await import('chatgpt')
const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY
  })
client.gpt = api;
}