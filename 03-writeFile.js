// 1.导入 fs 文件模块系统
const fs = require('fs')

// 2.调用 fs.writeFile() 方法，写入文件内容
//   参数 1：文件的存放路径
//   参数 2：文件写入的内容
//   参数 3：回调函数
fs.writeFile('./files/2.txt', '哥斯拉大战金刚', (err)=>{
    // 2.1 如果文件写入成功，则错误信息为 null
    // 2.2 如果文件写入失败，则打印错误对象
    console.log(err)
}) 


