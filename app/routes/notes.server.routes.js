const notes = require('../controllers/notes.server.controllers')

module.exports = function(app) {
    app.route('/api/notes')
        .get(notes.fetch)
        .post(notes.create);

    app.route('/api/notes/:id')
        .get(notes.fetchOne)
        .put(notes.update)
        .delete(notes.delete)
}