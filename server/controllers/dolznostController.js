const {dolznost, pacient} = require("../models/models");

class DolznostController {

    async create(req, res) {
        const {name, salary} = req.body
        const Dolznost = await dolznost.create({name, salary})
        return res.json(Dolznost)
    }

    async getAll(req, res) {
        let {Limit} = req.query
        Limit = Limit || null
        const dolznosts = await dolznost.findAll({limit: Limit})
        return res.json(dolznosts)
    }

    async getOne(req, res) {
        const {name} = req.params
        const Dolznost = await dolznost.findOne({
            where: {name},
        })

        return res.json(Dolznost)
    }

    async getOneId(req, res) {
        const {id} = req.params
        const Dolznost = await dolznost.findOne({
            where: {id},
        })

        return res.json(Dolznost)
    }
}

module.exports = new DolznostController()
