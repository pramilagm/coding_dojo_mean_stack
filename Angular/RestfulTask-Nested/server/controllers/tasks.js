require('../models/task')
const mongoose = require("mongoose");
const Task = mongoose.model("Task");

module.exports = {
    index: function (req, res) {
        Task.find()
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    },
    add_task: function (req, res) {
        const newTask = new Task(req.body);
        console.log("REQ BODY: ", req.body)
        newTask.save()
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    },
    remove_task: function (req, res) {
        Task.remove({
                _id: req.params.id
            })
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    },
    show_task: function (req, res) {
        Task.findOne({
                task: req.params._id
            })
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    },
    update_task: (req, res) => {
        console.log(req.params._id)
        Task.findOneAndUpdate({
                _id: req.params._id
            }, req.body)
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    }
};