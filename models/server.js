import express from 'express';
import cors from 'cors';

import { routerUsers } from '../routes/users.js';
import { routerAuth } from '../routes/auth.js';
import { routerFavs } from '../routes/favs.js';

import { dbConnection } from '../database/config.js';
import { validateJSON } from '../middlewares/validate-fields.js';

export default class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.userPath = '/api/users';
        this.authPath = '/api/auth';
        this.favsPath = '/api/favs';
        // this.corsOptions = {
        //     origin: 'http://example.com',
        //     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
        // };

        // Connect DB
        this.connectDB();

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Read and parse of the body(The Content-Type of the request must be json)
        this.app.use(express.json());

        // Public directory, we set "the root" directory for our application
        this.app.use(express.static('public'));

        // Check format JSON body
        this.app.use(validateJSON);
    }

    routes() {
        this.app.use(this.authPath, routerAuth);
        this.app.use(this.userPath, routerUsers);
        this.app.use(this.favsPath, routerFavs);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running in PORT: ', this.port);
        });
    }
}