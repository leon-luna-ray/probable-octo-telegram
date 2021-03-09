const path = require('path');

module.exports = function(app) {

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/public/index.html'));
    });

    app.get('/mood', (req, res) => {
        res.sendFile(path.join(__dirname + '/public/mood.html'));
    });

    // use unit 14 hw develop folder to change route based on authentication.
};