var username = '电击兔'
// function generateElectricity() {
//         console.log('电力十足')
//     }

// console.log(module)
// module.exports

// 向 module.exports 对象上挂载 username 属性
module.exports.username = username

module.exports.generateElectricity = function() {
    console.log('电力十足')
}

module.exports = {
    name: 'sss',
    age: '22'
}

