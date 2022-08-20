const fs = require('fs')

fs.readFile(__dirname + '/files/1.txt', 'utf8', (err, dataStr)=>{
    if (err) return  console.log('读取文件失败' + err.message)
    console.log('读取文件成功' + dataStr)
})
// console.log(__dirname)
