const Router = require('express')
const router = new Router()
const dolznostController = require('../controllers/dolznostController')
const checkRole = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleWare')

router.post('/',checkRole(['ADMIN']), dolznostController.create)
router.get('/', dolznostController.getAll)

router.get('/:name', dolznostController.getOne)
router.get('/id/:id', dolznostController.getOneId)

module.exports = router