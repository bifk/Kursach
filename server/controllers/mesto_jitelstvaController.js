const {mesto_jitelstva} = require('../models/models')


class Mesto_jitelstvaController{
    async create(req, res) {
        const {dom, kvartira, CityId, StreetId} = req.body
        const Mesto = await mesto_jitelstva.create({dom, kvartira, CityId, StreetId})

        return res.json(Mesto)
    }

    async getAll(req, res) {
        const mesta = await mesto_jitelstva.findAll()
        return res.json(mesta)
    }

    async getOneId(req, res) {
        const {id} = req.params
        const Mesto = await mesto_jitelstva.findOne({
            where: {id},
        })

        return res.json(Mesto)
    }

    async checkOne(req, res) {
        const {dom, kvartira, CityId, StreetId} = req.params
        const Mesto = await mesto_jitelstva.findOne({
            where: {dom, kvartira, CityId, StreetId},
        })

        return res.json(Mesto)
    }
}

module.exports = new Mesto_jitelstvaController()
