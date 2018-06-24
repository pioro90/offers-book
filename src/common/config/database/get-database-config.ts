import * as config from 'config';
import { DatabaseConfig } from './database-config';

export default (): DatabaseConfig => {
    return config.get('db') as DatabaseConfig;
}