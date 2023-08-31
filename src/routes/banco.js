module.exports = function (application) {
    application.get('/', (req, res) => {
        application.src.controllers.banco.index(application, req, res)
    })
}

