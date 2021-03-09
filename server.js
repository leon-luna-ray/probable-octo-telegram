const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const db = require('./models');

// Serve static content for the app from the public directory, body parser for front end
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// // Routes
require('./routes/html-routes.js')(app);
// require('./routes/api-routes.js')(app);

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