export interface Repository<T> {
    load(id: string): Promise<T>;

    save(aggregate: T): Promise<void>;
}