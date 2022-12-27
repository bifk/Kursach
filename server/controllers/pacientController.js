const {pacient, otdelenie, user} = require('../models/models')
const ApiError = require('../error/ApiError')

class PacientController{
    async create(req, res, next) {
        const {familia, imya, otchestvo, nomer_telefona, nomer_polisa, dob, AdressId, email} = req.body
        const polis = await pacient.findOne({where: {nomer_polisa}})
        if (polis)
        {
            return next(ApiError.badRequest('Пациент с таким номером полиса уже существует'))
        }
        const Pacient = await pacient.create({familia, imya,otchestvo, nomer_polisa, nomer_telefona, dob, AdressId, email})

        return res.json(Pacient)
    }

    async getAll(req, res) {
        const pacients = await pacient.findAll()
        return res.json(pacients)
    }

    async getOne(req, res) {
        const {email} = req.params
        const Pacient = await pacient.findOne({
            where: {email},
        })

        return res.json(Pacient)
    }

    async getOneId(req, res) {
        const {id} = req.params
        const Pacient = await pacient.findOne({
            where: {id},
        })

        return res.json(Pacient)
    }
}

module.exports = new PacientController()
