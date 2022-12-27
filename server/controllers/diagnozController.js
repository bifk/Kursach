const {diagnoz, plata_pacient} = require("../models/models");
const uuid = require("uuid");
const path = require('path')
const ApiError = require("../error/ApiError");

class DiagnozController {

    async create(req, res, next) {
        try {
            let Diagnoz
            const {stepen_boli, name} = req.body
            if (req.files !== null) {
                let {img} = req.files
                let fileName = uuid.v4() + ".jpg"
                img.mv(path.resolve(__dirname, '..', 'static', fileName))

                Diagnoz = await diagnoz.create({stepen_boli, name, img: fileName})
            }
            else
                Diagnoz = await diagnoz.create({stepen_boli, name})
            return res.json(Diagnoz)

        } catch (e){
            next(ApiError.badRequest(e.message))
    }
    }
    async getAll(req, res) {
        const diagnozis = await diagnoz.findAll()
        return res.json(diagnozis)
    }

    async getOneId(req, res) {
        const {id} = req.params
        const diagnoziz = await diagnoz.findOne({
            where: {id},
        })

        return res.json(diagnoziz)
    }
}

module.exports = new DiagnozController()
