const {vrach, pacient, analizi} = require("../models/models");

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

    async changeDol(req, res){
        const {id, PositionId} = req.body
        const vraches = await vrach.update({ PositionId: PositionId }, { where: {id: id} })
        return res.json(vraches)
    }

    async changeRas(req, res){
        const {id, SheduleId} = req.body
        const vraches = await vrach.update({ SheduleId: SheduleId }, { where: {id: id} })
        return res.json(vraches)
    }
}

module.exports = new VrachController()
