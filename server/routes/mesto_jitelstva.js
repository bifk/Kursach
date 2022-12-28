const Router = require('express')
const router = new Router()
const mesto_jitelstvaController = require('../controllers/mesto_jitelstvaController')
const checkRole = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleWare')

router.post('/', mesto_jitelstvaController.create)
router.get('/', authMiddleware ,mesto_jitelstvaController.getAll)
router.get('/id/:id', mesto_jitelstvaController.getOneId)
router.get('/:dom/:kvartira/:CityId/:StreetId', mesto_jitelstvaController.checkOne)

module.exports = router