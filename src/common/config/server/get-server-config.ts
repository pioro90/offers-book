import * as config from 'config';
import { ServerConfig } from './server-config';

export default config.get('server') as ServerConfig;