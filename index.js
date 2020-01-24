const express = require('express');
// const volume = require('./my-modules/pyramid');

const messageListTemplate = require('./templates/message-list.template');
const app = express();

app.use(express.urlencoded({ extended: true }));

const messages = [];

app.get('/', (request, response) => {
    response.send(messageListTemplate(messages));
});

app.post('/', (request, response) => {
    console.log('a', request.body.author);
    console.log('b', request.body.text);

    messages.push({
       author : request.body.author,
       text: request.body.text
    });

    response.send(messageListTemplate(messages));
});

app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
