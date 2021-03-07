const express = require('express');
const app = express();

const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('An alligator approaches!');
// });

app.listen(3000, () => console.log(` 🤖 The server is listening on port ${PORT}`));