const express = require('express');
const app = express();
const chalk = require("chalk");

app.get('/', (req, res) => {
    res.send('Hello Express app!')
});

app.use('/ping', (req, res) => {
    res.send(new Date());
});

app.listen(3000, () => {
    console.log(chalk.greenBright.bold('The server is now running and listening on port 3000.'));
});

const { Client, Collection } = require("discord.js");
const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: false },
});

module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

require("./handler")(client);

client.once('ready', () => {
    console.log(chalk.greenBright.bold("Bot is ready!"));
});

client.login(process.env.token || client.config.token).catch(err => {
    console.error(err.message);
});
