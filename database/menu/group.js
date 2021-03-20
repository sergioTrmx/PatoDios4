const group = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┯ * 〈𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪𝑰𝑶𝑵 𝑫𝑬𝑳 𝑩𝑶𝑻〉 *
   ╽
   ┠≽ * 𝑃𝑟𝑒𝑓𝑖𝑗𝑜 *: 「$ {prefijo}」
   ┠≽ * 𝐶𝑟𝑒𝑎𝑑𝑜𝑟 *: $ {ownerName}
   ┠≽ * 𝑉𝑒𝑟𝑠𝑖𝑜𝑛 *: 0.0.5
   ╿
┯┷ * 〈𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪𝑰𝑶𝑵〉 *
╽
┠≽ * $ {prefix} info *
╿
┷┯ *〈 𝑮𝑹𝑼𝑷𝑶 〉*
   ╽
   ┠≽ *${prefix}abrirgp*
   ┃ *Desc* : 𝐴𝑏𝑟𝑖𝑟 𝑔𝑟𝑢𝑝𝑜
   ┠──────────────╼
   ┠≽ *${prefix}fechargp*
   ┃ *Desc* : 𝐶𝑒𝑟𝑟𝑎𝑟 𝑔𝑟𝑢𝑝𝑜
   ┠──────────────╼
   ┠≽ *${prefix}promover* <@tag>
   ┃ *Desc* : 𝐷𝑎𝑟 𝑎𝑑𝑚𝑖𝑛
   ┠──────────────╼
   ┠≽ *${prefix}rebaixar* <@tag>
   ┃ *Desc* : 𝑄𝑢𝑖𝑡𝑎𝑟 𝑎𝑑𝑚𝑖𝑛
   ┠──────────────╼
   ┠≽ *${prefix}marcar*
   ┃ *Desc* : 𝑀𝑒𝑛𝑐𝑖𝑜𝑛𝑎𝑟 𝑎 𝑡𝑜𝑑𝑜𝑠 𝑙𝑜𝑠 𝑚𝑖𝑒𝑚𝑏𝑟𝑜𝑠
   ┠──────────────╼
   ┠≽ *${prefix}marcar2*
   ┃ *Desc* : 𝑀𝑒𝑛𝑐𝑖𝑜𝑛𝑎𝑟 𝑎 𝑡𝑜𝑑𝑜𝑠 𝑙𝑜𝑠 𝑚𝑖𝑒𝑚𝑏𝑟𝑜𝑠
   ┠──────────────╼
   ┠≽ *${prefix}marcar3*
   ┃ *Desc* : 𝑀𝑒𝑛𝑐𝑖𝑜𝑛𝑎𝑟 𝑎 𝑡𝑜𝑑𝑜𝑠 𝑙𝑜𝑠 𝑚𝑖𝑒𝑚𝑏𝑟𝑜𝑠
   ┠──────────────╼
   ┠≽ *${prefix}marcar4*
   ┃ *Desc* : 𝑀𝑒𝑛𝑐𝑖𝑜𝑛𝑎𝑟 𝑎 𝑡𝑜𝑑𝑜𝑠 𝑙𝑜𝑠 𝑚𝑖𝑒𝑚𝑏𝑟𝑜𝑠
   ┠──────────────╼
   ┠≽ *${prefix}marcar5*
   ┃ *Desc* : 𝑀𝑒𝑛𝑐𝑖𝑜𝑛𝑎𝑟 𝑎 𝑡𝑜𝑑𝑜𝑠 𝑙𝑜𝑠 𝑚𝑖𝑒𝑚𝑏𝑟𝑜𝑠
   ┠──────────────╼
   ┠≽ *${prefix}add* <12542123926>
   ┃ *Desc* : 𝐴𝑛̃𝑎𝑑𝑖𝑟 𝑚𝑖𝑒𝑚𝑏𝑟𝑜
   ┠──────────────╼
   ┠≽ *${prefix}banir* <@tag>
   ┃ *Desc* : 𝐸𝑥𝑝𝑢𝑙𝑠𝑎𝑟 𝑚𝑖𝑒𝑚𝑏𝑟𝑜
   ┠──────────────╼
   ┠≽ *${prefix}adminlist*
   ┃ *Desc* : 𝑉𝑒𝑟 𝑙𝑖𝑠𝑡𝑎 𝑑𝑒 𝑎𝑑𝑚𝑖𝑛𝑠
   ┠──────────────╼
   ┠≽ *${prefix}linkgc*
   ┃ *Desc* : 𝑀𝑜𝑠𝑡𝑟𝑎𝑟 𝑙𝑖𝑛𝑘 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜
   ┠──────────────╼
   ┠≽ *${prefix}leave*
   ┃ *Desc* : 𝐷𝑒𝑠𝑎𝑐𝑡𝑖𝑣𝑎𝑟 𝑒𝑙 𝑏𝑜𝑡 𝑑𝑒 𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜
   ┠──────────────╼
   ┠≽ *${prefix}bemvindo* <1/0>
   ┃ *Desc* : 𝐴𝑐𝑡𝑖𝑣𝑎𝑟 𝑏𝑖𝑒𝑛𝑣𝑒𝑛𝑖𝑑𝑎
   ┠──────────────╼
   ┠≽ *${prefix}nsfw* <1/0>
   ┃ *Desc* : 𝐴𝑐𝑡𝑢𝑣𝑎𝑟 𝑛𝑠𝑓𝑤
   ┠──────────────╼
   ┠≽ *${prefix}delete*
   ┃ *Desc* : 𝐵𝑜𝑟𝑟𝑎𝑟 𝑚𝑒𝑛𝑠𝑎𝑗𝑒 𝑑𝑒𝑙 𝑏𝑜𝑡
   ┠──────────────╼
   ┠≽ *${prefix}simih* <1/0>
   ┃ *Desc* : 𝐷𝑎𝑟𝑙𝑒 𝑣𝑖𝑑𝑎 𝑎𝑙 𝑏𝑜𝑡:𝑣
   ┠──────────────╼
   ┠≽ *${prefix}tagme*
   ┃ *Desc* : 𝑀𝑒𝑛𝑐𝑖𝑜𝑛𝑎𝑟𝑡𝑒
   ┠──────────────╼
   ┠≽ *${prefix}donogrupo*
   ┃ *Desc* : 𝑉𝑒𝑟 𝑝𝑟𝑜𝑝𝑖𝑒𝑡𝑎𝑟𝑖𝑜 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜
   ┠──────────────╼
   ┠≽ *${prefix}antilinkgroup* <1/0>
   ┃ *Desc* : 𝐴𝑛𝑡𝑖𝑙𝑖𝑛𝑘
   ┠──────────────╼
   ┠≽ *${prefix}antiracismo* <on/off>
   ┃ *Desc* : 𝐴𝑛𝑡𝑖 𝑅𝑎𝑐𝑖𝑠𝑚𝑜
   ┠──────────────╼
   ┠≽ *${prefix}antipalavrao* <activar/desactivar>
   ┃ *Desc* : 𝐴𝑛𝑡𝑖 𝑙𝑖𝑛𝑘-𝑃𝑎𝑙𝑎𝑏𝑟𝑎
   ┠──────────────╼
   ┠≽ *${prefix}listapalavral*
   ┃ *Desc* : 𝑀𝑜𝑠𝑡𝑟𝑎𝑟 𝑙𝑖𝑠𝑡𝑎 𝑑𝑒 𝑝𝑎𝑙𝑎𝑏𝑟𝑎𝑠
   ╿ *${ownerName}*,
   ╰╼≽ *𝐶𝑟𝑒𝑎𝑑𝑜𝑟 © ${botName}`
}
exports.group = group
