const express = require('express');
const app = express();
const port = 3002;

app.listen(port, () => {
    console.log(`Hello World app listening at http://localhost:${port}`);
});

app.get('/', function (req, res) {
    res.send('root');
});

app.get('/about', function (req, res) {
    res.send('about');
});

app.get('/random.text', function (req, res) {
    res.send('random.text');
});

app.get('/ab?cd', function (req, res) {
    res.send('ab?cd');
});

app.get('/ab+cd', function (req, res) {
    res.send('ab+cd');
});

app.get('/ab*cd', function (req, res) {
    res.send('ab*cd');
});

app.get('/ab(cd)?e', function (req, res) {
    res.send('ab(cd)?e');
});

app.get(/abc/, function (req, res) {
    res.send('/abc/');
});

app.get(/.*fly$/, function (req, res) {
    res.send('/.*fly$/');
});

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params);
});

app.get('/user/:userId(\\d+)', function (req, res) {
    res.send(req.params);
});

app.get('/flights/:from-:to', function (req, res) {
    res.send(req.params);
});

app.get('/example/a', function (req, res, next) {
    res.send('Hello from A!');
});

app.get(
    '/example/b',
    function (req, res, next) {
        console.log('the response will be sent by the next function ...');
        next();
    },
    function (req, res) {
        res.send('Hello from B!');
    }
);

var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
};

var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
};

var cb2 = function (req, res) {
    res.send('Hello from C!');
};

var cb3 = function (req, res) {
    res.send('Hello from D!');
};

app.get('/example/c', [cb0, cb1, cb2]);

app.get('/example/d', [cb0, cb1], cb3);

app.route('/book')
    .get(function (req, res) {
        res.send('Get a random book');
    })
    .post(function (req, res) {
        res.send('Add a book');
    })
    .put(function (req, res) {
        res.send('Update the book');
    });

var birds = require('./birds');

app.use('/birds', birds);
