const imagemaker = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┯ *〈 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪𝑰𝑶𝑵 𝑫𝑬𝑳 𝑩𝑶𝑻 〉*
   ╽
   ┠≽ *𝑃𝑟𝑒𝑓𝑖𝑗𝑜* : 「  ${prefix}  」
   ┠≽ *𝐶𝑟𝑒𝑎𝑑𝑜𝑟* : ${ownerName}
   ┠≽ *𝑉𝑒𝑟𝑠𝑖𝑜𝑛* : 0.0.5
   ╿
┯┷ *〈 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪𝑰𝑶𝑵 〉*
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
┷┯ *〈 𝑬𝑫𝑰𝑻𝑶𝑹 𝑫𝑬 𝑰𝑴𝑨𝑮𝑬𝑵𝑬𝑺 〉*
   ╽
   ┠≽ *${prefix}bpink* <text>
   ┃ *Desc* : 𝐻𝑎𝑐𝑒𝑟 𝐵𝑙𝑎𝑐𝑘𝑃𝑖𝑛𝑘 𝑖𝑚𝑎𝑔𝑒𝑛
   ┠──────────────╼
   ┠≽ *${prefix}snowwrite* <text|text>
   ┃ *Desc* : 𝐸𝑠𝑐𝑟𝑖𝑏𝑖𝑟 𝑒𝑛 𝑙𝑎 𝑛𝑖𝑒𝑣𝑒
   ┠──────────────╼
   ┠≽ *${prefix}3dtext* <text>
   ┃ *Desc* : 𝐻𝑎𝑐𝑒𝑟 𝑡𝑒𝑥𝑡𝑜 3𝐷
   ┠──────────────╼
   ┠≽ *${prefix}firetext* <text>
   ┃ *Desc* : 𝐻𝑎𝑐𝑒𝑟 𝑡𝑒𝑥𝑡𝑜 𝑑𝑒 𝑓𝑢𝑒𝑔𝑜
   ┠──────────────╼
   ┠≽ *${prefix}glitch* <text|text>
   ┃ *Desc* : 𝐻𝑎𝑐𝑒𝑟 𝑡𝑒𝑥𝑡𝑜 𝑑𝑒 𝑔𝑙𝑖𝑡𝑐ℎ
   ┠──────────────╼
   ┠≽ *${prefix}shadow* <text>
   ┃ *Desc* : 𝐻𝑎𝑐𝑒𝑟 𝑡𝑒𝑥𝑡𝑜 𝑑𝑒 𝑠𝑜𝑚𝑏𝑟𝑎
   ┠──────────────╼
   ┠≽ *${prefix}burnpaper* <text>
   ┃ *Desc* : 𝐻𝑎𝑐𝑒𝑟 𝑞𝑢𝑒𝑚𝑎𝑟 𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒 𝑝𝑎𝑝𝑒𝑙
   ┠──────────────╼
   ┠≽ *${prefix}coffee* <text>
   ┃ *Desc* : 𝐻𝑎𝑐𝑒𝑟 𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒 𝑐𝑎𝑓𝑒
   ┠──────────────╼
   ┠≽ *${prefix}lovepaper* <text>
   ┃ *Desc* : 𝐻𝑎𝑐𝑒𝑟 𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒 𝑎𝑚𝑜𝑟
   ┠──────────────╼
   ┠≽ *${prefix}woodblock* <text>
   ┃ *Desc* : 𝐻𝑎𝑐𝑒𝑟 𝑡𝑒𝑥𝑡𝑜 𝑒𝑛 𝑡𝑟𝑜𝑛𝑐𝑜
   ┠──────────────╼
   ┠≽ *${prefix}qowheart* <text>
   ┃ *Desc* : 𝐻𝑎𝑐𝑒𝑟 𝑐𝑜𝑡𝑖𝑧𝑎𝑐𝑖𝑜𝑛𝑒𝑠 𝑒𝑛 𝑙𝑎 𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒 𝑐𝑜𝑟𝑎𝑧𝑜𝑛𝑒𝑠 𝑑𝑒 𝑚𝑎𝑑𝑒𝑟𝑎
   ┠──────────────╼
   ┠≽ *${prefix}mutgrass* <text>
   ┃ *Desc* : 𝐻𝑎𝑐𝑒𝑟 𝑚𝑒𝑛𝑠𝑎𝑗𝑒 𝑑𝑒𝑏𝑎𝑗𝑜 𝑑𝑒 𝑙𝑎 𝑙𝑚𝑎𝑔𝑒𝑛 𝑑𝑒 𝑙𝑎 ℎ𝑖𝑒𝑟𝑏𝑎
   ┠──────────────╼
   ┠≽ *${prefix}undergocean* <text>
   ┃ *Desc* : 𝐶𝑟𝑒𝑎𝑟 𝑚𝑒𝑛𝑠𝑎𝑗𝑒 𝑐𝑜𝑛 𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒 𝑜𝑐𝑒𝑎𝑛𝑜 𝑠𝑢𝑏𝑡𝑒𝑟𝑟𝑎𝑛𝑒𝑜
   ┠──────────────╼
   ┠≽ *${prefix}woodenboards* <text>
   ┃ *Desc* : 𝐻𝑎𝑐𝑒𝑟 𝑢𝑛𝑎 𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒 𝑡𝑎𝑏𝑙𝑎𝑠 𝑑𝑒 𝑚𝑎𝑑𝑒𝑟𝑎
   ┠──────────────╼
   ┠≽ *${prefix}wolfmetal* <text>
   ┃ *Desc* : 𝐻𝑎𝑐𝑒𝑟 𝑢𝑛𝑎 𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒 𝑚𝑒𝑡𝑎𝑙 𝑑𝑒 𝑙𝑜𝑏𝑜
   ┠──────────────╼
   ┠≽ *${prefix}metalictglow* <text>
   ┃ *Desc* : 𝐻𝑎𝑐𝑒𝑟 𝑞𝑢𝑒 𝑡𝑒𝑥𝑡𝑜 𝑚𝑒𝑡𝑎𝑙𝑖𝑐𝑜 𝑟𝑒𝑧𝑝𝑙𝑎𝑛𝑑𝑒𝑧𝑐𝑎 𝑒𝑛 𝑙𝑎 𝑖𝑚𝑎𝑔𝑒𝑛
   ┠──────────────╼
   ┠≽ *${prefix}8bit* <text|text>
   ┃ *Desc* : 𝐻𝑎𝑐𝑒𝑟 𝑢𝑛𝑎 𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒 8 𝑏𝑖𝑡𝑠
   ┠──────────────╼
   ┠≽ *${prefix}herrypotter* <text>
   ┃ *Desc* : 𝐻𝑎𝑐𝑒𝑟 𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒 𝐻𝑎𝑟𝑟𝑦 𝑃𝑜𝑡𝑡𝑒𝑟
   ╿ *${ownerName}*,
   ╰╼≽ *𝐶𝑟𝑒𝑎𝑑𝑜𝑟 © ${botName}`
}
exports.imagemaker = imagemaker
