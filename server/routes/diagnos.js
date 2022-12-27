const Router = require('express')
const router = new Router()
const diagnozController = require('../controllers/diagnozController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole(['ADMIN','vrach']), diagnozController.create)
router.get('/', diagnozController.getAll)
router.get('/id/:id', diagnozController.getOneId)

module.exports = router