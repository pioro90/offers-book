import { User } from '../../domain/user';

export interface IGetUserProvider {
    getUser(id: string): Promise<User>;
}