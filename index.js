const Bot = require("./bot")
const bot = new Bot({
token: process.env.token
})

bot.init()