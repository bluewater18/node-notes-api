const express = require('express');

module.exports = function() {
    const app = express()
    app.use(express.json())
    require('../app/routes/notes.server.routes')(app);
    return app
}