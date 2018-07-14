import * as express from 'express';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import createUserRouter, { usersRootPath } from './core/infrastructure/api/createUserRouter';
import createCategoryRouter, { categoryRootPath } from './category/infrastructure/entrypoints/createCategoryRouter';
import createRightRouter, { rightsRootPath } from './core/infrastructure/api/createRightRouter';


export class AppServer {
    server: express.Application;

    constructor() {
        this.server = express();
        this.server.use(helmet());
        this.server.use(bodyParser.urlencoded({extended: false}));
        this.server.use(bodyParser.json());

        this.server.use(usersRootPath, createUserRouter());
        this.server.use(categoryRootPath, createCategoryRouter());
        this.server.use(rightsRootPath, createRightRouter());
    }
}

