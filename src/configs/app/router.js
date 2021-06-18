import helloRouter from 'api/hello';
import express from 'express';

const router = express.Router();

router.use('/hello', helloRouter);

export default router;
