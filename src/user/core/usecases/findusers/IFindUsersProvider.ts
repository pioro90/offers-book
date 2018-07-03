import { FindUsersCommand } from './FindUsersCommand';
import { User } from '../../domain/User';

export interface IFindUsersProvider {
    findUsers(findUsersCommand: FindUsersCommand): Promise<User[]>;
}