import { User } from '../../domain/User';

export interface IGetUserProvider {
    getUser(id: string): Promise<User>;
}