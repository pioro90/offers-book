import { App} from './app';
import { AppDatabase } from './app-database';
import { AppServer } from './app-server';
import getDatabaseConfig from './common/config/database-config';


export const appDatabase = new AppDatabase(getDatabaseConfig());
export const appServer = new AppServer();

export const app = new App(appServer, appDatabase);
app.startUp();