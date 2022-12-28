const Router = require('express')
const router = new Router()
const ulicaController = require('../controllers/ulicaController')
const checkRole = require('../middleware/checkRoleMiddleware')
const gorodController = require("../controllers/GorodController");
const authMiddleware = require('../middleware/authMiddleWare')


router.post('/', ulicaController.create)
router.get('/', authMiddleware,ulicaController.getAll)
router.get('/id/:id', ulicaController.getOneId)
router.get('/:nazvanie', ulicaController.getOne)

module.exports = router