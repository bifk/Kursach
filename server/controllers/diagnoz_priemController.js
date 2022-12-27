const {plata_pacient, diagnoz_priem} = require("../models/models");
const uuid = require("uuid");
const path = require('path')
const ApiError = require("../error/ApiError");

class Diagnoz_priemController {

    async create(req, res, next) {
        try {
            const {DiagnosisId, PriemId} = req.body
            const Diagnoz_priem = await diagnoz_priem.create({DiagnosisId, PriemId})
            return res.json(Diagnoz_priem)

        } catch (e){
            next(ApiError.badRequest(''))
        }
    }
    async getAll(req, res) {
        const Diagnoz_priem = await diagnoz_priem.findAll()
        return res.json(Diagnoz_priem)
    }

    async getAllId(req, res) {
        const {MedKartId} = req.params
        const Diagnoz_priem = await diagnoz_priem.findAll({
            where: {MedKartId},
        })

        return res.json(Diagnoz_priem)
    }
}

module.exports = new Diagnoz_priemController()
