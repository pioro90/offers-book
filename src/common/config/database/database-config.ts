export class DatabaseConfig {
    constructor(
        public host: string,
        public port: number,
        public name: string,
        public user: string,
        public password: string
    ) {}
}