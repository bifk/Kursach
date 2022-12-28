const Router = require('express')
const router = new Router()
const plataController = require('../controllers/plataController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole(['ADMIN']), plataController.create)
router.get('/', plataController.getAll)
router.get('/id/:id', plataController.getOneId)

module.exports = router