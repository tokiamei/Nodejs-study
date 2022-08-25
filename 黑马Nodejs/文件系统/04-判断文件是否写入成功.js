const fs = require('fs')

fs.writeFile('f:/files/3.txt', '疲倦了', (err)=>{
    if (err) return console.log('文件写入失败' + err.message)
    console.log('文件写入成功')
})