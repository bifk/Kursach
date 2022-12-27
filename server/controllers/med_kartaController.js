const {med_kartochka, pacient} = require("../models/models");

class Med_kartaController {

    async create(req, res) {
        const {date, PacientId} = req.body
        const Karta = await med_kartochka.create({date, PacientId})
        return res.json(Karta)
    }

    async getAll(req, res) {
        const Karts = await med_kartochka.findAll()
        return res.json(Karts)
    }

    async getOneId(req, res) {
        const {id} = req.params
        const Karts = await med_kartochka.findOne({
            where: {id},
        })

        return res.json(Karts)
    }

    async getOnePacId(req, res) {
        const {PacientId} = req.params
        const Karts = await med_kartochka.findOne({
            where: {PacientId},
        })

        return res.json(Karts)
    }
}

module.exports = new Med_kartaController()
