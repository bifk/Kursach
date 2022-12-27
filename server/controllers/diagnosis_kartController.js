const {plata_pacient, diagnoz_kartochka} = require("../models/models");
const uuid = require("uuid");
const path = require('path')
const ApiError = require("../error/ApiError");

class Diagnosis_kartController {

    async create(req, res, next) {
        try {
            const {date, MedKartId, DiagnosisId} = req.body
            const Diagnosis_kart = await diagnoz_kartochka.create({date, MedKartId, DiagnosisId})
            return res.json(Diagnosis_kart)

        } catch (e){
            next(ApiError.badRequest(''))
        }
    }
    async getAll(req, res) {
        const Diagnosis_kart = await diagnoz_kartochka.findAll()
        return res.json(Diagnosis_kart)
    }

    async getAllId(req, res) {
        const {MedKartId} = req.params
        const Diagnosis_kart = await diagnoz_kartochka.findAll({
            where: {MedKartId},
        })

        return res.json(Diagnosis_kart)
    }
}

module.exports = new Diagnosis_kartController()
