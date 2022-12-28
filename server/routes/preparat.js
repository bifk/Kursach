const Router = require('express')
const router = new Router()
const preparatController = require('../controllers/preparatController')
const checkRole = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleWare')

router.post('/',checkRole(['ADMIN','vrach']), preparatController.create)
router.get('/', preparatController.getAll)
router.get('/id/:id', preparatController.getOne)
router.get('/:name', preparatController.getOneName)

module.exports = router