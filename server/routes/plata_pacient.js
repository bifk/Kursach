const Router = require('express')
const router = new Router()
const plataPacientController = require('../controllers/plata_pacientController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', plataPacientController.create)
router.get('/', plataPacientController.getAll)
router.get('/:PacientId', plataPacientController.getOneId)

module.exports = router