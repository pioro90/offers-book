import { connection } from 'mongoose';


export class UserAppTest {

    static cleanDatabase(): Promise<boolean> {
        return connection.db.dropCollection('users');
    }

}