import { User } from './User';

export interface UserRepository {
    load(id: string): Promise<User>;

    save(user: User): Promise<void>;
}