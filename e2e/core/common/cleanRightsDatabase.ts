import { connection } from 'mongoose';

export default (): Promise<boolean> => connection.db.dropCollection('rights');