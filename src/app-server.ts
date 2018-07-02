import * as express from 'express';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import createUserRouter from './user/infrastructure/entrypoints/create-users-router';


export class AppServer {
    server: express.Application;

    constructor() {
        this.server = express();
        this.server.use(helmet());
        this.server.use(bodyParser.urlencoded({extended: false}));
        this.server.use(bodyParser.json());

        this.server.use('/users', createUserRouter());
    }
}

