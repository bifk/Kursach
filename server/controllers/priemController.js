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

    async getOne(req, res) {

    }
}

module.exports = new PriemController()
