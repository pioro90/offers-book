import { FindUsersDto } from './FindUsersDto';
import { User } from '../../domain/User';

export interface IFindUsersProvider {
    findUsers(findUsersDto: FindUsersDto): Promise<User[]>;
}