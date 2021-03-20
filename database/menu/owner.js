const owner = (prefix, botName, ownerName) => {
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
┷┯ *〈 𝑬𝑿𝑪𝑳𝑼𝑺𝑰𝑽𝑶 𝑷𝑨𝑹𝑨 𝑬𝑳 𝑪𝑹𝑬𝑨𝑫𝑶𝑹 〉*
   ╽
   ┠≽ *${prefix}setprefix* <text/optional>
   ┃ *Desc* : 𝐶𝑎𝑚𝑏𝑖𝑎𝑟 𝑝𝑟𝑒𝑓𝑖𝑗𝑜
   ┠──────────────╼
   ┠≽ *${prefix}block* <@tag>
   ┃ *Desc* : 𝑏𝑙𝑜𝑞𝑢𝑒𝑎𝑟 𝑢𝑠𝑢𝑎𝑟𝑖𝑜
   ┠──────────────╼
   ┠≽ *${prefix}desblock* <@tag>
   ┃ *Desc* : 𝑑𝑒𝑠𝑏𝑙𝑜𝑞𝑢𝑒𝑎𝑟 𝑢𝑠𝑢𝑎𝑟𝑖𝑜
   ┠──────────────╼
   ┠≽ *${prefix}bc* <text>
   ┃ *Desc* : 𝑡𝑟𝑎𝑠𝑚𝑖𝑡𝑖𝑟 𝑝𝑎𝑟𝑎 𝑢𝑠𝑢𝑎𝑟𝑖𝑜𝑠 𝑑𝑒𝑙 𝑏𝑜𝑡
   ┠──────────────╼
   ┠≽ *${prefix}clone* <@tag>
   ┃ *Desc* : 𝑐𝑙𝑜𝑛𝑎𝑟 𝑝𝑒𝑟𝑓𝑖𝑙
   ┠──────────────╼
   ┠≽ *${prefix}addpalavrao* <texto>
   ┃ *Desc* : 𝑎𝑛̃𝑎𝑑𝑖𝑟 𝑝𝑎𝑙𝑎𝑏𝑟𝑎
   ┠──────────────╼
   ┠≽ *${prefix}delpalavrao*
   ┃ *Desc* : 𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑟 𝑝𝑎𝑙𝑎𝑏𝑟𝑎
   ┠──────────────╼
   ┠≽ *${prefix}clearall
   ┃ *Desc* : 𝑙𝑖𝑚𝑝𝑖𝑎𝑟 𝑡𝑜𝑑𝑜
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.owner = owner
