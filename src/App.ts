import { Server } from 'http';
import { AppServer } from './AppServer';
import { AppDatabase } from './AppDatabase';


export class App {
    httpServer: Server;

    constructor(private appServer: AppServer,
                private appDatabase: AppDatabase) {
    }

    async startUp() {
        try {
            await this.appDatabase.connect();
            this.httpServer = await this.appServer.server.listen(3000);

            console.log(`Server is listening on 3000`);
        } catch (e) {
            console.error(e);
        }
    }

    async shutDown() {
        try {
            await new Promise((resolve, reject) => {
                this.httpServer.close(() => {
                    console.log('Server on 3000 is shut down');
                    resolve();
                })
            });
            await this.appDatabase.disconnect();
        } catch (e) {
            console.error(e);
        }
    }
}