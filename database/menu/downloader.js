const downloader = (prefix, botName, ownerName) => {
	return `
┏ *〈 ${botName} 〉*
╿
┯ *〈 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪𝑰𝑶𝑵 𝑫𝑬𝑳 𝑩𝑶𝑻 〉*
   ╽
   ┠≽ *𝑃𝑟𝑒𝑓𝑖𝑗𝑜* : 「  ${prefix}  」
   ┠≽ *𝐶𝑟𝑒𝑎𝑑𝑜𝑟* : ${ownerName}
   ┠≽ *𝑉𝑒𝑟𝑠𝑖𝑜𝑛* : 0.0.5
   ╿
┯┷ *〈 𝐼𝑁𝐹𝑂𝑅𝑀𝐴𝐶𝐼𝑂𝑁 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : 𝑀𝑜𝑠𝑡𝑟𝑎𝑟 𝑑𝑒𝑡𝑎𝑙𝑙𝑒𝑠 𝑑𝑒𝑙 𝑏𝑜𝑡
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : 𝑀𝑜𝑠𝑡𝑟𝑎𝑟 𝑢𝑠𝑢𝑎𝑟𝑖𝑜𝑠 𝑏𝑙𝑜𝑞𝑢𝑒𝑎𝑑𝑜𝑠
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : 𝑀𝑜𝑠𝑡𝑟𝑎𝑟 𝑡𝑜𝑑𝑜𝑠 𝑙𝑜𝑠 𝑢𝑠𝑢𝑎𝑟𝑖𝑜𝑠 𝑑𝑒𝑙 𝑐ℎ𝑎𝑡
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : 𝑀𝑜𝑠𝑡𝑟𝑎𝑟 𝑣𝑒𝑙𝑜𝑐𝑖𝑑𝑎𝑑 𝑑𝑒𝑙 𝑏𝑜𝑡
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : 𝑅𝑒𝑝𝑜𝑟𝑡𝑎𝑟 𝑏𝑢𝑔 𝑜 𝑒𝑟𝑟𝑜𝑟
╿
┷┯ *〈 𝐷𝐸𝑆𝐶𝐴𝑅𝐺𝐴𝑆 〉*
   ╽
   ┠≽ *${prefix}pinterest* <pesquisar>
   ┃ *Desc* : 𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑢𝑛𝑎 𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒 𝑝𝑖𝑛𝑠𝑡𝑒𝑟𝑒𝑠𝑡
   ┠──────────────╼
   ┠≽ *${prefix}fb* <linkfb>
   ┃ *Desc* : 𝐵𝑎𝑗𝑎𝑟 𝑣𝑖𝑑𝑒𝑜 𝑑𝑒 𝑓𝑎𝑐𝑒𝑏𝑜𝑜𝑘
   ┠──────────────╼
   ┠≽ *${prefix}ytmp3* <linkyt>
   ┃ *Desc* : 𝐵𝑎𝑗𝑎𝑟 𝑣𝑖𝑑𝑒𝑜 𝑑𝑒 𝑦𝑜𝑢𝑡𝑢𝑏𝑒 𝑒𝑛 𝑚𝑝3
   ┠──────────────╼
   ┠≽ *${prefix}ytmp4* <linkyt>
   ┃ *Desc* : 𝐵𝑎𝑗𝑎𝑟 𝑣𝑖𝑑𝑒𝑜 𝑑𝑒 𝑦𝑜𝑢𝑡𝑢𝑏𝑒 𝑒𝑛 𝑓𝑜𝑟𝑚𝑎𝑡𝑜 𝑑𝑒 𝑣𝑖𝑑𝑒𝑜
   ┠──────────────╼
   ┠≽ *${prefix}tiktok* <linktiktok>
   ┃ *Desc* : 𝐵𝑎𝑗𝑎𝑟 𝑣𝑖𝑑𝑒𝑜 𝑑𝑒 𝑡𝑖𝑘 𝑡𝑜𝑘
   ╿ *${ownerName}*,
   ╰╼≽ *𝐶𝑟𝑒𝑎𝑑𝑜𝑟 © ${botName}`
}
exports.downloader = downloader
