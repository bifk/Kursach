const {plata_pacient, analizi_kart_zapic} = require("../models/models");
const uuid = require("uuid");
const path = require('path')
const ApiError = require("../error/ApiError");

class Analizi_kart_zapicController {

    async create(req, res, next) {
        try {
            const {MedKartId, AnalyAsisId, ZapicId} = req.body
            const Analizi_kart = await analizi_kart_zapic.create({MedKartId, AnalyAsisId, ZapicId})
            return res.json(Analizi_kart)

        } catch (e){
            console.log(e)
            next(ApiError.badRequest(e))
        }
    }
    async getAll(req, res) {
        const Analizi_kart = await analizi_kart_zapic.findAll()
        return res.json(Analizi_kart)
    }

    async getOneId(req, res) {
        const {PacientId} = req.params
        const Analizi_kart = await analizi_kart_zapic.findAll({
            where: {PacientId},
        })

        return res.json(Analizi_kart)
    }
}

module.exports = new Analizi_kart_zapicController()
