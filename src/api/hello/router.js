import express from 'express';

import {hello, hi} from './controller';

const router = express.Router();

router.route('/').get(hello).post(hi);

export default router;
