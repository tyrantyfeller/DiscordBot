const Discord = require('discord.js')
const bot = new Discord.Client()

const token = 'ODk2NDQ4NjA4NzQ2OTk1NzEy.YWHQ0w.Vfz1fT6aCW_pefPNBPGh3N4Jc1w';

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`)
});

bot.on('message',msg => {
    if (msg.content === 'Salve salve Família ...') {
        msg.reply('Salvee...')
    }
})
bot.login(token)
