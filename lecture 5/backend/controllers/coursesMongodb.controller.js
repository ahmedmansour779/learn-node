const { validationResult } = require("express-validator")
const Courses = require("../models/course.model")

const getAllCourses = async (req, res) => {
    const search = req.query.search;
    if (!search || search.trim() === "") {
        const data = await Courses.find()
        res.json(data)
    }
    try {
        const data = await Courses.find({
            title: { $regex: search, $options: "i" }
        });

        if (data.length === 0) {
            return res.status(404).json({ msg: "no courses found" });
        }

        return res.status(200).json(data);

    } catch (err) {
        return res.status(500).json({ msg: "server error" });
    }
}
const getOneCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Courses.findById(id);

        if (!data) {
            return res.status(404).json({ msg: "course not found" });
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ msg: "invalid course id" });
    }
};
const addOneCourse = async (req, res) => {
    const validation = validationResult(req);

    if (!validation.isEmpty()) {
        return res.status(400).json(validation.errors[0]);
    }

    try {
        const newCourse = await Courses.create(req.body);

        res.status(201).json(newCourse);

    } catch (err) {
        res.status(500).json({ msg: "Error while creating course", err });
    }
};
const deleteOneCourse = async (req, res) => {
    try {
        const id = req.params.id;

        const result = await Courses.deleteOne({ _id: id });

        // result = { acknowledged: true, deletedCount: 1 }
        if (result.deletedCount === 0) {
            return res.status(404).json({ msg: "course not found" });
        }

        return res.status(200).json({ msg: "course deleted successfully" });

    } catch (err) {
        return res.status(400).json({ msg: "invalid id" });
    }
};
const editOneCourse = async (req, res) => {
    try {
        const id = req.params.id;

        const updatedCourse = await Courses.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updatedCourse) {
            return res.status(404).json({ msg: "course not found" });
        }

        return res.status(200).json(updatedCourse);

    } catch (err) {
        return res.status(400).json({ msg: "invalid id" });
    }
};


module.exports = { getAllCourses, getOneCourse, addOneCourse, deleteOneCourse, editOneCourse }