const {raspisanie, otdelenie} = require("../models/models");

class RaspisanieController {

    async create(req, res) {
        const {den, time} = req.body
        const Raspisanie = await raspisanie.create({den, time})
        return res.json(Raspisanie)
    }

    async getAll(req, res) {
        let {Limit} = req.query
        Limit = Limit || null
        const raspisanies = await raspisanie.findAll({limit: Limit})
        return res.json(raspisanies)
    }

    async getOne(req, res) {
        const {den, time} = req.params
        const Raspisanie = await raspisanie.findOne({
            where: {den, time}
        })

        return res.json(Raspisanie)
    }

    async getOneId(req, res) {
        const {id} = req.params
        const Raspisanie = await raspisanie.findOne({
            where: {id}
        })

        return res.json(Raspisanie)
    }
}

module.exports = new RaspisanieController()
