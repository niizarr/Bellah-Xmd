//base by DGXeon
//recode by GIDDY TENNOR 
//YouTube: @GIDDYTENNOR


const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'Bellah~Luw01CrT#kTNz6KoZ78q0dpaV7fh2gbhva4hZDEty2s86RUpD7j0' 
//owmner v card
global.ytname = "YT: N1z4r - !" //ur yt chanel name
global.socialm = "IG: @mouhammed.tahiri" //ur github or insta name
global.location = "Morocco" //ur location

//new
global.botname = process.env.BOT_NAME ||'Nezzaarrr!' //enter your  bot name here
global.ownernumber = process.env.OWNER_NUMBER ||'212691649677' //ur owner number
global.ownername = '© Nezzaaarr!' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.wagc = "https://chat.whatsapp.com/CzFlFQrkdzxFw0pxCBYM7H" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.themeemoji = '🪀'
global.wm = "Nezzaaarr!"
global.botscript = 'https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D' //'https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES' //script link
global.packname = process.env.PACK_NAME ||"VolTah Xmd" //enter your stickers author name here
global.author = "N1z4r"
global.creator = "212691649677@s.whatsapp.net"
global.xprefix = process.env.BOT_PREFIX ||'.'
global.hituet = 0

//bot settings 
global.autoblocknumber = process.env.AUTOBLOCK_NUMBER || '263,234' //set autoblock country code
global.antiforeignnumber = process.env.ANTIFOREIGN_NUMBER || '' //set anti foreign number country code
global.mode = process.env.MODE || 'public' //set bot public/private
global.anticall = process.env.ANTI_CALL || 'false' //bot blocks user when called
global.autostatusview = process.env.AUTOSW_VIEW || 'true' //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.autorecording = process.env.AUTO_RECORDING || 'false'
global.autotyping = process.env.AUTO_TYPING || 'true'

global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	owner: 'Nezzaarrr! owner only<\>',
    admin: 'lbot machi  admin ya wld lq7ba<\>',
    group: 'feature for group only<\>',
    done: 'safii ✓',
    error: 'Error azb !',
    success: 'sd9aat •'
}
//thumbnail


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
