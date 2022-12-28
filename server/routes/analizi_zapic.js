const Router = require('express')
const router = new Router()
const analiziZapicController = require('../controllers/analizi_zapicController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', analiziZapicController.create)
router.get('/', analiziZapicController.getAll)
router.get('/:ZapicId', analiziZapicController.getOneId)

module.exports = router