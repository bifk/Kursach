const Router = require('express')
const router = new Router()
const raspisanieController = require('../controllers/raspisanieController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',raspisanieController.create)
router.get('/', raspisanieController.getAll)
router.get('/:den/:time', raspisanieController.getOne)
router.get('/:id', raspisanieController.getOneId)

module.exports = router