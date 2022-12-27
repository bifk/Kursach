const Router = require('express')
const router = new Router()
const vrachController = require('../controllers/vrachController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',vrachController.create)
router.get('/', vrachController.getAll)
router.get('/:email', vrachController.getOne)
router.get('/id/:id', vrachController.getOneId)

module.exports = router