'use strict';

const { body } = require('express-validator')

const rules = () => {
    return [
        body('firstname').not().isEmpty(),
        body('surname').not().isEmpty(),
        body('email').isEmail(),
        body('password').isLength({ min: 5 }),
    ]
}
module.exports = rules;