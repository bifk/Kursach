const Router = require('express')
const router = new Router()
const diagnosisKartController = require('../controllers/diagnosis_kartController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', diagnosisKartController.create)
router.get('/', diagnosisKartController.getAll)
router.get('/:MedKartId', diagnosisKartController.getAllId)

module.exports = router