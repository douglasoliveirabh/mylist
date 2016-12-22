import express from 'express';

export default (app) => {

    const router = express.Router();
    const User = app.datasource.models.User;

    router
        .get("/", (req, res) => {
            User
                .find()
                .then((users) => {
                    res.json(users);
                })
                .catch((err) => {
                    res.send(err);
                })
        });

    return router;
    
};