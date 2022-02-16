let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085759662798]
│ • Indosat Ooredoo [085798542403]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/Nurutomo
│ • https://saweria.co/ariffb
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
