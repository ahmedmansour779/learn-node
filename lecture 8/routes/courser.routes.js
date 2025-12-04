let express = require('express')
// const { editOneCourse } = require('../controllers/courses.controller')
const { middlewarePostCourse, middlewareEditCourse } = require('../middlewares/courses.middleware')
const { getOneCourse, addOneCourse, deleteOneCourse, updateCourse, getAllCourses, deleteAllCourses } = require('../controllers/coursesMongodb.controller')
const verifyAdmin = require('../middlewares/verify.admin')
const verifyToken = require('../middlewares/virfay.token')
const verifySuperAdmin = require('../middlewares/verify.super.admin')
// const { getAllCourses } = require('../controllers/courses.controller')
const router = express.Router()

router.route("/")
    .get(getAllCourses)
    .post(verifyToken, verifyAdmin, middlewarePostCourse(), addOneCourse)
    .delete(verifyToken, verifySuperAdmin, deleteAllCourses)

router.route("/:id")
    .get(getOneCourse)
    .delete(verifyToken, verifyAdmin, deleteOneCourse)
    .patch(verifyToken, verifyAdmin, middlewareEditCourse(), updateCourse)

module.exports = router