let express = require('express')
let verifyToken = require('../middlewares/virfay.token')
const { getAllUsers, register, login, setAdmin, deleteUser, updateUser } = require('../controllers/users.controller')
const verifySuperAdmin = require('../middlewares/verify.super.admin')
const router = express.Router()

router.route("/")
    .get(verifyToken, verifySuperAdmin, getAllUsers)

router.route("/register")
    .post(register)

router.route("/login")
    .post(login)

router.use("/:id", verifyToken)

router.route("/:id")
    .post(verifySuperAdmin, setAdmin)
    .delete(verifySuperAdmin, deleteUser)
    .patch(updateUser)

module.exports = router