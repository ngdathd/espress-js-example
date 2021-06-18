const hello = (req, res, next) => {
    try {
        return res.send('Hello World!');
    } catch (error) {
        console.log(error);
        return res.end();
    }
};

const hi = (req, res, next) => {
    try {
        return res.send('Hi World!');
    } catch (error) {
        console.log(error);
        return res.end();
    }
};

export {hello, hi};
