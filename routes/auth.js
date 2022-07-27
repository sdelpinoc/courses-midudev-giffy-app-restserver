import { Router } from 'express';
import { body, param, query } from 'express-validator';

import { login } from '../controllers/auth.js';
import { validateFields } from '../middlewares/validate-fields.js';

const routerAuth = Router();

routerAuth.post('/login', 
    [
        body('email', 'Email is obligatory').isEmail(),
        body('password', 'Password is required').not().isEmpty(),
        validateFields
    ], 
    login
);

export {
    routerAuth
};