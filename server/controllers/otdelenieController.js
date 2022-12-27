const {otdelenie} = require("../models/models");

class OtdelenieController {

    async create(req, res) {
        const {corpus, zaved, name} = req.body
        const Otdelenie = await otdelenie.create({corpus, zaved, name})
        return res.json(Otdelenie)
    }

    async getAll(req, res) {
        let {Limit} = req.query
        Limit = Limit || null
        const otdelenies = await otdelenie.findAll({limit: Limit})
        return res.json(otdelenies)
    }

    async getOne(req, res) {
        const {name} = req.params
        const Otdelenie = await otdelenie.findOne({
            where: {name},
        })

        return res.json(Otdelenie)
    }

    async getOneId(req, res) {
        const {id} = req.params
        const Otdelenie = await otdelenie.findOne({
            where: {id},
        })

        return res.json(Otdelenie)
    }
}

module.exports = new OtdelenieController()
