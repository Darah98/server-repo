'use strict';

const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.static('./public'));

// test route
server.get('/test', (request, response) => {
    response.send('You are doing great');
});

server.listen(PORT, () => {
    console.log('listening on port', PORT);
});
