require('../models/task')
const mongoose = require("mongoose");
const task = mongoose.model("Task");

module.exports = {
    index: function (req, res) {
        task.find()
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    },
    index: function (req, res) {
        task.find(req.task)
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    },
    add_task: function (req, res) {
        const task = new task(req.body);
        task.save()
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    },
    remove_task: function (req, res) {
        task.remove({
                task: req.params.task
            })
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    },
    show_task: function (req, res) {
        task.findOne({
                task: req.params._id
            })
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    },
    update_task: (req, res) => {
        this.show_task(_id).save()
    }
};