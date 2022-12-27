const {vrach, pacient} = require("../models/models");

class VrachController {

    async create(req, res) {
        const {familia, imya, otchestvo, nomer_telefona, cabinet, email, PositionId, DepartmentId, SheduleId} = req.body
        const Vrach = await vrach.create({familia, imya, otchestvo, nomer_telefona, cabinet, email, PositionId, DepartmentId, SheduleId})
        return res.json(Vrach)
    }

    async getAll(req, res) {
        const vraches = await vrach.findAll()
        return res.json(vraches)
    }

    async getOne(req, res) {
        const {email} = req.params
        const Vrach = await vrach.findOne({
            where: {email},
        })

        return res.json(Vrach)
    }

    async getOneId(req, res) {
        const {id} = req.params
        const Vrach = await vrach.findOne({
            where: {id},
        })

        return res.json(Vrach)
    }
}

module.exports = new VrachController()
