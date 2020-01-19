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
        console.log("REQ BODY: ", req.body)
        const newTask = new Task(req.body);
        newTask.save()
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    },
    remove_task: function (req, res) {
        Task.remove({
                task: req.params.task
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
        this.show_task(_id).save()
    }
};