const other = (prefix, botName, ownerName) => {
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
┷┯ *〈𝑶𝑻𝑹𝑶𝑺 〉*
   ╽
   ┠≽ *${prefix}send* (𝑒𝑛𝑣𝑖𝑎𝑟)
   ┠≽ *${prefix}modapk* (𝑚𝑜𝑑 𝑎𝑝𝑘)
   ┠≽ *${prefix}wame* (𝑤𝑎𝑚𝑒 𝑑𝑒 𝑢𝑛 𝑛𝑢𝑚𝑒𝑟𝑜)
   ┠≽ *${prefix}trava* (𝑡𝑟𝑎𝑏𝑎) 
   ┠≽ *${prefix}destrava* (𝑞𝑢𝑖𝑡𝑎𝑟 𝑒𝑓𝑒𝑐𝑡𝑜 𝑑𝑒 𝑙𝑠 𝑡𝑟𝑎𝑏𝑎)
   ┠≽ *${prefix}qrcode* <texto> *𝑔𝑒𝑛𝑒𝑟𝑎𝑟 𝑞𝑟 𝑐𝑜𝑑𝑖𝑔𝑜)
   ┠≽ *${prefix}timer* (𝑒𝑠𝑡𝑎𝑏𝑙𝑒𝑐𝑒𝑟 𝑡𝑒𝑟𝑚𝑝𝑜𝑟𝑖𝑧𝑎𝑑𝑜𝑟(
   ┠≽ *${prefix}fml* (𝑓𝑚𝑙)
   ┠≽ *${prefix}fml2* (𝑓𝑚2)
   ╿ *${ownerName}*,
   ╰╼≽ *𝐶𝑟𝑒𝑎𝑑𝑜𝑟 © ${botName}`
}
exports.other = other
