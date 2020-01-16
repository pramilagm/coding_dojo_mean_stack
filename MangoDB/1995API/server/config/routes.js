const persons = require('../controllers/persons')
module.exports = function (app) {
    app.get('/', persons.index)

    app.get('/new/:name', persons.add_person)

    app.get('/remove/:name', persons.remove_person)

    app.get('/:name', persons.show_person)
};