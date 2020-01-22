const tasks = require('../controllers/tasks')
module.exports = function (app) {
    app.get('/tasks', tasks.index)

    app.post('/task', tasks.add_task)

    app.delete('/remove/:id', tasks.remove_task)

    app.get('/task/:_id', tasks.show_task)

    app.put('/update/:_id', tasks.update_task)
};