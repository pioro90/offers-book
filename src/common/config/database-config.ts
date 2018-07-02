import * as config from 'config';

export class DatabaseConfig {
    constructor(
        public host: string,
        public port: number,
        public name: string,
        public user: string,
        public password: string
    ) {}
}

export default (): DatabaseConfig => {
    return config.get('database') as DatabaseConfig;
}