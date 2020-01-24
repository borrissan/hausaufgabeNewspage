const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));

const messages = [];

app.get('/', (request, response) => {
    response.render('home', {messages: messages});
});

app.post('/new', (request, response) => {

    messages.push({
        author: request.body.author,
        text: request.body.text,
        date: new Date()
    });
    response.redirect('/');
});


app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
