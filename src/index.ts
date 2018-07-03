import { App} from './App';
import { AppDatabase } from './AppDatabase';
import { AppServer } from './AppServer';
import getDatabaseConfig from './common/config/DatabaseConfig';


const appDatabase = new AppDatabase(getDatabaseConfig());
const appServer = new AppServer();

const app = new App(appServer, appDatabase);
app.startUp();