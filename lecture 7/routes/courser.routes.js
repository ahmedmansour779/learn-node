let express = require('express')
// const { editOneCourse } = require('../controllers/courses.controller')
const { middlewarePostCourse, middlewareEditCourse } = require('../middlewares/courses.middleware')
const { getOneCourse, addOneCourse, deleteOneCourse, updateCourse, getAllCourses, deleteAllCourses } = require('../controllers/coursesMongodb.controller')
// const { getAllCourses } = require('../controllers/courses.controller')
const router = express.Router()

router.route("")
    .get(getAllCourses)
    .post(middlewarePostCourse(), addOneCourse)
    .delete(deleteAllCourses)

router.route("/:id")
    .get(getOneCourse)
    .delete(deleteOneCourse)
    .patch(middlewareEditCourse(), updateCourse)

module.exports = router