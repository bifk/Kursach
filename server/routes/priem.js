const Router = require('express')
const router = new Router()
const priemController = require('../controllers/priemController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole(['ADMIN','vrach']), priemController.create)
router.get('/', priemController.getAll)
router.get('/:DoctorId', priemController.getAllId)
router.get('/pac/:PacientId', priemController.getAllPac)

module.exports = router