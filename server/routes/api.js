import express from 'express';
import users from '../controllers/users';

export default (app) => {

    const router = express.Router();

    router.use('/users', users(app));

    return router;
};