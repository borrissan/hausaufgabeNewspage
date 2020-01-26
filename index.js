const express = require('express');
const handlebars = require('express-handlebars');
const fs = require('fs');
const app = express();

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));

const messages = []; //Array

app.get('/', (request, response) => {
    response.render('home', {messages: messages});
});

app.post('/new', (request, response) => {
   if (fs.existsSync('./messages.json')) {
    const text = fs.readFileSync('./messages.json', {encoding: 'utf-8'});
    messages = JSON.parse(text);
    }  else {
    messages = [];
    }

    messages.push({
        author: request.body.author,
        text: request.body.text,
        date: new Date()
    });

    const text = JSON.stringify(messages);
    fs.writeFileSync('./messages.json', text, {encoding: 'utf-8'});

    response.redirect('/');
});


app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
