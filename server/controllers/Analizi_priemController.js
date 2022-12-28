const {plata_pacient, analizi_priem} = require("../models/models");
const uuid = require("uuid");
const path = require('path')
const ApiError = require("../error/ApiError");

class Analizi_priemController {

    async create(req, res, next) {
        try {
            const { AnalyAsisId, PriemId} = req.body
            const Analizi_priem = await analizi_priem.create({AnalyAsisId, PriemId})
            return res.json(Analizi_priem)

        } catch (e){
            console.log(e)
            next(ApiError.badRequest(e))
        }
    }
    async getAll(req, res) {
        const Analizi_priem = await analizi_priem.findAll()
        return res.json(Analizi_priem)
    }

    async getOneId(req, res) {
        const {PriemId} = req.params
        const Analizi_priem = await analizi_priem.findAll({
            where: {PriemId},
        })

        return res.json(Analizi_priem)
    }
}

module.exports = new Analizi_priemController()
