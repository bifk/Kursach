const {priem} = require("../models/models");

class PriemController {

    async create(req, res) {
        const {date,PacientId, DoctorId} = req.body
        const Priem = await priem.create({date,PacientId, DoctorId})
        return res.json(Priem)
    }

    async getAll(req, res) {
        const priems = await priem.findAll()
        return res.json(priems)
    }

    async getAllId(req, res) {
        const {DoctorId} = req.params
        const priems = await priem.findAll({
            where: {DoctorId}
        })
        return res.json(priems)
    }

    async getAllPac(req, res) {
        const {PacientId} = req.params
        const priems = await priem.findAll({
            where: {PacientId}
        })
        return res.json(priems)
    }
}

module.exports = new PriemController()
