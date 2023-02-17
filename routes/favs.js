import { Router } from 'express';
import { param } from 'express-validator';
import {
    favsPost,
    favsGet,
    favsDelete
} from '../controllers/favs.js';

import { validateFields, validateJWT } from '../middlewares/index.js';

export const routerFavs = Router();

routerFavs.get('/',
    validateJWT,
    validateFields,
    favsGet
);

// We add a middleware in the second argument, if we send several we use a array
routerFavs.post('/:id',
    [
        param('id', 'Is not a valid id').not().isEmpty(),
        validateJWT,
        validateFields,
    ],
    favsPost
);

routerFavs.delete('/:id',
    [
        param('id', 'Is not a valid id').not().isEmpty(),
        validateJWT,
        validateFields,
    ],
    favsDelete
);