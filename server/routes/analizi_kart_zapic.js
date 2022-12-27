const Router = require('express')
const router = new Router()
const analiziKartZapicController = require('../controllers/analizi_kart_zapicController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', analiziKartZapicController.create)
router.get('/', analiziKartZapicController.getAll)
router.get('/:PacientId', analiziKartZapicController.getOneId)

module.exports = router