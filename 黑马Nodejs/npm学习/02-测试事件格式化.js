const custom = require('./01-时间格式化')
const dt = new Date()
const newDate = custom.dateFormat(dt)
console.log(newDate)