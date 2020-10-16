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
              `Who are you trying to kick habibi? You must mention a user.`
            )
          }
          if (!member.kickable) {
            return message.reply(`I can't kick him habibi, don't waste my time again`)
          }
          return member
            .kick()
            .then(() => message.reply(`${member.user.tag} was removed for being too haram.`))
            .catch((error) => message.reply(`Sorry, an error occured.`))

        }
      })
      

})

client.login("NzY2NDQyMTU2MTQ3MzQzMzYy.X4ja4Q.PFQTdLBempbK0JTpC7PjGTmpylQ")
