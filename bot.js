const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDkyNzUxODY2Nzg3MTM1NDg4.Dov5QQ.zmNK3HZE7JkzP4Cyt1QKvkLknWU);
