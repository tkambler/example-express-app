const express = require('express');
const path = require('path');
const app = express();
const port = 9000;

app.use('/', express.static(path.resolve(__dirname, 'public')));

app.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log(`App is listening on port: ${port}`);
});
