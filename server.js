const express = require('express');
const path = require('path');

const dirname = path.resolve();
const app = express();
const PORT = 3000;

app.use(express.static(`${dirname}/dist`));

app.get('/*', (request, response) => {
    response.sendFile(`${dirname}/dist/index.html`);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});
