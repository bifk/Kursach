const Router = require('express')
const router = new Router()
const analiziController = require('../controllers/analiziController')

router.post('/',analiziController.create)
router.get('/',analiziController.getAll)
router.get('/id/:id', analiziController.getOne)
router.put('/', analiziController.change)

module.exports = router