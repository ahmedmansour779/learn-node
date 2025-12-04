let express = require('express')
// const { editOneCourse } = require('../controllers/courses.controller')
const { middlewarePostCourse, middlewareEditCourse } = require('../middlewares/courses.middleware')
const { getAllCourses, getOneCourse, addOneCourse, deleteOneCourse, editOneCourse } = require('../controllers/coursesMongodb.controller')
const router = express.Router()

router.route("")
    .get(getAllCourses)
    .post(middlewarePostCourse(), addOneCourse)

router.route("/:id")
    .get(getOneCourse)
    .delete(deleteOneCourse)
    .patch(middlewareEditCourse(), editOneCourse)

module.exports = router