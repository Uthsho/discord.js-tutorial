// we are gonna make a class which is how I do :)

const {Client} = require("discord.js");
const Enmap = require("enmap");

module.exports = class Bot extends Client {
    constructor() {
        super({
            fetchAllMembers: true
        });
        this.config = require("./../config.js");
        this.commands = new Enmap();

    }
}