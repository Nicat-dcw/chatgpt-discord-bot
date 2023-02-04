module.exports = async (client) => {
const { ChatGPTAPI } = await import('chatgpt')
const api = new ChatGPTAPI({
    apiKey: client.config.OPENAI_API_KEY
  })

// Made By Cheeini
client.gpt = api;
}