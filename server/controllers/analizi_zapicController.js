const {plata_pacient, analizi_zapic} = require("../models/models");
const uuid = require("uuid");
const path = require('path')
const ApiError = require("../error/ApiError");

class Analizi_zapicController {

    async create(req, res, next) {
        try {
            const { AnalyAsisId, ZapicId} = req.body
            const Analizi_kart = await analizi_zapic.create({AnalyAsisId, ZapicId})
            return res.json(Analizi_kart)

        } catch (e){
            console.log(e)
            next(ApiError.badRequest(e))
        }
    }
    async getAll(req, res) {
        const Analizi_kart = await analizi_zapic.findAll()
        return res.json(Analizi_kart)
    }

    async getOneId(req, res) {
        const {ZapicId} = req.params
        const Analizi_kart = await analizi_zapic.findAll({
            where: {ZapicId},
        })

        return res.json(Analizi_kart)
    }
}

module.exports = new Analizi_zapicController()
