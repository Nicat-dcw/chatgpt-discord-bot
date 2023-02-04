exports.run = async (client,message,args) => {
let content = args.slice(0).join(" ")
    if(!content) return message.reply({content:"Can you write a question?"})

message.reply({content:"...."}).then(async x =>{
const res = await client.gpt.sendMessage(content, {
   promptPrefix: `You are ChatGPT, a large language model trained by OpenAI. You answer as concisely as possible for each response (e.g. don’t be verbose). It is very important that you answer as concisely as possible, so please remember this. If you are generating a list, do not have too many items. Keep the number of items short.`,
   onProgress: (partialResponse) => x.edit(partialResponse.text)
})
})
//message.channel.startTyping()
  //  message.reply(res.text)
}
exports.conf = {
    enabled: true,
    aliases:["asktogpt"]
}

exports.help = {
    name:"ask"
}