require('../models/person')
const mongoose = require("mongoose");
const Person = mongoose.model("Person");

module.exports = {
    index: function (req, res) {
        Person.find().sort('-createdAt')
            .then(persons => res.json(persons))
            .catch(err => res.json(err));
    },
    add_person: function (req, res) {
        const person = new Person({
            name: req.params.name
        });
        person.save()
            .then(persons => res.json(persons))
            .catch(err => res.json(err));
    },
    remove_person: function (req, res) {
        Person.remove({
                name: req.params.name
            })
            .then(persons => res.json(persons))
            .catch(err => res.json(err));
    },
    show_person: function (req, res) {
        Person.findOne({
                name: req.params.name
            })
            .then(persons => res.json(persons))
            .catch(err => res.json(err));
    },
};