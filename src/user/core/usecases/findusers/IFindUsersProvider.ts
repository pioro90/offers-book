import { FindUsersCommand } from './FindUsersCommand';
import { User } from '../../domain/User';

export interface IFindUsersProvider {
    findUsers(findUsersDto: FindUsersCommand): Promise<User[]>;
}