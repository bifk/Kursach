const Router = require('express')
const router = new Router()
const gorodController = require('../controllers/gorodController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole(['ADMIN']), gorodController.create)
router.get('/',gorodController.getAll)
router.get('/id/:id', gorodController.getOneId)
router.get('/:nazvanie', gorodController.getOne)

module.exports = router