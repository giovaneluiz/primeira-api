const fs = require("fs")

class banco {
    constructor() { }
    getBancos(callback) {
        fs.readFile('./data/bancos.json', 'utf8', function (err, result) {
            var data = []
            
            if (!err) {
                var obj = JSON.parse(result)            
            }   

            obj.bancos.forEach(banco => {
                if (i >= 0) {
                    data[i] = banco
                    i--
                }
            })
            callback(err, obj)
        })
    }
}

module.exports = function () {
    return banco
}