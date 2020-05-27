// Welcome to my tutorial series. :) We are learning discord.js v12 today :DDD

// Let's define our modules
const Discord = require("discord.js");
const Client = require("./Classes/Client");
const client = new Client();
const loadCMD = require("./functions/loadCMD");

loadCMD(client);
// some mistakes I did but you can have access to the github repository so your good.
client.on("message", async(message) => {
    if(message.author.bot) return;

    const prefix = client.config.prefix;

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const commands = args.shift().toLowerCase();

    const cmd = client.commands.get(commands);

    if(!cmd) return;
    try {
        cmd.run(client, message, args, prefix);
    }catch(err) {
        message.channel.send(`An error occured. Please report to the developers.`)
    }
});

client.on("ready", async() => {
    console.log(`Logged in as ${client.user.tag}, with ${client.guilds.cache.size} guilds, ${client.users.cache.size} users, ${client.channels.cache.size} channels.`);
});


client.login(client.config.token);


