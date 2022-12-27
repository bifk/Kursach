const {plata_pacient} = require("../models/models");
const uuid = require("uuid");
const path = require('path')
const ApiError = require("../error/ApiError");

class Plata_pacientController {

    async create(req, res, next) {
        try {
            const {PacientId, PayFunctionId} = req.body
            const Plata_pacient = await plata_pacient.create({PacientId, PayFunctionId})
            return res.json(Plata_pacient)

        } catch (e){
            next(ApiError.badRequest('У вас уже есть данная услуга'))
        }
    }
    async getAll(req, res) {
        const Plata_pacient = await plata_pacient.findAll()
        return res.json(Plata_pacient)
    }

    async getOneId(req, res) {
        const {PacientId} = req.params
        const Plata_pacient = await plata_pacient.findAll({
            where: {PacientId},
        })

        return res.json(Plata_pacient)
    }
}

module.exports = new Plata_pacientController()
