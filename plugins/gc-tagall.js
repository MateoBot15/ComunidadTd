let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐂𝐎𝐌𝐔𝐍𝐈𝐃𝐀𝐃.𝐓𝐃𝟏𝟐: ${pesan}`
let teks = `𝐈𝐍𝐕𝐎𝐂𝐀𝐍𝐃𝐎 𝐆𝐑𝐔𝐏𝐎 - 𝐀𝐍𝐎𝐓𝐀𝐓𝐄 𝐏𝐋𝐀𝐍𝐓𝐈𝐓𝐀 𝐗𝐃 \n\n❏ ${oi}\n❏ 🫶🏻 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:: \n`
for (let mem of participants) {
teks += `•✨•  @${mem.id.split('@')[0]}\n`}
teks += `🐾@𝐂𝐎𝐌𝐔𝐍𝐈𝐃𝐀𝐃.𝐓𝐃𝟏𝟐`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
