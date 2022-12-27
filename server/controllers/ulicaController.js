const {ulica, vrach} = require('../models/models')


class UlicaController{
    async create(req, res) {
        const {nazvanie} = req.body
        const Ulica = await ulica.create({nazvanie})

        return res.json(Ulica)
    }

    async getAll(req, res) {
        let {Limit} = req.query
        Limit = Limit || null
        const ulicas = await ulica.findAll({
            limit: Limit
        })
        return res.json(ulicas)
    }

    async getOneId(req, res) {
        const {id} = req.params
        const Ulica = await ulica.findOne({
            where: {id},
        })

        return res.json(Ulica)
    }

    async getOne(req, res) {
        const {nazvanie} = req.params
        const Ulica = await ulica.findOne({
            where: {nazvanie},
        })

        return res.json(Ulica)
    }
}

module.exports = new UlicaController()
