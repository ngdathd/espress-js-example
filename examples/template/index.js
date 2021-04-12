const express = require('express');
const app = express();
const port = 3004;

app.listen(port, () => {
    console.log(`Hello World app listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('<h2>This is my first app</h2>');
});

// app.get('/users', (req, res) => {
//     res.send(
//         '<div class="users"><table><thead><tr><th> Name </th><th> Email </th></tr></thead><tbody><tr><td> User1 </td><td> user1@gmail.com </td></tr><tr><td> User2 </td><td> user2@gmail.com </td></tr></tbody></table></div>'
//     );
// });

app.set('views', 'examples/template/views');
app.set('view engine', 'pug'); // Sử dụng pug làm view engine

var users = [
    { id: 1, name: 'User1', email: 'user1@gmail.com' },
    { id: 2, name: 'User2', email: 'user2@gmail.com' },
    { id: 3, name: 'User3', email: 'user3@gmail.com' },
    { id: 4, name: 'User4', email: 'user4@gmail.com' },
];

app.get('/users', function (req, res) {
    res.render('users/index', { users: users });
});

app.get('/users/search', (req, res) => {
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

app.get('/users/create', (req, res) => {
    res.render('users/create');
});

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/users/create', (req, res) => {
    users.push(req.body);
    res.redirect('/users');
});

app.get('/users/:id', (req, res) => {
    // Tìm user phù hợp với params id
    var user = users.find((user) => {
        return user.id == parseInt(req.params.id);
    });

    // Render trang show, với một biến user được định nghĩa là user vừa tìm được
    res.render('users/show', {
        user: user,
    });
});

app.delete('/users/:id', (req, res) => {
    res.send(req.params);
});
