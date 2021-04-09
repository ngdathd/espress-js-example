const express = require('express');
const app = express();
const port = 3003;

app.listen(port, () => {
    console.log(`Hello World app listening at http://localhost:${port}`);
});

const logCurrentTime1 = () => {
    console.log('Time1:', Date.now());
};

const logCurrentTime2 = () => {
    console.log('Time2:', Date.now());
};

const logCurrentTime3 = () => {
    console.log('Time3:', Date.now());
};

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
    },
};

app.use(express.static('public', options));
app.use(express.static('uploads'));
app.use(express.static('examples/middleware'));

var cookieParser = require('cookie-parser');

// load the cookie-parsing middleware
app.use(cookieParser());

app.use(function (req, res, next) {
    logCurrentTime1();
    next();
});

app.get('/book', function (req, res, next) {
    res.send('BOOK');
});

app.use('/book/:id', function (req, res, next) {
    logCurrentTime2();
    next();
});

app.get('/book/:id', function (req, res, next) {
    logCurrentTime3();
    next();
});

app.get('/book/:id', function (req, res, next) {
    res.send(req.params);
});

app.post('/book/:id', function (req, res, next) {
    res.send(req.params);
});

app.put(
    '/book/:id',
    function (req, res, next) {
        // if the book ID is 0, skip to the next route
        if (req.params.id === '0') {
            next('route');
        }
        // otherwise pass the control to the next middleware function in this stack
        else {
            next();
        }
    },
    function (req, res, next) {
        // handler for the /book/:id path, which send a regular page
        res.send('regular');
    }
);

// // handler for the /book/:id path, which send a test page
// app.put('/book/:id', function (req, res, next) {
//     res.send('test');
// });

// handler for the /book/:id path, which send a special page
app.put('/book/:id', function (req, res, next) {
    res.send('special');
});

var user = require('./user');

app.use('/', user);
