const Router = require('express')
const router = new Router()
const diagnozPriemController = require('../controllers/diagnoz_priemController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', diagnozPriemController.create)
router.get('/', diagnozPriemController.getAll)
router.get('/:MedKartId', diagnozPriemController.getAllId)

module.exports = router