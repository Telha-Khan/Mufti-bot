const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready',  () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("You habibi", {type: "WATCHING"})
    
    client.guilds.cache.forEach((guild) => {
        console.log(guild.name)
        guild.channels.cache.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
    })

    let generalChannel = client.channels.cache.get("750743355985756173")
    
    generalChannel.send("AssalamuAlaikum habibi")
    
    client.on("message", (message) => {
        if (message.content.startsWith("!kick")) {
          const member = message.mentions.members.first()
          if (!member) {
            return message.reply(
              `Who are you trying to kick? You must mention a user.`
            )
          }
          if (!member.kickable) {
            return message.reply(`I can't kick this user. Sorry!`)
          }
          return member
            .kick()
            .then(() => message.reply(`${member.user.tag} was kicked.`))
            .catch((error) => message.reply(`Sorry, an error occured.`))
        }
      })
      

})

client.login(process.env.token)
