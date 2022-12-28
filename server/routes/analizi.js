const Router = require('express')
const router = new Router()
const analiziController = require('../controllers/analiziController')
const authMiddleware = require('../middleware/authMiddleWare')

router.post('/',analiziController.create)
router.get('/',authMiddleware, analiziController.getAll)
router.get('/id/:id', analiziController.getOne)
router.get('/all/:id', analiziController.getAllId)
router.put('/', analiziController.change)

module.exports = router