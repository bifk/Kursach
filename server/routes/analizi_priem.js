const Router = require('express')
const router = new Router()
const analiziPriemController = require('../controllers/Analizi_priemController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', analiziPriemController.create)
router.get('/', analiziPriemController.getAll)
router.get('/:PriemId', analiziPriemController.getOneId)

module.exports = router