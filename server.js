const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const db = require('./models');

// Serve static content for the app from the public directory, body parser for front end
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// // Routes set up once server running again
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

// move to html routes

// use unit 14 hw develop folder to change route based on authentication, and move to seprate routes file.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/mood', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/mood.html'));
});

// Sequelize
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(
        `

        🤖  The app is running on port ${PORT} 
    
        http://localhost:${PORT}/
    
        `
      );
    });
  });