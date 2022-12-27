const {preparat, ulica} = require("../models/models");

class PreparatController {

    async create(req, res) {
        const {isRecipe, name} = req.body
        const Preparat = await preparat.create({isRecipe, name})
        return res.json(Preparat)
    }

    async getAll(req, res) {
        let {Limit} = req.query
        Limit = Limit || null
        const preparats = await preparat.findAll({
            limit: Limit
        })
        return res.json(preparats)
    }

    async getOne(req, res) {
        const {id} = req.params
        const preparats = await preparat.findOne({
            where: {id},
        })

        return res.json(preparats)
    }
    async getOneName(req, res) {
        const {name} = req.params
        const preparats = await preparat.findOne({
            where: {name},
        })

        return res.json(preparats)
    }
}

module.exports = new PreparatController()
