const Router = require('express')
const router = new Router()
const otdelenieController = require('../controllers/otdelenieController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', otdelenieController.create)
router.get('/',otdelenieController.getAll)
router.get('/:name', otdelenieController.getOne)
router.get('/id/:id', otdelenieController.getOneId)

module.exports = router