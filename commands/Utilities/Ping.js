const {} = require('discord.js');

module.exports = {
    config: {
        name: "ping",
        description: "Shows the current ping",
        usage: "Ping",
        category: "Utilities",
        accessableby: "Member",
        aliases: ["latency"]
    },
    run: async (client, message, args, user, language, prefix) => {

        message.channel.send('pinging').then(m => {
            m.edit(`🏓Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
          });
        }
};