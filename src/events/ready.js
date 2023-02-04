module.exports = (client) => {
    console.log("[LOG] Bot interacted with Discord was Successfully!")
    client.user.setActivity(client.config.presence.title)
}