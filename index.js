var data = require('./data.json');

var express = require('express');
var mustacheExpress = require('mustache-express');

var app = express();
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', (req, res) => {
    res.render('index', {
        title: data['data']['title'],
        body: data['data']['body']
    })
})

app.listen(3001, () => {

})
