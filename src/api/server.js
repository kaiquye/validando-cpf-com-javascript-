const express = require('express')
const ValidarCpfController = require('../core/controllers/validade-cpf.controller')

 class Server {

    constructor() {
        this.app = express()
        this.middleware()
        this.routes()
    }

    middleware() {
        this.app.use(express.json())
    }

    routes(){
        this.app.post('/', ValidarCpfController.ValidadeCpf)
    }
}

module.exports = new Server().app