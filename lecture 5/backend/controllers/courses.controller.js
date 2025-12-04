const { validationResult } = require("express-validator")
const { courses } = require("../data/courses")

const getAllCourses = async (req, res) => {
    res.json(courses)
}
const getOneCourse = (req, res) => {
    const id = +req.params.id
    const data = courses.find((course) => course.id === id)
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({ msg: "courses not found" })
    }
}
const addOneCourse = (req, res) => {
    const { title, price } = req.body
    const validation = validationResult(req)
    console.log(validation.array());

    // if (!title || !price) {
    //     return res.status(400).json({ msg: "Title and price are required" })
    // }

    // const newCourse = {
    //     id: courses.length + 1,
    //     title,
    //     price: Number(price),
    // }
    // courses.push(newCourse)

    if (!validation.isEmpty()) {
        res.status(400).json(validation["errors"][0])
    } else {
        const newCourse = {
            id: +courses[courses.length - 1].id + 1,
            title,
            price: Number(price),
        }
        courses.push(newCourse)
        res.status(201).json(newCourse)
    }
}
const editOneCourse = (req, res) => {
    const id = +req.params.id
    const data = courses.find((course) => course.id === id)
    if (!data) {
        return res.status(404).json({ msg: "courses not found" })
    }

    const newCourse = { ...data, ...req.body }
    courses.map((course) => {
        course.id === id ?
            course.title = req.body.title :
            null
    })
    return res.status(200).json(newCourse)
}
const deleteOneCourse = (req, res) => {
    const id = +req.params.id
    const data = courses.find((course) => course.id === id)
    if (!data) {
        return res.status(404).json({ msg: "courses not found" })
    }
    courses = courses.filter((course) => +course.id != id)
    console.log(courses);

    return res.status(200).json({ msg: "done delete" })
}

module.exports = { getAllCourses, getOneCourse, addOneCourse, editOneCourse, deleteOneCourse }