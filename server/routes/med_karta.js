const Router = require('express')
const router = new Router()
const medController = require('../controllers/med_kartaController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', medController.create)
router.get('/',medController.getAll)
router.get('/:id', medController.getOneId)
router.get('/pac/:PacientId', medController.getOnePacId)

module.exports = router