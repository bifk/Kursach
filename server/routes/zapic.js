const Router = require('express')
const router = new Router()
const zaoicController = require('../controllers/zapicController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', zaoicController.create)
router.get('/', zaoicController.getAll)
router.get('/pac/:PacientId', zaoicController.getOnePac)
router.get('/vrach/:DoctorId', zaoicController.getOneVrach)
router.delete('/:id', zaoicController.cancelZapic)

module.exports = router


