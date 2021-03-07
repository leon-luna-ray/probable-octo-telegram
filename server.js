const express = require('express');
const app = express();
const path = require('path');
// const db = require('./models');`

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(PORT, () => console.log(` 
 🤖 The server is listening on port ${PORT} 
`));

// Sequelize add later

// db.sequelize.sync().then(() => {
//     app.listen(PORT, () => {
//       console.log(
//         '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
//         PORT,
//         PORT,
//       );
//     });
//   });