const information = (prefix, botName, ownerName) => {
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
┷┯ *〈 INFORMATION 〉*
   ╽
   ┠≽ *${prefix}cdidioma*
   ┃ *Desc* : 𝑀𝑜𝑠𝑡𝑟𝑎𝑟 𝑐𝑜𝑑𝑖𝑔𝑜𝑠 𝑑𝑒 𝑖𝑑𝑖𝑜𝑚𝑎
   ┠──────────────╼
   ┠≽ *${prefix}cdpaís*
   ┃ *Desc* : 𝑀𝑜𝑠𝑡𝑟𝑎𝑟 𝑐𝑜𝑑𝑖𝑔𝑜𝑠 𝑑𝑒 𝑝𝑎𝑖𝑠
   ┠──────────────╼
   ┠≽ *${prefix}infoclima* <área>
   ┃ *Desc* : 𝐸𝑛𝑣𝑖𝑎𝑟 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝑚𝑒𝑡𝑒𝑎𝑟𝑜𝑙𝑜𝑔𝑖𝑐𝑎
   ┠──────────────╼
   ┠≽ *${prefix}infoterremoto*
   ┃ *Desc* : 𝐼𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝑠𝑜𝑏𝑟𝑒 𝑡𝑒𝑟𝑟𝑒𝑚𝑜𝑡𝑜𝑠
   ┠──────────────╼
   ┠≽ *${prefix}covidpaís* <país>
   ┃ *Desc* : 𝐼𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝑑𝑒𝑙 𝐶𝑜𝑣𝑖𝑑-19
   ╿ *${ownerName}*,
   ╰╼≽ *𝐶𝑟𝑒𝑎𝑑𝑜𝑟 © ${botName}`
}
exports.information = information
