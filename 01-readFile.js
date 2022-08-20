// 1.导入 fs 模块，来操作文件
const fs = require('fs')

// 2.调用 fs.readFile() 方法读取文件
//   参数 1：读取文件的路径
//   参数 2：读取文件时采用的编码格式，一般采用默认的 utf-8
//   参数 3：回调函数，拿到读取失败和成功的结果 err dataStr
fs.readFile('./files/11.txt', 'utf8', (err, dataStr)=>{
    // 2.1 打印失败的结果
    // 如果读取成功，则 err 的值为 null
    // 如果读取失败，则 err 的值为错误对象，dataStr 的值为 undefined
    console.log(err) 
    console.log('-----')
    // 2.2 打印成功的结果
    console.log(dataStr)
})
