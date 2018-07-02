import { App} from './app';
import { AppDatabase } from './app-database';
import { AppServer } from './app-server';
import getDatabaseConfig from './common/config/database-config';


const appDatabase = new AppDatabase(getDatabaseConfig());
const appServer = new AppServer();

const app = new App(appServer, appDatabase);
app.startUp();