import { App } from '../../src/app';
import { AppDatabase } from '../../src/app-database';
import { AppServer } from '../../src/app-server';


const appTestDatabase = new AppDatabase({
    host: '127.0.0.1',
    port: 27017,
    name: 'ads-book-test',
    user: 'none',
    password: 'none'
});
const appTestServer = new AppServer();

export const appTest = new App(appTestServer, appTestDatabase);
