const {med_zapic} = require('../models/models')


class MedzapController{
    async create(req, res) {
        const {date, text, MedKartId} = req.body
        const Medzap = await med_zapic.create({date, text, MedKartId})

        return res.json(Medzap)
    }

    async getAll(req, res) {
        const medzapics = await med_zapic.findAll()
        return res.json(medzapics)
    }

    async getOne(req, res) {

    }
}

module.exports = new MedzapController()
