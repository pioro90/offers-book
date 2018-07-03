import { App } from '../../src/App';
import { AppDatabase } from '../../src/AppDatabase';
import { AppServer } from '../../src/AppServer';


const appTestDatabase = new AppDatabase({
    host: '127.0.0.1',
    port: 27017,
    name: 'ads-book-test',
    user: 'none',
    password: 'none'
});
const appTestServer = new AppServer();

export const appTest = new App(appTestServer, appTestDatabase);
