const xp = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
do anime e cena curta
╿
┷┯ *〈 LEVEL 〉*
   ╽
   ┠≽ *${prefix}nivel*
   ┃ *Desc* : 𝐶ℎ𝑒𝑐𝑎 𝑡𝑢 𝑛𝑖𝑣𝑒𝑙
   ┠──────────────╼
   ┠≽ *${prefix}leveling* <1/0>
   ┃ *Desc* : 𝐴𝑐𝑡𝑖𝑣𝑎𝑟 𝑛𝑖𝑣𝑒𝑙
   ┠──────────────╼
   ┠≽ *${prefix}mining*
   ┃ *Desc* : 𝑀𝑖𝑛𝑒𝑟𝑖𝑎 𝑋𝑃
   ┠──────────────╼
   ┠≽ *${prefix}evento* <1/0>
   ┃ *Desc* : 𝐴𝑐𝑡𝑖𝑣𝑎𝑟 𝑒𝑣𝑒𝑛𝑡𝑜
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}
--------------------------------
Note: Você pode coletar XP e aumentar seu nível conversando com qualquer pessoa do grupo que tenha ativado o recurso de nivel.`
}
exports.xp = xp
