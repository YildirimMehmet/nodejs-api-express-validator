'use strict';

const express = require('express');
const { validate } = require('../validator');
const rules = require('../../validations/UserValidation');

// api/users
const usersRouter = () => {
    const router = express.Router();

    router.post('/create', rules(), validate, async (req, res) => {
        // TODO
        var result = "Yeni kullanıcı eklendi.";
        res.status(201).send(result);
    })

    router.post('/login', rules(), validate, async (req, res) => {
        // TODO
        var result = "Giriş yapıldı";
        res.status(200).send(result);
    })

    return router;
};


module.exports = usersRouter;