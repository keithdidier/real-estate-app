const express = require('express');

const app = express();

app.use( express.static( `${__dirname}/../build` ));

const PORT = 8083;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));