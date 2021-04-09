var express = require('express');
var router = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

// handler for the /user path
router.get('/user', function (req, res, next) {
    res.send('user');
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use(
    '/user/:id',
    function (req, res, next) {
        console.log('Request URL:', req.originalUrl);
        next();
    },
    function (req, res, next) {
        console.log('Request Type:', req.method);
        next();
    }
);

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get(
    '/user/:id',
    function (req, res, next) {
        // if the user ID is 0, skip to the next router
        if (req.params.id === '0') {
            next('route');
        }
        // otherwise pass control to the next middleware function in this stack
        else {
            next();
        }
    },
    function (req, res, next) {
        // send a regular page
        res.send('user regular');
    }
);

// handler for the /user/:id path, which send a special page
router.get('/user/:id', function (req, res, next) {
    console.log(req.params.id);
    res.send('user special');
});

module.exports = router;
