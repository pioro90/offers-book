import * as config from 'config';

export class ServerConfig {
    port: number;
}

export default config.get('server') as ServerConfig;