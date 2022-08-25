// 1.导入文件模块
const fs = require('fs')
// 2.调用 fs.readFile() 读取文件内容
fs.readFile('D:\\VS code code\\Node.js\\files\\成绩.txt', 'utf8', (err, dataStr)=>{
    // 3.判断文件是否读取成功
    if (err) return console.log('文件读取失败' + err.message)
    console.log('文件读取成功----' + dataStr)

    // 4.1 先把成绩的数据，按照空格进行分割
    const arrOld = dataStr.split(' ')
    // console.log(arrOld)
    // 4.2 循环分割后的数组，对每一项数据，进行字符串的替换操作
    const arrNew = []
    arrOld.forEach((item)=>{
        arrNew.push(item.replace('=', ':'))
    })
    console.log(arrNew)


// 4.3 把新数组的每一项，进行合并，得到一个新的字符串
const newStr = arrNew.join('\r\n')
console.log(newStr)

// 5.调用 fs.writeFile() 把处理好的数据写到新文件中
fs.writeFile('./files/新的成绩.txt', newStr, (err)=>{
    if (err) return console.log('文件写入失败' + err.message)
    console.log('文件写入成功')
})
})