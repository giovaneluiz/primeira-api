module.exports.index = function (application, req, res) {
    var bancoModel = new application.src.models.banco()

    bancoModel.getBancos((err, result) => {
        res.render('banco/index', { bancos: result })
    })
}