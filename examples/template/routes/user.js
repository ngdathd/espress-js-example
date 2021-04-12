const express = require('express');
const user_router = express.Router();

// Require user controller
const user_controller = require('../controllers/user');

user_router.get('/', user_controller.index); // Lấy hàm ở key index

user_router.get('/search', user_controller.search);

user_router.get('/create', user_controller.get_create);

user_router.post('/create', user_controller.post_create);

user_router.get('/:id', user_controller.show);

user_router.delete('/:id', user_controller.delete);

// Exports cho biến user_router
module.exports = user_router;
