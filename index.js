const express = require('express');
const handlebars = require('express-handlebars');
const fs = require('fs');
const path = require('path');

const app = express();

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));


app.get('/', (request, response) => {
   const articles = fs.readdirSync('./articles');
   articles.forEach(fs.readFileSync(articles));
   //const loadArticles = JSON.stringify(articles);

    response.render('home', {articles: articles});
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
