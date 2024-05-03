const client = require("../index");

client.on('ready', () => {
    console.log(`I am ${client.user.tag}, the best bot & app in the world :skull:`);
    client.user.setStatus("dnd");
    const guildCount = client.guilds.cache.size;
    client.user.setActivity(`Mytho Blacklists`, { type: 'Watching' }); // Shows as "Listening X guilds"

});

