const {zapic, dolznost} = require('../models/models')
const {where} = require("sequelize");
const ApiError = require("../error/ApiError");


class ZapicController{
    async create(req, res, next) {
        try{
        const {date, time, cabinet, PacientId, DoctorId} = req.body
        const Zapic = await zapic.create({date, time, cabinet, PacientId, DoctorId})

        return res.json(Zapic)
        } catch (e) {
            return next(ApiError.badRequest('Запись на данное время уже существует'))
        }

    }

    async getAll(req, res) {
        const zapices = await zapic.findAll()
        return res.json(zapices)
    }
    

    async getOnePac(req, res) {
        const {PacientId} = req.params
        const Zapic = await zapic.findAll({
            where: {PacientId},
        })

        return res.json(Zapic)
    }

    async getOneVrach(req, res) {
        const {DoctorId} = req.params
        const Zapic = await zapic.findAll({
            where: {DoctorId},
        })

        return res.json(Zapic)
    }

    async cancelZapic(req, res){
        const {id} = req.params
        await zapic.destroy({
            where: {id}
        })
        res.status(200).end()
    }
}

module.exports = new ZapicController()
