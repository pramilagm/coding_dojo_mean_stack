const quotes = require('../controllers/quotes')
module.exports = function (app) {
    app.get("/", (req, res) => {
        quotes.index(req, res);

    });
    app.post("/quotes", (req, res) => {
        quotes.create(req, res);
    });
    app.get("/quotes", (req, res) => {
        quotes.show(req, res)

    });
};