const express = require('express');
const app = express();
const port = 3004;

// Require user route
const userRoute = require('./routes/user');

app.listen(port, () => {
    console.log(`Hello World app listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('<h2>This is my first app</h2>');
});

app.set('views', 'examples/template/views');
app.set('view engine', 'pug'); // Sử dụng pug làm view engine

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Dùng userRoute cho tất cả các route bắt đầu bằng '/users'
app.use('/users', userRoute);
