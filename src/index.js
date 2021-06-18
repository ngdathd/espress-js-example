import {connectDatabase, syncDatabase} from 'configs/databases';
import {port} from 'configs/vars';

(async () => {
    try {
        await connectDatabase();

        // eslint-disable-next-line global-require
        const app = require('configs/app');

        await syncDatabase();

        app.default.listen(port);
    } catch (error) {
        console.log(error);
    }
})();
