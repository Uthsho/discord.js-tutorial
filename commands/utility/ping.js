const {MessageEmbed} = require("discord.js");
module.exports = {
    name: "ping",
    category: "utility",
    description: "Check your bot pings",
    usage: "ping",
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setDescription(`If you can see this message, the bot is either slow or the discord api is slow.`);
        const m = await message.channel.send(embed);
        embed.setDescription(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms, API Latency is ${client.ws.ping}ms`)
        m.edit(embed)
    }
}