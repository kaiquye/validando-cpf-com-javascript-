const validarCpfUseCases = require('../useCases/validar-cpf.useCases')

class ValidadeCpfController {
    ValidadeCpf(request, response){
       const data =  validarCpfUseCases.validade(request.body.cpf)
       if(!data) return response.status(200).json('cpf invalido.')
       return response.status(200).json('cpf valido')
    }
}

module.exports = new ValidadeCpfController()