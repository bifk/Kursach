const Router = require('express')
const router = new Router()
const pacientController = require('../controllers/pacientController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',  pacientController.create)
router.get('/', pacientController.getAll)
router.get('/:email', pacientController.getOne)
router.get('/id/:id', pacientController.getOneId)

module.exports = router