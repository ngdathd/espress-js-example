import express from 'express';

import router from './router';

/**
 * Express instance
 * @public
 */
const app = express();

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// mount api v1 routes
app.use('/v1', router);

export default app;
