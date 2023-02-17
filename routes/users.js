import { Router } from 'express';
import { body, query } from 'express-validator';
import {
    usersGet,
    usersPost,
} from '../controllers/users.js';

import { emailExists } from '../helpers/db-validators.js';

import { validateFields } from '../middlewares/index.js';

export const routerUsers = Router();

routerUsers.get('/',
    [
        query('from', 'from must be a number').optional().isNumeric(),
        query('limit', 'limit must be a number').optional().isNumeric(),
        validateFields,

    ],
    usersGet
);

// We add a middleware in the second argument, if we send several we use a array
routerUsers.post('/',
    [
        body('email', 'Email is not valid').isEmail().custom(emailExists),
        body('password', 'Password is too short').isLength({ min: 5 }),
        body('name', 'Name is obligatory').optional(),
        validateFields
    ],
    usersPost
);