require('dotenv').config();

const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`)
});

bot.on('message',msg => {
    if (msg.content === 'Salve salve Família ...') {
        msg.reply('Salvee...')
    }
});

bot.login(process.env.TOKEN_DISCORD)
