const express = require('express');
const user_router = express.Router();

var users = [
    { id: 1, name: 'User1', email: 'user1@gmail.com', age: 11 },
    { id: 2, name: 'User2', email: 'user2@gmail.com', age: 12 },
    { id: 3, name: 'User3', email: 'user3@gmail.com', age: 13 },
    { id: 4, name: 'User4', email: 'user4@gmail.com', age: 14 },
];

user_router.get('/', function (req, res) {
    res.render('users/index', { users: users });
});

user_router.get('/search', (req, res) => {
    var result = [];

    var name_search = req.query.name; // lấy giá trị của key name trong query parameters gửi lên

    if (name_search) {
        result = users.filter((user) => {
            // tìm kiếm chuỗi name_search trong user name.
            // Lưu ý: Chuyển tên về cùng in thường hoặc cùng in hoa để không phân biệt hoa, thường khi tìm kiếm
            return (
                user.name.toLowerCase().indexOf(name_search.toLowerCase()) !==
                -1
            );
        });
    }

    res.render('users/index', {
        users: result, // render lại trang users/index với biến users bây giờ chỉ bao gồm các kết quả phù hợp
    });
});

user_router.get('/create', (req, res) => {
    res.render('users/create');
});

user_router.post('/create', (req, res) => {
    users.push({ ...req.body, id: 101 });
    res.redirect('/users');
});

user_router.get('/:id', (req, res) => {
    // Tìm user phù hợp với params id
    var user = users.find((user) => {
        return user.id == parseInt(req.params.id);
    });

    // Render trang show, với một biến user được định nghĩa là user vừa tìm được
    res.render('users/show', {
        user: user,
    });
});

user_router.delete('/:id', (req, res) => {
    res.send(req.params);
});

// Exports cho biến user_router
module.exports = user_router;
