const {plata_pacient, preparat_diagnoz} = require("../models/models");
const uuid = require("uuid");
const path = require('path')
const ApiError = require("../error/ApiError");

class Preparat_diagnosesController {

    async create(req, res, next) {
        try {
            const {PreparatId, DiagnosisId} = req.body
            const Preparat_diagnoses = await preparat_diagnoz.create({PreparatId, DiagnosisId})
            return res.json(Preparat_diagnoses)

        } catch (e){
            next(ApiError.badRequest('У вас уже есть данная услуга'))
        }
    }
    async getAll(req, res) {
        const Preparat_diagnoses = await preparat_diagnoz.findAll()
        return res.json(Preparat_diagnoses)
    }

    async getOneId(req, res) {
        const {DiagnosisId} = req.params
        const Preparat_diagnoses = await preparat_diagnoz.findAll({
            where: {DiagnosisId},
        })

        return res.json(Preparat_diagnoses)
    }
}

module.exports = new Preparat_diagnosesController()
