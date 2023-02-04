const { Client, Collection } = require("discord.js");
const config = require("./config")
const commands = new Collection();
const aliases = new Collection();
const { readdirSync } = require("fs")
 const client = new Client({ intents:[32767] });
require("./src/starters/gpt")(client)
client.container = {
  commands,
  aliases
};
client.config = config;

module.exports = class Bot {
    constructor({token}){
        if(!token) throw new Error("[LOG] Write Bot Token")
this.token = token;
        
    }
    
    init(){
       const commands = readdirSync("./src/commands/").filter(file => file.endsWith(".js"));
  for (const file of commands) {
    const props = require(`./src/commands/${file}`);
    console.log(`Loaded: ${props.help.name}. 👌`);
    client.container.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.container.aliases.set(alias, props.help.name);
    }); 
  }
      const eventFiles = readdirSync("./src/events/").filter(file => file.endsWith(".js"));
  for (const file of eventFiles) {
    const eventName = file.split(".")[0];
    console.log(`Loaded Event: ${eventName}. 👌`);
    const event = require(`./src/events/${file}`);
    client.on(eventName, event.bind(null, client));
  }
      client.login(this.token)
    }
}