const { prefix } = require("../../config")
module.exports = async (client, message) => {
  const { container } = client;
  if (message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // If the member on a guild is invisible or not cached, fetch them.
  if (message.guild && !message.member) await message.guild.members.fetch(message.author);

  // Get the user or member's permission level from the elevation
  //const level = permlevel(message);

  const cmd = container.commands.get(command) || container.commands.get(container.aliases.get(command));
  if (!cmd) return;

  if (cmd && !message.guild && cmd.conf.guildOnly)
    return message.channel.send("This command is unavailable via private message. Please run this command in a guild.");

  if (!cmd.conf.enabled) return;
  try {
    await cmd.run(client, message, args);
  
  } catch (e) {
    console.error(e);
  }
};