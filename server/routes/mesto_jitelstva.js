const Router = require('express')
const router = new Router()
const mesto_jitelstvaController = require('../controllers/mesto_jitelstvaController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', mesto_jitelstvaController.create)
router.get('/',mesto_jitelstvaController.getAll)
router.get('/id/:id', mesto_jitelstvaController.getOneId)
router.get('/:dom/:kvartira/:CityId/:StreetId', mesto_jitelstvaController.checkOne)

module.exports = router