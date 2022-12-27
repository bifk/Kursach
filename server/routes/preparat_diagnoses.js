const Router = require('express')
const router = new Router()
const preparatDiagnosesController = require('../controllers/preparat_diagnosesController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', preparatDiagnosesController.create)
router.get('/', preparatDiagnosesController.getAll)
router.get('/:DiagnosisId', preparatDiagnosesController.getOneId)

module.exports = router