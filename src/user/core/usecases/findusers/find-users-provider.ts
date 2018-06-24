import { FindUsersDto } from './find-users-dto';
import { User } from '../../domain/user';

export interface IFindUsersProvider {
    findUsers(findUsersDto: FindUsersDto): Promise<User[]>;
}