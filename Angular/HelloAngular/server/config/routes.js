const tasks = require('../controllers/tasks')
module.exports = function (app) {
    app.get('/', tasks.index)

    app.get('/create/:tasks', tasks.add_task)

    app.get('/remove/:tasks', tasks.remove_task)

    app.get('/find/:_id', tasks.show_task)

    app.put('/update/:_id', tasks.update_task)
};