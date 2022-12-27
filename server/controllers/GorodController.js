const {gorod, vrach} = require('../models/models')


class GorodController{
    async create(req, res) {
        const {nazvanie} = req.body
        const Gorod = await gorod.create({nazvanie})

        return res.json(Gorod)
    }

    async getAll(req, res) {
        let {Limit} = req.query
        Limit = Limit || null
        const gorods = await gorod.findAll({
            limit: Limit
        })
        return res.json(gorods)
    }

    async getOneId(req, res) {
        const {id} = req.params
        const Gorod = await gorod.findOne({
            where: {id},
        })

        return res.json(Gorod)
    }

    async getOne(req, res) {
        const {nazvanie} = req.params
        const Gorod = await gorod.findOne({
            where: {nazvanie},
        })

        return res.json(Gorod)
    }
}

module.exports = new GorodController()
