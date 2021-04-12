var users = [
    { id: 1, name: 'User1', email: 'user1@gmail.com', age: 11 },
    { id: 2, name: 'User2', email: 'user2@gmail.com', age: 12 },
    { id: 3, name: 'User3', email: 'user3@gmail.com', age: 13 },
    { id: 4, name: 'User4', email: 'user4@gmail.com', age: 14 },
];

module.exports = {
    index: function (req, res) {
        res.render('users/index', {
            users: users,
        });
    },

    search: function (req, res) {
        var result = [];

        var name_search = req.query.name; // lấy giá trị của key name trong query parameters gửi lên

        if (name_search) {
            result = users.filter((user) => {
                // tìm kiếm chuỗi name_search trong user name.
                // Lưu ý: Chuyển tên về cùng in thường hoặc cùng in hoa để không phân biệt hoa, thường khi tìm kiếm
                return (
                    user.name
                        .toLowerCase()
                        .indexOf(name_search.toLowerCase()) !== -1
                );
            });
        }

        res.render('users/index', {
            users: result, // render lại trang users/index với biến users bây giờ chỉ bao gồm các kết quả phù hợp
        });
    },

    get_create: function (req, res) {
        res.render('users/create');
    },

    post_create: function (req, res) {
        users.push({ ...req.body, id: 101 });
        res.redirect('/users');
    },

    show: function (req, res) {
        // Tìm user phù hợp với params id
        var user = users.find((user) => {
            return user.id == parseInt(req.params.id);
        });

        // Render trang show, với một biến user được định nghĩa là user vừa tìm được
        res.render('users/show', {
            user: user,
        });
    },

    delete: function (req, res) {
        res.send(req.params);
    },
};
