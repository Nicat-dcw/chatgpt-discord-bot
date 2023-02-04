const Bot = require("./bot")
const config = require("./config")
const bot = new Bot({
token: client.config.token
})

bot.init()