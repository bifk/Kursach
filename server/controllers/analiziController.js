const {analizi, preparat} = require('../models/models')
const ApiError = require('../error/ApiError')

class AnaliziController{
    async create(req, res) {
        const {type} = req.body
        const Analizi = await analizi.create({type})
        return res.json(Analizi)
    }

    async getAll(req, res) {
        const Analizis = await analizi.findAll()
        return res.json(Analizis)
    }

    async getOne(req, res) {
        const {id} = req.params
        const Analizis = await analizi.findOne({
            where: {id},
        })

        return res.json(Analizis)
    }


    async change(req, res){
        const {id ,results} = req.params
        const Analizis = await analizi.update({
            where: id,
            results: results
        })
        return res.json(Analizis)
    }
}

module.exports = new AnaliziController()