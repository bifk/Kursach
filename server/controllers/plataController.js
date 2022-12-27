const {platnaia_usluga, gorod} = require("../models/models");
const uuid = require("uuid");
const path = require('path')
const ApiError = require("../error/ApiError");

class PlataController {

    async create(req, res, next) {
        try {
            const {description, name, price} = req.body
            const Plata = await platnaia_usluga.create({description, name, price})
            return res.json(Plata)

        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        const Plata = await platnaia_usluga.findAll()
        return res.json(Plata)
    }

    async getOneId(req, res) {
        const {id} = req.params
        const Plata = await platnaia_usluga.findOne({
            where: {id},
        })

        return res.json(Plata)
    }
}

module.exports = new PlataController()
